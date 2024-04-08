import React, {  useState } from 'react';
import axios from 'axios';



const FormComponent = () => {
    const API_KEY = 'fd9c69a2e0cbcdc935d4ee957b75b8eb';
const API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;
    const[city,setCity]=useState('');
    const[error,setError]=useState('');
    const [weatherData,setWeatherData]=useState(null);
    const handleInputChange=(e)=>{
        setCity(e.target.value);
    }
const handleSubmit =async (e)=>{
    e.preventDefault();
    try{
        const response=await axios.get(` ${API_URL}${city}`)
        setWeatherData(response.data)
        setCity('');
        setError('');

    }catch(error){
        setError('City not found')
    }
}

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input 
            type="text"
            placeholder='Enter city name'
            value={city}
            onChange={handleInputChange} />
            <button type="submit">Search</button>
            {error && <div>{error}</div>}

        </form>
        {weatherData && (
             <div>
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
         </div>
        )}
    </div>
  );
};

export default FormComponent;
