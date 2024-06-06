import React, { useEffect, useState } from 'react'
import { fetchWeather } from '../API'
import Card from './Card';

const Mainpage = ({ input, setInput }) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null); // Adding error state to handle errors


    const getWeather = async () => {
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
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',  // Ensure the container takes up the full height
            width: '100%',
            margin: 0,        // Reset any default margins
            padding: 0        // Reset any default padding

        }}>
            <h2>Search for your favorite city!</h2>

            <form onSubmit={(e) => {
                e.preventDefault()
                getWeather()
            }}>
                <div>
                    <input //user input for the name of location
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        style={{
                            width: '200px',
                            height: '35px',
                            borderRadius: '10px',
                            borderStyle: 'none',
                            paddingLeft: '7px',
                            fontSize: '13px'
                        }}>
                    </input>

                    <button type='submit' style={{ margin: '5px' }} >Search</button>
                </div>
            </form>
            {error && <p style={{ position: 'relative', color: 'red', alignSelf: 'center' }}>{error}</p>}
            <div>

                {weather && (
                    <div>
                        <Card title={weather.name} temp={weather.main.temp} humidity={weather.main.humidity} description={weather.weather[0].description}error={error}></Card>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Mainpage
