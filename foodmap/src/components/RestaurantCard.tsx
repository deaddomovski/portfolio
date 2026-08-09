import type { Restaurant } from '../types/index';

type RestaurantCardProps = {
    restaurant: Restaurant
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.cuisine}</p>
            <p>{restaurant.priceRange}</p>
        </div>
    )
}

export default RestaurantCard