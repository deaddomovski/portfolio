import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RestaurantPage from './pages/RestaurantPage'
import Home from './pages/Home'
import { useState } from "react" ;

function App() {
  const budgetNum = Number(budget)ss
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