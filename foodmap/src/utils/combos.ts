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
    cheap:     { price: 0.7, taste: 0.1, filling: 0.2 },
    balanced:  { price: 0.4, taste: 0.4, filling: 0.2 },
    gourmet:   { price: 0.1, taste: 0.8, filling: 0.1 },
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
            caloriesFull = dish.calories + caloriesFull
        }
    const fillingScore = Math.min(caloriesFull / 1500, 1)
    const tastyScore = 0.5
    const w = weights[mode]
    return (
        w.price * priceScore + w.taste * tastyScore + w.filling * fillingScore
    )
}