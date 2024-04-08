import React, { useState } from 'react';
import FormComponent from './Components/FormComponent';
import WeatherCard from './Components/WeatherCard';

const App = () => {
    const [citiesWeatherData, setCitiesWeatherData] = useState([]);
    
    const handleWeatherData = (data) => {
        setCitiesWeatherData([...citiesWeatherData, data]);
    };
    const handleDelete = (cityName) => {
      const updatedWeatherData = citiesWeatherData.filter(city => city.name !== cityName);
      setCitiesWeatherData(updatedWeatherData);
  };

    return (
        <div>
            <h1>Weather Dashboard</h1>
            <FormComponent onWeatherData={handleWeatherData} />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {citiesWeatherData.map((cityWeatherData, index) => (
                    <WeatherCard key={index} weatherData={cityWeatherData} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default App;