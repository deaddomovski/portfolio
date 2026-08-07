import Button from './Button'
import { Restaurant } from './types'

function App() {
  const handleClick = (): void => {
    console.log('clicked!')
  }

  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Mac",
      address: "Koko",
      rating: 5,
      cuisine: "Ukr",
      priceRange: 2
    },
    {
      id: 2,
      name: "KFC",
      address: "BOKO",
      rating: 4,
      cuisine: "Georgian",
      priceRange: 3
    }
  ]
 
  return (
    <div>
      <Button text="Click me" color="green" onClick={handleClick} />
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
    </div>
  )
}

export default App