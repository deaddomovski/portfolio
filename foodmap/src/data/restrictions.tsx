export interface Restriction {
    id: string
    label: string
    tags: string[]
}

export const restrictions: Restriction[] = [
    { id: "no-meat",      label: "No meat",              tags: ["meat"] },
    { id: "no-pork",      label: "No pork",              tags: ["pork"] },
    { id: "no-fish",      label: "No fish or seafood",   tags: ["fish", "seafood"] },
    { id: "no-spicy",     label: "No spicy food",        tags: ["spicy"] },
    { id: "no-nuts",      label: "No nuts",              tags: ["nuts"] },
    { id: "no-cheese",    label: "No cheese",            tags: ["cheese"] },
    { id: "no-mushrooms", label: "No mushrooms",         tags: ["mushrooms"] },
]

