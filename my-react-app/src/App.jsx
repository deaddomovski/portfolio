import Button from './Button'
import Counter from './Counter'
import Timer from './Timer'
import TodoList from './TodoList'

function App() {
  return (
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
  )
}

export default App