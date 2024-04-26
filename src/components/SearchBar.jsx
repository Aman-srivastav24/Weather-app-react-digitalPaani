import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Weather from './Weather'; // Import the WeatherDisplay component

function SearchBar() {
  const [inputValue, setInputValue] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null); // State to store weather data
  const apiKey = import.meta.env.VITE_APIKEY;


  const handleButtonClick = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`);
      const weatherData = response.data;
      setWeatherData(weatherData); // Update weatherData state
      console.log(weatherData);
    } catch (error) {
      console.error("Error Fetching Data", error);
    }
  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  useEffect(() => {
    handleButtonClick()
  
},[])
  return (
    <div className='main'>
      <div className="input flex gap-2 justify-center">
        <input type="text" placeholder='Enter city.. ' className='p-2 w-[280px] md:w-[400px] rounded'
          value={inputValue}
          onChange={handleInputChange} />
        <button className='bg-gray-300 rounded p-2 hover:scale-110' onClick={handleButtonClick}>Go</button>
      </div>
      {weatherData && <Weather data={weatherData} />} {/* Pass weatherData as prop to WeatherDisplay if available */}
      
    </div>
  )
}

export default SearchBar;
