export interface Taste {
    id: string
    label: string
    tags: string[]
}

export const tastes: Taste[] = [
    { id: "red-meat",    label: "Red meat (beef, pork, lamb)", tags: ["beef", "pork", "lamb"] },
    { id: "chicken",     label: "Chicken",                     tags: ["chicken", "poultry"] },
    { id: "fish",        label: "Fish & seafood",              tags: ["fish", "seafood"] },
    { id: "sushi",       label: "Sushi & raw fish",            tags: ["sushi", "raw"] },
    { id: "cheese",      label: "Cheese",                      tags: ["cheese"] },
    { id: "dough",       label: "Dough (khinkali, khachapuri, pizza)", tags: ["dough"] },
    { id: "spicy",       label: "Spicy food",                  tags: ["spicy"] },
    { id: "mushrooms",   label: "Mushrooms",                   tags: ["mushrooms"] },
    { id: "nuts",        label: "Walnuts & nut sauces",        tags: ["nuts"] },
    { id: "grilled",     label: "Grilled",                     tags: ["grilled"] },
    { id: "fried",       label: "Fried",                       tags: ["fried"] },
    { id: "light",       label: "Light & fresh",               tags: ["light", "fresh"] },
    { id: "soup",        label: "Soups",                       tags: ["soup"] },
    { id: "georgian",    label: "Traditional Georgian",        tags: ["traditional"] },
    { id: "sweet",       label: "Desserts & sweet",            tags: ["sweet"] },
]