import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RestaurantPage from './pages/RestaurantPage'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>FoodMap</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App