import Header from './components/Header.tsx';
import SearchBar from './components/SearchBar.tsx';
import WeatherCard from './components/WeatherCard.tsx';

function App() {
  const handleSearch = (city: string) => {
    console.log('Searching for:', city);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <WeatherCard hasData={false} />
      </div>
    </div>
  );
}

export default App;