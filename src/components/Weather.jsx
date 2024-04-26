import React from 'react';

function Weather({ data }) {
  if (!data) {
    return null;
  }

  // Function to convert temperature from Kelvin to Celsius
  const kelvinToCelsius = (tempInKelvin) => {
    return (tempInKelvin - 273.15).toFixed(2); // Convert to Celsius and keep 2 decimal places
  };

  return (
    <div className='main flex justify-center mt-[40px] '>
      <div className='w-[300px]  h-[350px] rounded shadow-3xl items-center flex flex-col '>
        <h1 className='mt-8 font-bold text-[24px] bg-white w-[270px] rounded-md '>{data.name}</h1>
        <div className='flex flex-col items-start mx-8 my-10 font-bold text-[20px]  '>
          <p>Temp : {kelvinToCelsius(data.main.temp)} °C</p> {/* Convert temperature to Celsius */}
          <p>Humidity : {data.main.humidity}%</p>
          <p>Wind Speed : {data.wind.speed} m/s</p> {/* Wind speed in meters per second */}
          <p>Max : {kelvinToCelsius(data.main.temp_max)} °C</p> {/* Convert temperature to Celsius */}
          <p>Min : {kelvinToCelsius(data.main.temp_min)} °C</p> {/* Convert temperature to Celsius */}
        </div>
        <p className='font-bold text-[24px] bg-white w-[270px] rounded-md '>{data.weather[0].description.toUpperCase()}</p> {/* Display weather description in uppercase */}
      </div>
    </div>
  );
}

export default Weather;
