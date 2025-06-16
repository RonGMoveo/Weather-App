import { useState } from 'react';
import ActionButton from './ActionButton';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <div className="mb-8">
      <div className="flex gap-4">
        <input 
          type="text" 
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        
        <ActionButton 
          variant="search" 
          size="large" 
          onClick={handleSearch}
          disabled={!city.trim()}
        >
          Search
        </ActionButton>
      </div>
    </div>
  );
};

export default SearchBar;