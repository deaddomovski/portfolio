import { restaurants } from '../data/restaurants'
import RestaurantCard from '../components/RestaurantCard'
import { useState } from "react" ;
import FilterBar from '../components/FilterBar';
import { dishes } from '../data/dishes';
import { findBestOverall } from '../utils/combos';
import { Link } from 'react-router-dom'

function Home() {
    const [selected, setSelected] = useState('All')
    const [budget, setBudget] = useState('')
    const budgetNum = Number(budget)
const filtered = restaurants
    .filter(r => selected === 'All' || r.cuisine === selected)
    .filter(r => budgetNum === 0 || dishes.some(d => d.restaurantId === r.id && d.price <= budgetNum))
    const combos = budgetNum > 0 ? findBestOverall(filtered, dishes, budgetNum, "balanced") : []
return (
        <div>
            <label htmlFor="budget">Your budget: </label>
            <input id="budget" type="number" value={budget} onChange={(e) => setBudget(e.target.value)}></input>
            <FilterBar selected={selected} onSelect={setSelected} />
                {filtered.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
            <h2>Best combos</h2>
            {combos.length === 0 && budgetNum > 0 ? (<p>No full meal could be found for this budget</p>):(
            combos.map((combo, index) => (
            <div key={index}>
                <Link to={`/restaurant/${combo.items[0].restaurantId}`}>{combo.items[0].restaurantName}</Link>
                <p>Total: {combo.total}₾</p>
                <ul>
                    {combo.items.map(dish => (
                        <li key={dish.id}>{dish.minQty && `${dish.minQty} × `}{dish.name} — {dish.price * (dish.minQty ?? 1)}₾</li>
                    ))}   
                </ul>
            </div>
        )))}
        </div>
    )
}

export default Home