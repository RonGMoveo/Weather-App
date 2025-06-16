import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { useWeather } from './hooks/useWeather';

function App() {
  const [searchCity, setSearchCity] = useState('');

  const { data: weatherData, isLoading, error } = useWeather(searchCity);

  const handleSearch = (city: string) => {
    setSearchCity(city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-200 to-sky-300 py-8">
      {/* Subtle clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-20 w-20 h-12 bg-white bg-opacity-30 rounded-full blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-14 bg-white bg-opacity-25 rounded-full blur-sm"></div>
        <div className="absolute top-96 left-16 w-16 h-10 bg-white bg-opacity-20 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 right-20 w-22 h-12 bg-white bg-opacity-30 rounded-full blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <WeatherCard 
          weatherData={weatherData}
          isLoading={isLoading}
          error={error}
          hasData={!!weatherData}
        />
      </div>
    </div>
  );
}

export default App;