import React, { useEffect, useState } from 'react'
import { fetchWeather } from '../API' // Importing the fetchWeather function from API.js
import Card from './Card';
import './Mainpage.css'
const Mainpage = () => {
    const [weather, setWeather] = useState(null); // weather state to save weather data
    const [error, setError] = useState(null); // error state to handle errors
    const [input, setInput] = useState(''); // input state to save user input 


    const getWeather = async () => { //async function to fetch the weather API.
        try {
            const data = await fetchWeather(input);
            setWeather(data)
            console.log(data)
            setError(null)

        } catch (error) {
            console.error("Error fetching the weather data:", error.message);
            setError('Location does not exist, please check spelling and try again.')


        }
    }

    return (
        <div className='container'>
            <h2>Search for your favorite city!</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    getWeather()
                }}>

                <input //user input for the name of location
                    className='userInput'
                    placeholder='Enter location'
                    value={input}
                    onChange={e => setInput(e.target.value)}>
                </input>

                <button type='submit' style={{ margin: '5px' }} >Search</button>

            </form>
            {error && <p className='errorMessage'>{error}</p>}
            <div>

                {weather && ( //verfies that the api call was succesfull and it renders the card component.
                    <div>
                        <Card title={weather.name} temp={weather.main.temp} humidity={weather.main.humidity} description={weather.weather[0].description} error={error}></Card>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Mainpage
