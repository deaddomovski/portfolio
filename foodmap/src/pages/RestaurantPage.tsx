import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";
import { dishes } from '../data/dishes'

function RestaurantPage() {
    const { id } = useParams()
    const restaurant = restaurants.find(r => r.id === Number(id))
    if (!restaurant) return <p>Ресторан не найден</p>
    const restaurantDishes = dishes.filter(d => d.restaurantId === restaurant.id)

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.address}</p>
            <p>{restaurant.description}</p>
            <p>Rating: {restaurant.rating}</p>
            <ul>
                {restaurantDishes.map(dish => (
                    <li key={dish.id}>{dish.name} — {dish.price}₾</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantPage