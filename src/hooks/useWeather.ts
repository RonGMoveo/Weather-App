import { useQuery } from '@tanstack/react-query';
import { fetchWeatherWithForecast } from '../api/weatherApi';
import type { WeatherData, WeatherError } from '../types/weatherTypes';

export const useWeather = (city: string) => {
  return useQuery<WeatherData, WeatherError>({
    queryKey: ['weather', city],
    queryFn: () => fetchWeatherWithForecast(city),
    enabled: !!city,
    retry: false,
  });
};