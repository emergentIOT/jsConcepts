// https://api.openweathermap.org/data/2.5/weather?q=melbourne&appid=fea4d3c7c02d5506957347e386a1e224
import React, { useEffect, useState } from 'react'
import WeatherCard from './weatherCard'
import '../weather/style.css'

const Temp = () => {
    const[searchValue, setSearchValue] = useState("melbourne");
    const[tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            //Request weather data
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=fea4d3c7c02d5506957347e386a1e224`;
            const res = await fetch(url);
            const data = await res.json();
            
            //Destructuring the data return from Promise
            const { temp, humidity, pressure } = data.main;
            const { id, main: weatherMood, description } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunrise, sunset } = data.sys;

            const myWeatherData = {
                temp, humidity, pressure, id, main: weatherMood, description,
                name, speed, country, sunrise, sunset 
            }
            setTempInfo(myWeatherData);
            
            console.log("data", tempInfo);
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        getWeatherInfo();
    }, []);

  return (
    <>
    <div className='wrap'>
        <div className='search'>
            <input type="search" placeholder='search...' autoFocus className='searchTerm' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
    </div>

    <WeatherCard tempInfo={tempInfo} />
    
    </>
  )
}

export default Temp