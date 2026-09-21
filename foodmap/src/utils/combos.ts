import type { Dish } from '../types/index'

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

export function getByRole( dishes: Dish[], role: string): Dish[] {
    return dishes.filter(d => categoryRole[d.category] === role )
} 

export type Combo = {
    items: Dish[]
    total: number
}

export function findCombos(dishes: Dish[], budget: number): Combo[] {
    const mains = getByRole(dishes, "main")
    const soups = getByRole(dishes, "soup")
    const salads = getByRole(dishes, "salad")

    const combos: Combo[] = []

    for (const main of mains) {
        for (const soup of soups) {
            for (const salad of salads) {
                const total = main.price + soup.price + salad.price
                if (total <= budget) {
                    combos.push({ items: [main, soup, salad], total })
                }
            }
        }
    }

    combos.sort((a, b) => b.total - a.total)
    return combos.slice(0, 3)
}