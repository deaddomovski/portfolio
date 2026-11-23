import type { Restaurant } from '../types/index';

export const restaurants: Restaurant[] = [
    {
        country: "GE",
        city: "Batumi",       
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
    },
   {
        country: "GE",
        city: "Batumi",   
        id: 5,
        name: "Lima",
        address: "61b Javakhishvili St, Batumi 6010",
        rating: 4.4,
        cuisine: "Georgian",
        priceRange: 2,
        description: "Georgian restaurant with barbecue, khinkali and khachapuri",
        imageUrl: "",
        lat: 41.6438,
        lng: 41.6297
    },
    {
        country: "GE",
        city: "Batumi",   
        id: 6,
        name: "Bobo",
        address: "",
        rating: 0,
        cuisine: "Georgian",
        priceRange: 2,
        description: "Georgian and Uzbek cuisine, khinkali, khachapuri and grill",
        imageUrl: "",
        lat: 0,
        lng: 0
    }
]

