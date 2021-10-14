import React, { useState } from 'react'
import LayoverSearch from '../Shared/LayoverSearch/LayoverSearch';
import '../WeatherDisplay/WeatherDisplay.css';

const WeatherDisplay = ({name, coord:{lat,lon},main:{temp, feels_like},weather, setUserLocation})=>{
    const[displaySearch,setDisplaySearch]= useState(false);
    const imgsrc = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

    const openSearchModal = ()=>{
        setDisplaySearch((prev)=>!prev)
    }

    return(
        <React.Fragment>
            {displaySearch ? <LayoverSearch close={setDisplaySearch} setUserLocation={setUserLocation} />: <span className='icon-container' onClick={openSearchModal}><svg xmlns="http://www.w3.org/2000/svg" className="icon-search" viewBox="0 0 512 512"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" fill="#af3648" className="color000 svgShape"/></svg></span>}
            <div className = "weather-stats">
                <div><img className ="weather-icon" src={imgsrc} alt="weather icon"/></div>
                <div className="temp">{temp.toString().split('.')[0]}</div>
                <div className='description'>{weather[0].description}</div>
                <div className="cityName">{name}</div>
                <div className="coordinates">{lat}<span>&nbsp;</span>{lon}</div>
                <div>Feels like:{feels_like.toString().split('.')[0]}</div>
            </div>
        </React.Fragment>
    )
}
export default WeatherDisplay;