import ActionButton from './ActionButton';
import type { SearchHistoryItem } from '../utils/historyStorage';

interface RecentSearchesProps {
  searchHistory: SearchHistoryItem[];
  onCityClick: (cityName: string) => void;
}

const RecentSearches = ({ searchHistory, onCityClick }: RecentSearchesProps) => {
  return (
    <div className="bg-white bg-opacity-80 rounded-lg shadow-md p-4 h-fit">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Searches
      </h3>
      
      {searchHistory.length === 0 ? (
        <p className="text-gray-500 text-sm">No recent searches</p>
      ) : (
        <div className="flex flex-col gap-2">
          {searchHistory.map((item) => (
            <div key={`${item.cityName}-${item.timestamp}`} className="w-full">
              <ActionButton
                variant="history"
                size="small"
                onClick={() => onCityClick(item.cityName)}
              >
                {item.cityName}
              </ActionButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentSearches;