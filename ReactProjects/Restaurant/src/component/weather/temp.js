// https://api.openweathermap.org/data/2.5/weather?q=melbourne&appid=fea4d3c7c02d5506957347e386a1e224
import React from 'react'
import '../weather/style.css'

const Temp = () => {
  return (
    <>
    <div className='wrap'>
        <div className='search'>
            <input type="search" placeholder='search...' autoFocus className='searchTerm' />
            <button className='searchButton' type='button'>Search</button>
        </div>
    </div>

    {/** Our temperature card */}
    <article className='widget'>
        <div className='weatherIcon'>
            <i className={"wi wi-day-sunny"}></i>    
        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
                <span>25.4&deg;</span>
            </div>
            <div className='description'>
                <div className='weatherCondition'>sunny</div>
                <div className='place'>Melbourne, Aus</div>
            </div>
        </div>
        <div className='date'>{ new Date().toLocaleString() }</div>

        {/** 4 column section */}
        <div className='extra-temp'>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p><i className={"wi wi-sunset"}></i></p>    
                    <p className='exra-info-leftside'>19.19 PM <br/> Sunset</p>
                </div>
                <div className='two-sided-section'>
                    <p><i className={"wi wi-rain"}></i></p>    
                    <p className='exra-info-leftside'>19.19 PM <br/> Humid</p>
                </div>
            </div>
            <div className='weather-extra-info'>
                <div className='two-sided-section'>
                    <p><i className={"wi wi-sunset"}></i></p>    
                    <p className='exra-info-leftside'>19.19 PM <br/> Sunset</p>
                </div>
                <div className='two-sided-section'>
                    <p><i className={"wi wi-rain"}></i></p>    
                    <p className='exra-info-leftside'>19.19 PM <br/> Humid</p>
                </div>
            </div>
        </div>
    </article>
    </>
  )
}

export default Temp