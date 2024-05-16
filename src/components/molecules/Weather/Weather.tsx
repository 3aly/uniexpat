// src/components/Weather.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
    }
  ];
  wind: {
    speed: number;
  };
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "100cd2a96e5ae6c137bfb5d4c3b7c8e2";
        const city = "Barcelona";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get<WeatherData>(url);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching weather data: {error}</div>;

  return (
    <div>
      <h2>Current Weather in Barcelona</h2>
      <p>Temperature: {weatherData?.main.temp} °C</p>
      <p>Weather: {weatherData?.weather[0].description}</p>
      <p>Humidity: {weatherData?.main.humidity} %</p>
      <p>Wind Speed: {weatherData?.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
