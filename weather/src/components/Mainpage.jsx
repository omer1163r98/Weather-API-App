import React, { useEffect, useState } from 'react'
import { fetchWeather } from '../API'

const Mainpage = ({input, setInput}) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null); // Adding error state to handle errors


    const getWeather = async () => {
        try{
            const data  = await fetchWeather(input);
            setWeather(data)

        }catch (error) {
            console.error("Error fetching the weather data:", error.message);

        
        }
    }

 

    



  return (
    <div>
      <h2>search for your favorite city!</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        getWeather()
      }}>
        <input value={input} onChange={e => setInput(e.target.value)}></input>
        <button type='submit' >Search</button>
      </form>
      <div>
 
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
    </div>
  )
}

export default Mainpage
