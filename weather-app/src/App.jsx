import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ city, setCity ] = useState('')
  const [ weather, setWeather] = useState(null)
  const [loading, setLoading ] = useState(false)
  const [error, setError ] = useState(null)

  function getWeather () {
    if (city.trim() === '') return
      setLoading(true)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8691a3c9579f0f3877cabec0fc06dd21&units=metric`)
    .then(response => {
      setWeather(response.data)
      setLoading(false)
    })
    .catch(() => {
      setError('City dont find')
      setLoading(false)
    })

  }

    return (
      <div className="container">
        <h1>Weather App</h1>
        <input value ={city} onChange={(e)=> setCity(e.target.value)} /> 
        <button onClick={getWeather}>Find</button>
      
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weather && (
          <div className="weather-card">
            <h2>{weather.name}</h2>
            <p>Temperature: {Math.round(weather.main.temp)}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
          )}
      </div>
    )
}

export default App