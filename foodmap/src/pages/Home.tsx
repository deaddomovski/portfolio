import { restaurants } from '../data/restaurants'
import RestaurantCard from '../components/RestaurantCard'
import { useState } from "react" ;
import FilterBar from '../components/FilterBar';

function Home() {
    const [selected, setSelected] = useState('All')
    const filtered = selected === 'All'
    ? restaurants
    : restaurants.filter(r => r.cuisine === selected)

return (
        <div>
            <FilterBar selected={selected} onSelect={setSelected} />
                {filtered.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
    )
}

export default Home