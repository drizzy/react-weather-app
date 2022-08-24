import React from "react";
import { FiSearch } from 'react-icons/fi'


function WeatherForm ({text, city, temp, icon, desc, humidity, wind, country, func, submit}){

   return(
    <div className="App">
    <div className='weather'>
      <form className="input" onSubmit={submit}>
      <input type={"text"} placeholder="Please enter City" className="input_value" onChange={text} required autoFocus/>
        <span className="input_icon" onClick={func}>
          <FiSearch />
        </span>
      </form>
      
    <div className='weather_display'>
        <h3 className='weather_location'>Weather in {city}</h3>

        <div>
          <h1 className='weather_degrees'>{temp} °C</h1>
        </div>

        <div className='weather_description'>
          <div >
            <div className='weather_description_head'>
                <span className='weather_icon'>
                 <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon" />
                </span>
                <h3>{desc}</h3>
            </div>

            <h3>Humidity: {humidity}%</h3>
            <h3>Wind speed: {wind} m/s</h3>
          </div>

          <div className='weather_country'>
            <h3>{country}</h3>
            <h2 className='weather_date'>4/30/2022, 2:05:24 PM</h2>
          </div>
        </div>

    </div>

    </div>
  </div>
   )
}

export default WeatherForm;