import React, { useState } from 'react';

const WeatherCard = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      if (!city) {
        setError('Please enter a valid city name.');
        return;
      }

      const API_KEY = 'd9cf9b5eb43cd8657951b6d576bb7a46'; // Replace with your API key

      // Step 1: Get coordinates using the Geocoding API
      const geoResponse = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );

      if (!geoResponse.ok) {
        throw new Error('Failed to fetch coordinates. Please check the city name.');
      }

      const geoData = await geoResponse.json();

      if (geoData.length === 0) {
        throw new Error('No coordinates found for the given city.');
      }

      const { lat, lon } = geoData[0];

      // Step 2: Fetch weather data using the coordinates
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );

      if (!weatherResponse.ok) {
        throw new Error('Failed to fetch weather data.');
      }

      const weatherData = await weatherResponse.json();
      setWeather(weatherData);
      setError(null); // Clear error on success
    } catch (err: any) {
      setWeather(null); // Reset weather data on error
      setError(err.message || 'An error occurred while fetching weather data.');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>Weather Info by Location</h2>
      <div>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: '8px', margin: '5px' }}
        />
      </div>
      <button onClick={fetchWeather} style={{ padding: '8px 16px', cursor: 'pointer', marginTop: '10px' }}>
        Get Weather
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && (
        <div style={{ marginTop: '20px' }}>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
