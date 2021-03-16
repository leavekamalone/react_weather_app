import React, { useState } from 'react';
import './App.css';
import Conditions from './Coniditions';

function Api() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  let [city, setCity] = useState('');



function getForecast(e) {
    e.preventDefault();
    if (city.length === 0 ) {
        return setError(true)
    }

    setIsLoaded(false);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${idhere}`, {mode: 'cors'})
    .then(res => res.json())
    .then(
      (result) => {
        if (result.cod !== 200) {
            throw new Error();
        }
       
        setWeather(result);
        console.log(result)
        
      })
      .catch(err => {
          setError(true);
          setIsLoaded(true)
    })
}

    return (
        
    <div className="Api"> 
    <form onSubmit={getForecast}>
        <input type="text" placeholder="Enter City" maxLength="40" value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit"> Get Forecast </button>
    </form>
    <Conditions weather={weather} error={error} isLoaded={isLoaded} />
    </div>
    );
  }


export default Api;
