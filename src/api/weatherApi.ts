import axios from 'axios';
import type { WeatherData } from '../types/weatherTypes.ts';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeatherWithForecast = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
        params: {
        key: API_KEY,
        q: city,
        days: 4,
        },
    });
    
    return response.data;
    } catch (error: any) {
        if (error.response?.data) {
            throw error.response.data; 
        }
        throw { error: { code: 0, message: 'Network error occurred' } };
    } 
    
};