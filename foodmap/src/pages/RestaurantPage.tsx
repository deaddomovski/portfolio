import { useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";

function RestaurantPage() {
    const { id } = useParams()
    const restaurant = restaurants.find(r => r.id === Number(id))
    if (!restaurant) return <p>Ресторан не найден</p>
    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.address}</p>
            <p>{restaurant?.description}</p>
            <p>Rating: {restaurant.rating}</p>

        </div>
    )
}

export default RestaurantPage