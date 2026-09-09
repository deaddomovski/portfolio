import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";
import { dishes } from '../data/dishes'
import { useState } from "react"

function RestaurantPage() {
    const { id } = useParams()
    const [budget, setBudget] = useState(0)
    const restaurant = restaurants.find(r => r.id === Number(id))
    if (!restaurant) return <p>Ресторан не найден</p>
    const restaurantDishes = dishes.filter(d => d.restaurantId === restaurant.id)
    const budgetDishes = restaurantDishes.filter(d => d.price <= budget)

    return (
        <div>
            <input 
                type="number" 
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                placeholder="Введи бюджет"/>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.address}</p>
            <p>{restaurant.description}</p>
            <p>Rating: {restaurant.rating}</p>
            <ul>
                {budgetDishes.map(dish => (
                <li key={dish.id}>{dish.name} — {dish.price}₾</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantPage