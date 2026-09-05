import type { Restaurant } from '../types/index';

export const restaurants: Restaurant[] = [
    {
    id:1,
    name: "Chacha Time",
    address: "Batumi Boulevard 5",
    rating: 4.5,
    cuisine: "Georgian",
    priceRange: 2,
    description: "Traditional Georgian cuisine with sea view",
    imageUrl:"",
    lat: 41.6168,
    lng: 41.6367
    },
    {
    id:2,
    name: "Pizza Sole Mio",
    address: "Pushkin Street 12",
    rating: 4.2,
    cuisine: "Italian",
    priceRange: 2,
    description: "Authentic Italian pizza and pasta",
    imageUrl:"",
    lat: 41.6145,
    lng: 41.6389
    },
    {
    id:3,
    name: "Adjarian Kitchen",
    address: "Rustaveli Avenue 8",
    rating: 4.8,
    cuisine: "Georgian",
    priceRange: 1,
    description: "Best Adjarian khachapuri in Batumi",
    imageUrl: "",
    lat: 41.6187,
    lng: 41.6412
    },
    {
    id: 4,
    name: "RollBar",
    address: "Ninoshvili Street 3",
    rating: 4.0,
    cuisine: "Japanese",
    priceRange: 3,
    description: "Fresh sushi and rolls",
    imageUrl: "",
    lat: 41.6134,
    lng: 41.6356
    }
]

