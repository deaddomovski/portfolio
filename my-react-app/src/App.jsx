import Button from './Button'

function App() {
  return (
    <div>
      <h1>Привет, React!</h1>
      <p>Мой первый компонент</p>
      <Button text="Сохранить" color="green"/>
      <Button text="Удалить" color="gray"/>
      <Button text="Отмена" color="red"/>
    </div>
  )
}

export default App