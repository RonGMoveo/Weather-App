import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { useWeather } from './hooks/useWeather';

function App() {
  const [searchCity, setSearchCity] = useState('');
  const [isCelsius, setIsCelsius] = useState(true);

  const { data: weatherData, isLoading, error } = useWeather(searchCity);

  const handleSearch = (city: string) => {
    setSearchCity(city);
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-200 to-sky-300 py-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-20 w-20 h-12 bg-white bg-opacity-30 rounded-full blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-14 bg-white bg-opacity-25 rounded-full blur-sm"></div>
        <div className="absolute top-96 left-16 w-16 h-10 bg-white bg-opacity-20 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 right-20 w-22 h-12 bg-white bg-opacity-30 rounded-full blur-sm"></div>
      </div>
      <div className="container mx-auto px-4 max-w-2xl">
        <Header />
        <SearchBar onSearch={handleSearch} />

        {weatherData && (
          <div className="flex justify-center mb-4">
            <button
              onClick={toggleTemperatureUnit}
              className="px-4 py-2 bg-white bg-opacity-80 rounded-lg shadow-md hover:bg-opacity-100 transition-all text-sm font-medium text-gray-700"
            >
              Switch to {isCelsius ? 'Fahrenheit' : 'Celsius'}
            </button>
          </div>
        )}

        <WeatherCard 
          weatherData={weatherData}
          isLoading={isLoading}
          error={error}
          hasData={!!weatherData}
          isCelsius={isCelsius}
        />
      </div>
    </div>
  );
}

export default App;