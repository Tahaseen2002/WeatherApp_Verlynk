import React, { useState } from 'react';
import axios from 'axios';
const API_KEY = 'fd9c69a2e0cbcdc935d4ee957b75b8eb';
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;
const FormComponent = ({onWeatherData}) => {
    
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const handleInputChange = (e) => {
        setCity(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(` ${API_URL}${city}`)
            onWeatherData(response.data)
            setCity('');
            setError('');

        } catch (error) {
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
           
        </div>
    );
};

export default FormComponent;
