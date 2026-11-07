import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RestaurantPage from './pages/RestaurantPage'
import Home from './pages/Home'
import TastePage from './pages/TastePage';
import { useState } from "react" ;
import  type { Mode } from './utils/combos'

function App() {
  const [mode, setMode] = useState<Mode>("balanced")
  const [budget, setBudget] = useState('')
  return (
    <BrowserRouter>
      <div>
        <h1>FoodMap</h1>
        <Routes>
          <Route path="/" element={<Home budget={budget} setBudget={setBudget} mode={mode} setMode={setMode} />} />
          <Route path="/restaurant/:id" element={<RestaurantPage budget={budget} setBudget={setBudget} mode={mode} setMode={setMode}/>} />
          <Route path="/taste" element={<TastePage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App