import Button from './Button'
import Counter from './Counter'
import Timer from './Timer'
import TodoList from './TodoList'
import { ThemeContext } from './ThemeContext'

function App() {
  return (
    <ThemeContext.Provider value="dark">
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
    </ThemeContext.Provider>
  )
}

export default App