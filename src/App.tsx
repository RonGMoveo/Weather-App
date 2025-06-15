function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Weather App
          </h1>
          <p className="text-gray-600">
            Get current weather for any city
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input 
            type="text" 
            placeholder="Enter city name..."
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Weather Results */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-500 text-center">
            Search for a city to see weather information
          </p>
        </div>
      </div>
    </div>
  )
}

export default App