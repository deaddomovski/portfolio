import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";
import { dishes } from '../data/dishes'
import { useState } from "react"
import { findCombos } from '../utils/combos'

function RestaurantPage() {
    const { id } = useParams()
    const [budget, setBudget] = useState('')
    const budgetNum = Number(budget)
    const restaurant = restaurants.find(r => r.id === Number(id))
    if (!restaurant) return <p>Ресторан не найден</p>
    const restaurantDishes = dishes.filter(d => d.restaurantId === restaurant.id)
    const combos = budgetNum > 0 ? findCombos(restaurantDishes, budgetNum) : []
    const budgetDishes = budgetNum === 0
        ? restaurantDishes
        : restaurantDishes.filter(d => d.price <= budgetNum)

    return (
    <div>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.address}</p>
        <p>{restaurant.description}</p>
        <p>Rating: {restaurant.rating}</p>

        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Your budget" />

        <h2>Best combos</h2>
        {combos.map((combo, index) => (
            <div key={index}>
            <p>Total: {combo.total}₾</p>
            <ul>
                {combo.items.map(dish => (
                    <li key={dish.id}>{dish.name} — {dish.price}₾</li>
                ))}
            </ul>
        </div>
        ))}

        <h2>Within your budget</h2>
        <ul>
            {budgetDishes.map(dish => (
                <li key={dish.id}>{dish.name} — {dish.price}₾</li>
            ))}
        </ul>

        <h2>Full menu</h2>
        <ul>
            {restaurantDishes.map(dish => (
                <li key={dish.id}>{dish.name} — {dish.price}₾</li>
            ))}
        </ul>
    </div>
)
}

export default RestaurantPage