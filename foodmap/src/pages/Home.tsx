import { restaurants } from '../data/restaurants'
import RestaurantCard from '../components/RestaurantCard'
import { useState } from "react" ;
import FilterBar from '../components/FilterBar';
import { dishes } from '../data/dishes';
import { findBestOverall, portionPrice, formatPrice, isAllowed} from '../utils/combos';
import { Link } from 'react-router-dom'
import  type { Mode } from '../utils/combos'
import ModeSwitcher from '../components/ModeSwitcher';

interface HomeProps {
    budget: string
    setBudget: (value: string) => void
    mode: Mode
    setMode: (value: Mode) => void
    excluded: string[]
}

function Home({budget, setBudget, mode, setMode, excluded}: HomeProps) {
    const [selected, setSelected] = useState('All')
    const budgetNum = Number(budget)
    const allowedDishes = dishes.filter(d => isAllowed(d, excluded))
const filtered = restaurants
    .filter(r => selected === 'All' || r.cuisine === selected)
    .filter(r => budgetNum === 0 || allowedDishes.some(d => d.restaurantId === r.id && portionPrice(d) <= budgetNum))
    const combos = budgetNum > 0 ? findBestOverall(filtered, allowedDishes, budgetNum, mode) : []
return (
        <div>
            <label htmlFor="budget">Your budget: </label>
            <input id="budget" type="number" value={budget} onChange={(e) => setBudget(e.target.value)}></input>
            <Link to="/taste">Take the taste test</Link>
            <ModeSwitcher mode={mode} setMode={setMode} />
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
                        <li key={dish.id}>{dish.name} — {formatPrice(dish)}</li>
                    ))}   
                </ul>
            </div>
        )))}
        </div>
    )
}

export default Home