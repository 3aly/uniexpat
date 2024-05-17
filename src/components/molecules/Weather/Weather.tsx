import React, { useEffect, useState } from "react";
import axios from "axios";
import { getWeatherIcon } from "@utils/getWeatherIcon";
import { useResize } from "@hooks/useResize";

interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    daily_chance_of_rain: number;
    avghumidity: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

interface WeatherData {
  forecast: {
    forecastday: ForecastDay[];
  };
}

interface WeatherProps {
  city: string;
}

const Weather: React.FC<WeatherProps> = ({ city }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { isMobile } = useResize();

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "e7a4d8895dc949b4a50165618241705"; // Replace with your WeatherAPI key
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`;

        const response = await axios.get<WeatherData>(url);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching weather data: {error}</div>;

  return (
    <div className="flex flex-col w-full my-4 gap-5">
      <div
        className={`flex    ${
          isMobile ? "flex-col" : "justify-around flex-row gap-4"
        } `}
      >
        {weatherData?.forecast.forecastday.map((day, index) => (
          <div
            key={index}
            className={`p-8 rounded-lg  shadow-xl  h-full text-left ${
              isMobile ? "" : "w-1/5"
            }`}
          >
            <img
              src={getWeatherIcon(day.day.condition.text.toLowerCase())}
              alt={day.day.condition.text}
              className="h-56 w-56 mx-auto"
            />
            <div className="flex flex-row flex-1 justify-between">
              <p className="text-xl font-bold">Date:</p>
              <p className="text-lg">{day.date}</p>
            </div>
            <div className="flex flex-row flex-1 justify-between">
              <p className="text-xl font-bold">Avg Temp:</p>
              <p className="text-lg">{day.day.avgtemp_c} °C</p>
            </div>
            <div className="flex flex-row flex-1 justify-between">
              <p className="text-xl font-bold">Humidity:</p>
              <p className="text-lg">{day.day.avghumidity} %</p>
            </div>
            <div className="flex flex-row flex-1 justify-between">
              <p className="text-xl font-bold">Rain:</p>
              <p className="text-lg">{day.day.daily_chance_of_rain} %</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
