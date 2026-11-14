import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RestaurantPage from './pages/RestaurantPage'
import Home from './pages/Home'
import TastePage from './pages/TastePage';
import { useState } from "react" ;
import  type { Mode } from './utils/combos'

function App() {
  const [mode, setMode] = useState<Mode>("balanced")
  const [budget, setBudget] = useState('')
  const [excluded, setExcluded] = useState<string[]>([])
  const [ratings, setRatings] = useState<Record<string, number>>({})
  return (
    <BrowserRouter>
      <div>
        <h1>FoodMap</h1>
        <Routes>
          <Route path="/" element={<Home budget={budget} setBudget={setBudget} mode={mode} setMode={setMode} excluded={excluded}/>} />
          <Route path="/restaurant/:id" element={<RestaurantPage budget={budget}
           setBudget={setBudget} mode={mode} setMode={setMode} excluded={excluded}/>} />
          <Route path="/taste" element={<TastePage excluded={excluded} setExcluded={setExcluded} ratings={ratings} setRatings={setRatings} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App