import Button from './Button'
import Counter from './Counter'
import Timer from './Timer'
import TodoList from './TodoList'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'

function App() {
  return (
    <BrowserRouter>
    
    <div>
      <h1>Привет, React!</h1>
      <p>Мой первый компонент</p>
      <Button text="Save" color="green"/>
      <Button text="Delete" color="gray"/>
      <Button text="Cansel" color="red"/>
      <Counter />
      <Timer />
      <TodoList />
    </div>
    <nav>
      <Link to="/">Main</Link>
      <Link to="/about">About us</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App