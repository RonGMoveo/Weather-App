export interface CurrentWeather {
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  condition: {
    text: string;
    icon: string;
  };
}

// Types for daily forecast
export interface DayForecast {
  date: string;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

// Main weather response type
export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: CurrentWeather;
  forecast: {
    forecastday: DayForecast[];
  };
}

export interface WeatherError {
  error: {
    code: number;
    message: string;
  };
}