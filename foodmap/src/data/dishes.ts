import type { Dish } from '../types/index'

export const dishes: Dish[] = [
    // RollBar — Special
    { id: 1, name: "Poke Salmon", price: 20, restaurantId: 4, restaurantName: "RollBar", category: "special" },
    { id: 2, name: "Poke Tuna", price: 20, restaurantId: 4, restaurantName: "RollBar", category: "special" },
    { id: 3, name: "Murena", price: 45, restaurantId: 4, restaurantName: "RollBar", category: "special" },
    { id: 4, name: "Shrimp-coconut", price: 42, restaurantId: 4, restaurantName: "RollBar", category: "special" },
    { id: 5, name: "Golden Shrimp", price: 38, restaurantId: 4, restaurantName: "RollBar", category: "special" },
    { id: 6, name: "Estetic Eel", price: 40, restaurantId: 4, restaurantName: "RollBar", category: "special" },
    { id: 7, name: "Mussels in creamy cheese sauce", price: 30, restaurantId: 4, restaurantName: "RollBar", category: "special" },
    { id: 8, name: "Philadelphia Golandes", price: 46, restaurantId: 4, restaurantName: "RollBar", category: "special" },
    { id: 9, name: "Avocado Toast with salmon", price: 25, restaurantId: 4, restaurantName: "RollBar", category: "special" },
    { id: 10, name: "Green Tofu", price: 16, restaurantId: 4, restaurantName: "RollBar", category: "special" },
    // RollBar — Wok/Soups
    { id: 11, name: "Miso with mussels", price: 25, restaurantId: 4, restaurantName: "RollBar", category: "soup" },
    { id: 12, name: "Miso with salmon", price: 30, restaurantId: 4, restaurantName: "RollBar", category: "soup" },
    { id: 13, name: "Miso Vegan", price: 15, restaurantId: 4, restaurantName: "RollBar", category: "soup" },
    { id: 14, name: "Eggs noodles with chicken", price: 17, restaurantId: 4, restaurantName: "RollBar", category: "soup" },
    { id: 15, name: "Ramen with Pork", price: 27, restaurantId: 4, restaurantName: "RollBar", category: "soup" },
    { id: 16, name: "Ramen with Shrimp", price: 30, restaurantId: 4, restaurantName: "RollBar", category: "soup" },

    // Chacha Time — Georgian (id 1)
    { id: 17, name: "Adjaruli Khachapuri", price: 14, restaurantId: 1, restaurantName: "Chacha Time", category: "main" },
    { id: 18, name: "Khinkali (5 pcs)", price: 8, restaurantId: 1, restaurantName: "Chacha Time", category: "main" },
    { id: 19, name: "Ojakhuri", price: 22, restaurantId: 1, restaurantName: "Chacha Time", category: "main" },
    { id: 20, name: "Chicken Shkmeruli", price: 20, restaurantId: 1, restaurantName: "Chacha Time", category: "main" },
    { id: 21, name: "Kharcho Soup", price: 12, restaurantId: 1, restaurantName: "Chacha Time", category: "soup" },
    { id: 22, name: "Chikhirtma Soup", price: 11, restaurantId: 1, restaurantName: "Chacha Time", category: "soup" },
    { id: 23, name: "Pkhali Assorted", price: 13, restaurantId: 1, restaurantName: "Chacha Time", category: "salad" },
    { id: 24, name: "Badrijani with Walnuts", price: 12, restaurantId: 1, restaurantName: "Chacha Time", category: "salad" },
    { id: 25, name: "Chacha (50 ml)", price: 6, restaurantId: 1, restaurantName: "Chacha Time", category: "drink" },
    { id: 26, name: "Homemade Wine (glass)", price: 7, restaurantId: 1, restaurantName: "Chacha Time", category: "drink" },
    { id: 27, name: "Churchkhela", price: 5, restaurantId: 1, restaurantName: "Chacha Time", category: "dessert" },

    // Pizza Sole Mio — Italian (id 2)
    { id: 28, name: "Pizza Margherita", price: 16, restaurantId: 2, restaurantName: "Pizza Sole Mio", category: "pizza" },
    { id: 29, name: "Pizza Quattro Formaggi", price: 21, restaurantId: 2, restaurantName: "Pizza Sole Mio", category: "pizza" },
    { id: 30, name: "Pizza Diavola", price: 20, restaurantId: 2, restaurantName: "Pizza Sole Mio", category: "pizza" },
    { id: 31, name: "Pizza Prosciutto e Funghi", price: 22, restaurantId: 2, restaurantName: "Pizza Sole Mio", category: "pizza" },
    { id: 32, name: "Spaghetti Carbonara", price: 19, restaurantId: 2, restaurantName: "Pizza Sole Mio", category: "pasta" },
    { id: 33, name: "Penne Arrabbiata", price: 16, restaurantId: 2, restaurantName: "Pizza Sole Mio", category: "pasta" },
    { id: 34, name: "Lasagna Bolognese", price: 23, restaurantId: 2, restaurantName: "Pizza Sole Mio", category: "pasta" },
    { id: 35, name: "Caprese Salad", price: 14, restaurantId: 2, restaurantName: "Pizza Sole Mio", category: "salad" },
    { id: 36, name: "Minestrone", price: 12, restaurantId: 2, restaurantName: "Pizza Sole Mio", category: "soup" },
    { id: 37, name: "Tiramisu", price: 9, restaurantId: 2, restaurantName: "Pizza Sole Mio", category: "dessert" },
    { id: 38, name: "Panna Cotta", price: 8, restaurantId: 2, restaurantName: "Pizza Sole Mio", category: "dessert" },
    { id: 39, name: "Aperol Spritz", price: 11, restaurantId: 2, restaurantName: "Pizza Sole Mio", category: "drink" },

    // Adjarian Kitchen — Georgian (id 3)
    { id: 40, name: "Adjaruli Khachapuri", price: 12, restaurantId: 3, restaurantName: "Adjarian Kitchen", category: "main" },
    { id: 41, name: "Megruli Khachapuri", price: 13, restaurantId: 3, restaurantName: "Adjarian Kitchen", category: "main" },
    { id: 42, name: "Lobiani", price: 7, restaurantId: 3, restaurantName: "Adjarian Kitchen", category: "main" },
    { id: 43, name: "Khinkali with Meat (5 pcs)", price: 8, restaurantId: 3, restaurantName: "Adjarian Kitchen", category: "main" },
    { id: 44, name: "Borano", price: 18, restaurantId: 3, restaurantName: "Adjarian Kitchen", category: "main" },
    { id: 45, name: "Achma", price: 15, restaurantId: 3, restaurantName: "Adjarian Kitchen", category: "main" },
    { id: 46, name: "Lobio in Clay Pot", price: 10, restaurantId: 3, restaurantName: "Adjarian Kitchen", category: "main" },
    { id: 47, name: "Green Bean Pkhali", price: 9, restaurantId: 3, restaurantName: "Adjarian Kitchen", category: "salad" },
    { id: 48, name: "Tomato & Cucumber Salad with Walnuts", price: 10, restaurantId: 3, restaurantName: "Adjarian Kitchen", category: "salad" },
    { id: 49, name: "Kompot", price: 4, restaurantId: 3, restaurantName: "Adjarian Kitchen", category: "drink" },
    { id: 50, name: "Baklava", price: 6, restaurantId: 3, restaurantName: "Adjarian Kitchen", category: "dessert" },
]