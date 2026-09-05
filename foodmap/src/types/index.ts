export interface Restaurant {
    id: number
    name: string
    address: string
    rating: number
    cuisine: string
    priceRange: number
    description: string
    imageUrl: string
    lat: number
    lng: number
}

export interface Dish {
    id: number
    name: string
    price: number
    restaurantId: number
    restaurantName: string
    category: string
}