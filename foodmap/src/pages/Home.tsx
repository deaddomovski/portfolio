import { restaurants } from '../data/restaurants'
import RestaurantCard from '../components/RestaurantCard'
import { useState } from "react" ;
import FilterBar from '../components/FilterBar';
import { dishes } from '../data/dishes';

function Home() {
    const [selected, setSelected] = useState('All')
    const [budget, setBudget] = useState('')
    const budgetNum = Number(budget)
const filtered = restaurants
    .filter(r => selected === 'All' || r.cuisine === selected)
    .filter(r => budgetNum === 0 || dishes.some(d => d.restaurantId === r.id && d.price <= budgetNum))


return (
        <div>
            <label htmlFor="budget">Your budget: </label>
            <input id="budget" type="number" value={budget} onChange={(e) => setBudget(e.target.value)}></input>
            <FilterBar selected={selected} onSelect={setSelected} />
                {filtered.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
    )
}

export default Home