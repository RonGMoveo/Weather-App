import { useState, useEffect } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import RecentSearches from './components/RecentSearches';
import { useWeather } from './hooks/useWeather';
import { addToSearchHistory, getSearchHistory } from './utils/historyStorage';
import type { SearchHistoryItem } from './utils/historyStorage';

function App() {
  const [searchCity, setSearchCity] = useState('');
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);

  const { data: weatherData, isLoading, error } = useWeather(searchCity);

  useEffect(() => {
    setSearchHistory(getSearchHistory());
  }, []);

  useEffect(() => {
    if (weatherData && weatherData.location && searchCity) {
      const currentHistory = getSearchHistory();
      const lastSearch = currentHistory[0]?.cityName;

      if (lastSearch !== weatherData.location.name) {
        addToSearchHistory(weatherData.location.name);
        setSearchHistory(getSearchHistory());
      }
    }
  }, [weatherData?.location?.name]);

  const handleSearch = (city: string) => {
    setSearchCity(city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-200 to-sky-300 py-8">
      {/* Background Clouds */}
      <Background />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header */}
        <Header />
        
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {/* Grid Layout: Sidebar + WeatherCard */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Sidebar - Recent Searches */}
          <div className="lg:col-span-1">
            <RecentSearches 
              searchHistory={searchHistory}
              onCityClick={handleSearch}
            />
          </div>

          {/* WeatherCard */}
          <div className="lg:col-span-3">
            <WeatherCard 
              weatherData={weatherData}
              isLoading={isLoading}
              error={error}
              hasData={!!weatherData}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;