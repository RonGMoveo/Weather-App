interface WeatherCardProps {
  hasData: boolean;
}

const WeatherCard = ({ hasData }: WeatherCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {hasData ? (
        <div>
          <p>Weather data will go here</p>
        </div>
      ) : (
        <p className="text-gray-500 text-center">
          Search for a city to see weather information
        </p>
      )}
    </div>
  );
};

export default WeatherCard;