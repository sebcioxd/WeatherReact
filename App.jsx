import React, {useState } from 'react';
import './App.css';

const App = () => {

  const [weather, setWeather] = useState({});
  const [weatherTerm, setWeatherTerm] = useState('');

  const apiKey = 'YOUR-API-KEY, open weather app';

  const getWeather = async (cityname, apiKey) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`)
      const data = await response.json();
      setWeather(data);
      console.log(weather);

      if(data.message === 'city not found') {
        throw new Error("City input is wrong");
  
      } else if (!response.ok) {
        throw new Error("Error cannot be resolved.")
      }

      
    } catch(error){
      console.error(error);
      alert(error);
    }
    
  
  }
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getWeather(weatherTerm, apiKey);
    }
  }
  

  return (
    <div className="App">
      <div className="inputForWeather">
        <input 
        type="text" 
        className='PrimaryButton'
        id='inputText'
        value={weatherTerm}
        onChange={(e) => {setWeatherTerm(e.target.value)}}
        placeholder='Enter location..'
        onKeyDown={handleKeyDown}
        />
        <input 
        type="submit" 
        className='SecondaryButton'
        id='inputSubmit'
        onClick={() => {getWeather(weatherTerm, apiKey)}}
        />

      </div>

      {
        weather.message !== 'city not found' 
         ?(
          <div className="container">
            <div className="name">
                {weather.name ? <p>Name: {weather.name}</p> : null}
              </div>
              <div className="temperature">
                {weather.main ? <p>Temperature: {Math.floor(weather.main.temp)} °C</p> : null}
              </div>
              <div className="type">
                {weather.weather ? <p>Type: {weather.weather[0].description}</p> : null}
              </div>
              <div className="wind">
                {weather.wind ? <p>Wind speed: {weather.wind.speed} km/h</p> : null}
              </div>
              <div className="feelsLike">
                {weather.main ? <p>Feels like: {Math.round(weather.main.feels_like)} °C</p> : null}
              </div>
              
          </div>
        ) : 
        (
          <div className="empty">
            <h2>No weather found.</h2>
          </div>
        )
      }
      
    </div>

  )


}

export default App