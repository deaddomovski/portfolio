import type { Restaurant } from '../types/index';
import { Link } from 'react-router-dom'

type RestaurantCardProps = {
    restaurant: Restaurant
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
    return (
    <Link to={`/restaurant/${restaurant.id}`}>
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.cuisine}</p>
            <p>{restaurant.priceRange}</p>
        </div>
    </Link>
)
}

export default RestaurantCard