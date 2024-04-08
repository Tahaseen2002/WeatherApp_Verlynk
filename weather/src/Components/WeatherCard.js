import React from 'react'

const WeatherCard = ({weatherData , onDelete}) => {
    const handleDelete =()=>{
        onDelete(weatherData.name)
    }
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px' }}>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Feels Like: {weatherData.main.feels_like}°C</p>
            <p>Minimum Temperature: {weatherData.main.temp_min}°C</p>
            <p>Maximum Temperature: {weatherData.main.temp_max}°C</p>
            <p>Pressure: {weatherData.main.pressure} hPa</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Visibility: {weatherData.visibility} meters</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            <p>Cloudiness: {weatherData.clouds.all}%</p>
            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
  )
}

export default WeatherCard