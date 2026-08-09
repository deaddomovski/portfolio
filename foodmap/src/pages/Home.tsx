import { restaurants } from '../data/restaurants'
import RestaurantCard from '../components/RestaurantCard'

function Home() {
return (
        <div>
            {restaurants.map((restaurant) =>(
                <RestaurantCard key = {restaurant.id} restaurant={restaurant} />
            ))}
        </div>
    )
}

export default Home