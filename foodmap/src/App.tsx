import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RestaurantPage from './pages/RestaurantPage'
import Home from './pages/Home'
import TastePage from './pages/TastePage';
import { useEffect, useState } from "react" ;
import  type { Mode } from './utils/combos'

function App() {
  const [mode, setMode] = useState<Mode>("balanced")
  const [budget, setBudget] = useState('')
  const [excluded, setExcluded] = useState<string[]> (() => JSON.parse(localStorage.getItem("excluded") ?? "[]"))
  const [ratings, setRatings] = useState<Record<string, number>>(() => JSON.parse(localStorage.getItem("ratings") ?? "{}"))
  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings))  
  }, [ratings])
  useEffect(() => {
    localStorage.setItem("excluded", JSON.stringify(excluded))
  }, [excluded])
  return (
    <BrowserRouter>
      <div>
        <h1>FoodMap</h1>
        <Routes>
          <Route path="/" element={<Home budget={budget} setBudget={setBudget} mode={mode} setMode={setMode} excluded={excluded} ratings={ratings}/>} />
          <Route path="/restaurant/:id" element={<RestaurantPage budget={budget} ratings={ratings}
           setBudget={setBudget} mode={mode} setMode={setMode} excluded={excluded}/>} />
          <Route path="/taste" element={<TastePage excluded={excluded} setExcluded={setExcluded} ratings={ratings} setRatings={setRatings} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App