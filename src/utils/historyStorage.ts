const HISTORY_KEY = 'weather-search-history';
const MAX_HISTORY_ITEMS = 10;

export interface SearchHistoryItem {
  cityName: string;
  timestamp: number;
}

export const getSearchHistory = (): SearchHistoryItem[] => {
  try {
    const stored = localStorage.getItem(HISTORY_KEY);
    if (!stored) return [];
    
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error reading search history:', error);
    return [];
  }
};

export const addToSearchHistory = (cityName: string): void => {
  try {
    const currentHistory = getSearchHistory();

    const newItem: SearchHistoryItem = {
      cityName,
      timestamp: Date.now()
    };

    const updatedHistory = [newItem, ...currentHistory];

    const limitedHistory = updatedHistory.slice(0, MAX_HISTORY_ITEMS);

    localStorage.setItem(HISTORY_KEY, JSON.stringify(limitedHistory));
  } catch (error) {
    console.error('Error saving search history:', error);
  }
};

export const clearSearchHistory = (): void => {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (error) {
    console.error('Error clearing search history:', error);
  }
};