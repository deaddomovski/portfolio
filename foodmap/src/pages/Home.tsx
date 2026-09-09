import { restaurants } from '../data/restaurants'
import RestaurantCard from '../components/RestaurantCard'
import { useState } from "react" ;
import FilterBar from '../components/FilterBar';
import { dishes } from '../data/dishes';

function Home() {
    const [selected, setSelected] = useState('All')
    const [budget, setBudget] = useState(0)
    const filtered = restaurants
    .filter(r => selected === 'All' || r.cuisine === selected)
    .filter(r => budget === 0 || dishes.some(d => d.restaurantId === r.id && d.price <= budget))


return (
        <div>
            <label htmlFor="budget">Your budget: </label>
            <input id="budget" type="number" value={budget} onChange={(e) => setBudget(Number(e.target.value))}></input>
            <FilterBar selected={selected} onSelect={setSelected} />
                {filtered.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
    )
}

export default Home