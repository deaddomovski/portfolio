import type { Dish, Restaurant } from '../types/index'
export type Mode = "cheap" | "balanced" | "gourmet"

export const categoryRole: Record<string, string> = {
    // основные блюда
    barbecue: "main",
    khinkali: "main",
    dough: "main",
    hot: "main",
    fish: "main",
    special: "main",

    // супы
    soup: "soup",

    // салаты
    cold: "salad",

    // закуски: сыры, пхали, соленья
    snack: "snack",

    // гарниры и хлеб
    garnish: "side",
    bread: "side",

    // соусы
    sauce: "extra",

    // напитки и десерты
    drinks: "drink",
    dessert: "dessert",
}

export const templates: string[][] = [
    //main 
    ["main"],

    // основное + напиток
    ["main", "drink"],

    // классический обед из трёх
    ["main", "salad", "drink"],
    ["main", "snack", "drink"],
    ["main", "soup", "drink"],
    ["main", "side", "drink"],
    ["main", "dessert", "drink"],

    // плотный обед из четырёх
    ["main", "soup", "salad", "drink"],
    ["main", "soup", "snack", "drink"],
    ["main", "salad", "snack", "drink"],
    ["main", "salad", "side", "drink"],

    // лёгкий обед без основного
    ["soup", "side", "drink"],
    ["soup", "salad", "drink"],
]

const weights: Record<Mode, { price: number; taste: number; filling: number }> = {
    cheap:     { price: 0.3, taste: 0, filling: 0.7 },
    balanced:  { price: 0.2, taste: 0.4, filling: 0.4 },
    gourmet:   { price: 0, taste: 0.8, filling: 0.2 },
}

export function getByRole( dishes: Dish[], role: string): Dish[] {
    return dishes.filter(d => categoryRole[d.category] === role )
} 

export type Combo = {
    items: Dish[]
    total: number
}


function scoreCombo(combo: Combo, budget: number, mode: Mode): number {
    const priceScore = 1 - (combo.total / budget)
    let caloriesFull = 0
        for (const dish of combo.items) {
            caloriesFull = dish.calories * (dish.minQty ?? 1) + caloriesFull
        }
    const fillingScore = Math.min(caloriesFull / 1500, 1)
    const tastyScore = 0.5
    const w = weights[mode]
    return (
        w.price * priceScore + w.taste * tastyScore + w.filling * fillingScore
    )
}

function matchTemplate(dishes: Dish[], roles: string[], chosen: Dish[], budget: number, result: Combo[]){
    if (roles.length === 0) {
        let summ = 0
        for (const a of chosen) {
            summ = a.price * (a.minQty ?? 1) + summ
        }
        result.push({items: chosen, total: summ})
        return ;
    }
    const role = roles[0]
    const rest = roles.slice(1)
    let spent = 0
    for (const a of chosen){
        spent = a.price * (a.minQty ?? 1) + spent
    }
    for (const dish of getByRole(dishes, role)) {
            if (spent + dish.price * (dish.minQty ?? 1)  > budget){
                continue
            }
        matchTemplate(dishes, rest,[...chosen, dish], budget, result)
    }


}

export function findCombos(dishes: Dish[], budget: number, mode: Mode): Combo[] {
    const pillow : Combo[] = []
    for (const template of templates){
        matchTemplate(dishes, template, [], budget, pillow)
    }
    pillow.sort((a, b) => scoreCombo(b, budget,mode) - scoreCombo(a,budget,mode))
    const top: Combo[] = []        // итоговая тройка
    const used: string[] = []      // id основных блюд, которые уже взяли

    for (const combo of pillow) {
        const mainType = combo.items[0].category

        if (used.includes(mainType)) {
            continue
        }

        used.push(mainType)
        top.push(combo)

        if (top.length === 3) {
            break
        }
    }

    return top
}

export function findBestOverall(restaurants: Restaurant[], dishes: Dish[], budget: number, mode: Mode): Combo[]{
    const all: Combo[] = []
    for(const r of restaurants){
        const rDishes = dishes.filter(d => d.restaurantId === r.id)
        const top = findCombos(rDishes, budget, mode)
        all.push(...top)
    }
    all.sort((a, b) => scoreCombo(b, budget,mode) - scoreCombo(a,budget,mode))
    return all.slice(0,5)
}