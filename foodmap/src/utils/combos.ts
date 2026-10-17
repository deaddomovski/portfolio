import type { Dish } from '../types/index'
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

    // салаты и холодные закуски
    cold: "salad",

    // гарниры и хлеб
    garnish: "side",
    bread: "side",

    // соусы
    sauce: "extra",

    // на будущее
    drinks: "drink",
    dessert: "dessert",
}

export const templates: string[][] = [
    ["main", "drink"],
    ["main", "salad"],
    ["main", "salad", "drink"],
    ["main", "soup"],
    ["main", "soup", "salad"],
    ["main", "side", "drink"],
    ["soup", "salad"],
    ["main", "drink", "dessert"],
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
            return;
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
    return pillow.slice(0,3)
}