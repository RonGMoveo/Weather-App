import { useState } from 'react';
import type { WeatherData, WeatherError } from '../types/weatherTypes';
import ActionButton from './ActionButton';

interface WeatherCardProps {
  weatherData?: WeatherData;
  isLoading: boolean;
  error?: WeatherError | null;
  hasData: boolean;
}

const WeatherCard = ({ weatherData, isLoading, error, hasData }: WeatherCardProps) => {
  const [isCelsius, setIsCelsius] = useState(true);

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="h-16 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-red-600 font-semibold">
            {error?.error?.message || 'An unknown error occurred'}
          </p>
        </div>
      </div>
    );
  }

  if (!hasData || !weatherData) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">🌤️</div>
          <p className="text-gray-500">
            Search for a city to see weather information
          </p>
        </div>
      </div>
    );
  }

  const { location, current, forecast } = weatherData;
  const upcomingDays = forecast.forecastday.slice(1, 4);

  const getTemperature = (tempC: number, tempF: number) => {
    return isCelsius ? `${Math.round(tempC)}°C` : `${Math.round(tempF)}°F`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Temperature Unit Toggle - top right corner */}
      <div className="flex justify-end mb-4">
        <ActionButton
          variant="temperature"
          size="small"
          onClick={() => setIsCelsius(!isCelsius)}
        >
          {isCelsius ? '°F' : '°C'}
        </ActionButton>
      </div>

      {/* Current Weather - Main Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {location.name}, {location.country}
        </h2>
        
        <div className="flex items-center justify-center mb-4">
          <img 
            src={`https:${current.condition.icon}`} 
            alt={current.condition.text}
            className="w-16 h-16 mr-4"
          />
          <div>
            <div className="text-5xl font-bold text-gray-800">
              {getTemperature(current.temp_c, current.temp_f)}
            </div>
            <div className="text-sm text-gray-500 mb-2">
              Feels like {getTemperature(current.feelslike_c, current.feelslike_f)}
            </div>
            <div className="text-lg text-gray-600">
              {current.condition.text}
            </div>
          </div>
        </div>
      </div>

      {/* 3-Day Forecast */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          3-Day Forecast
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {upcomingDays.map((day) => (
            <div key={day.date} className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium text-gray-600 mb-2">
                {new Date(day.date).toLocaleDateString('en-US', { 
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
              
              <img 
                src={`https:${day.day.condition.icon}`} 
                alt={day.day.condition.text}
                className="w-10 h-10 mx-auto mb-2"
              />
              
              <div className="text-xs text-gray-600 mb-1">
                {day.day.condition.text}
              </div>
              
              <div className="text-sm">
                <div className="font-semibold text-gray-800">
                  {getTemperature(day.day.maxtemp_c, day.day.maxtemp_f)} / {getTemperature(day.day.mintemp_c, day.day.mintemp_f)}
                </div>
                <div className="text-xs text-gray-500">
                  Avg: {getTemperature(day.day.avgtemp_c, day.day.avgtemp_f)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;