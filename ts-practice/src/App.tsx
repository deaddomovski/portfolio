import Button from './Button'

function App() {
  const handleClick = (): void => {
    console.log('clicked!')
  }

  return (
    <div>
      <Button text="Click me" color="green" onClick={handleClick} />
    </div>
  )
}

export default App