import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";
import { dishes } from '../data/dishes'
import { findCombos, portionPrice, formatPrice, isAllowed } from '../utils/combos'
import  type { Mode } from '../utils/combos'
import ModeSwitcher from '../components/ModeSwitcher';

interface RestaurantPageProps {
    budget: string
    setBudget: (value: string) => void
    mode: Mode
    setMode: (value: Mode) => void
    excluded: string[]
}

function RestaurantPage({budget, setBudget, mode, setMode, excluded }: RestaurantPageProps) {
    const { id } = useParams()
    const budgetNum = Number(budget)
    const restaurant = restaurants.find(r => r.id === Number(id))
    if (!restaurant) return <p>Ресторан не найден</p>
    const restaurantDishes = dishes.filter(d => d.restaurantId === restaurant.id)
    const allowedDishes = restaurantDishes.filter(d => isAllowed(d, excluded))
    const combos = budgetNum > 0 ? findCombos(allowedDishes, budgetNum, mode) : []
    const budgetDishes = budgetNum === 0
        ? allowedDishes
        : allowedDishes.filter(d => portionPrice(d) <= budgetNum)
    return (
    <div>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.address}</p>
        <p>{restaurant.description}</p>
        <p>Rating: {restaurant.rating}</p>

        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Your budget" />
        <ModeSwitcher mode={mode} setMode={setMode} />
        

        <h2>Best combos</h2>
        {combos.length === 0 && budgetNum > 0 ? (<p>No full meal could be found for this budget</p>):(
        combos.map((combo, index) => (
            <div key={index}>
            <p>Total: {combo.total}₾</p>
            <ul>
                {combo.items.map(dish => (
                    <li key={dish.id}>{dish.name} — {formatPrice(dish)}</li>
                ))}   
            </ul>
        </div>
        )))}

        <h2>Within your budget</h2>
        <ul>
            {budgetDishes.map(dish => (
                <li key={dish.id}>{dish.name} — {formatPrice(dish)}</li>
            ))}
        </ul>

        <h2>Full menu</h2>
        <ul>
            {restaurantDishes.map(dish => (
                <li key={dish.id}>{dish.name} — {formatPrice(dish)}</li>
            ))}
        </ul>
    </div>
)
}

export default RestaurantPage