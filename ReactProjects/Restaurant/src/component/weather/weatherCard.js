import React, { useEffect, useState } from 'react'

const WeatherCard = ({tempInfo}) => {
    const[weatherState, setWeatherState] = useState("");
    const {
        temp, humidity, pressure, id, main: weatherMood, description,
        name, speed, country, sunrise, sunset 
    } = tempInfo;

    //To update the weather icon, based on weatherMood data
    useEffect(() => {   
        if(weatherMood) {
            switch (weatherMood) {
                case "Clouds": setWeatherState("wi-day-cloudy");
                    break;
                case "Haze": setWeatherState("wi-fog");
                    break;
                case "Clear": setWeatherState("wi-day-clear");
                    break;
                
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weatherMood]);

    //convert seconds into time.
    let seconds = sunset;
    let date = new Date(seconds * 1000);
    let dateStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
    {/** Our temperature card */}
    <article className='widget'>
        <div className='weatherIcon'>
            <i className={`wi ${weatherState}`}></i>    
        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
                <span>{temp}&deg;</span>
            </div>
            <div className='description'>
                <div className='weatherCondition'>{weatherMood}</div>
                <div className='place'>{name}, {country}</div>
            </div>
        </div>
        <div className='date'>{ new Date().toLocaleString() }</div>

        {/** 4 column section */}
        <div className='extra-temp'>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p><i className={"wi wi-sunset"}></i></p>    
                    <p className='exra-info-leftside'>{pressure} <br/> Pressure</p>
                </div>
                <div className='two-sided-section'>
                    <p><i className={"wi wi-rain"}></i></p>    
                    <p className='exra-info-leftside'>{humidity} <br/> Humidity</p>
                </div>
            </div>
            <div className='weather-extra-info'>
                <div className='two-sided-section'>
                    <p><i className={"wi wi-sunset"}></i></p>    
                    <p className='exra-info-leftside'>{dateStr} <br/> Sunrise</p>
                </div>
                <div className='two-sided-section'>
                    <p><i className={"wi wi-rain"}></i></p>    
                    <p className='exra-info-leftside'>{speed} <br/> Speed</p>
                </div>
            </div>
        </div>
    </article>
    </>
  )
}

export default WeatherCard