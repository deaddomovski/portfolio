import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";
import { dishes } from '../data/dishes'
import { useState } from "react"
import { findCombos } from '../utils/combos'
import  type { Mode } from '../utils/combos'

function RestaurantPage() {
    const { id } = useParams()
    const [budget, setBudget] = useState('')
    const [mode, setMode] = useState<Mode>("balanced")
    const budgetNum = Number(budget)
    const restaurant = restaurants.find(r => r.id === Number(id))
    if (!restaurant) return <p>Ресторан не найден</p>
    const restaurantDishes = dishes.filter(d => d.restaurantId === restaurant.id)
    const combos = budgetNum > 0 ? findCombos(restaurantDishes, budgetNum, mode) : []
    const budgetDishes = budgetNum === 0
        ? restaurantDishes
        : restaurantDishes.filter(d => d.price <= budgetNum)
    const modes: Mode[] = ["cheap", "balanced", "gourmet"]
    return (
    <div>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.address}</p>
        <p>{restaurant.description}</p>
        <p>Rating: {restaurant.rating}</p>

        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Your budget" />
        {modes.map((m) => 
            <button key={m}
            onClick={() => setMode(m)}
            disabled={m === mode }
            >{m}</button>
        )}
        

        <h2>Best combos</h2>
        {combos.length === 0 && budgetNum > 0 ? (<p>No full meal could be found for this budget</p>):(
        combos.map((combo, index) => (
            <div key={index}>
            <p>Total: {combo.total}₾</p>
            <ul>
                {combo.items.map(dish => (
                    <li key={dish.id}>{dish.minQty && `${dish.minQty} × `}{dish.name} — {dish.price * (dish.minQty ?? 1)}₾</li>
                ))}   
            </ul>
        </div>
        )))}

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