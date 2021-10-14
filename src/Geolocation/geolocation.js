import React, {useEffect, useState} from 'react';
import {getWeatherFromParams} from '../Shared/APIService/APIRequest'
import Spinner from '../Shared/PageLoader/Spinner';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import ErrorBanner from '../Shared/ErrorBanner/ErrorBanner';

import '../Geolocation/Geolocation.css'
import WeatherLookup from '../WeatherLookup.js/WeatherLookup';

const Geolocation =  () => {
  const [userLocation, setUserLocation] = useState('');
  const [foundWeather, setFoundWeather] = useState('')
  const [isloading, setIsLoading] = useState(false);
  const [error,setError] = useState('');
  const userIsSharingLocation = (result)=>{  
    setUserLocation(result.coords)
    setIsLoading(false);
  }

  const userIsNotSharingLocation = ()=>{
    setIsLoading(false);
  }

  useEffect(()=>{
    if(!!window.navigator.geolocation){
      setIsLoading(true);
      window.navigator.geolocation.getCurrentPosition(userIsSharingLocation,userIsNotSharingLocation);
    }
   },[]);
  
   useEffect(()=>{
     setError('');
    const getWeather = async ()=>{
      if(userLocation){
        setIsLoading(true);
        const weather = await getWeatherFromParams(userLocation);
        if(weather.cod === 200){
          setFoundWeather(weather);
        }
        else {
          setError(weather.message);
          setFoundWeather('');
        }
        setIsLoading(false);
      }
    }  
    getWeather();
    },[userLocation]);

    let loadingStatement = 'Currently Loading location'
    if(isloading){
      return <Spinner><div>{loadingStatement}</div></Spinner>
    }
    let typeOfImg = foundWeather && foundWeather.weather[0].icon;

    if(typeOfImg.substring(0,2) === '50'){
      typeOfImg = foundWeather.weather[0].main.toLowerCase();
    }
    
    return(
      <div className = {`weather-container ${foundWeather?'background-image':''}`} style ={{"backgroundImage":!!foundWeather ?  `linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.15)),url(
        https://weatherappreat.s3.us-west-2.amazonaws.com/weather-app-images/tinified/${typeOfImg}.jpg)`: 'none' }} >
        {error && <ErrorBanner>{error}</ErrorBanner>}
        {(!userLocation || error) && <WeatherLookup setUserLocation={setUserLocation}/>}
        {!!foundWeather && <WeatherDisplay {...foundWeather} setUserLocation={setUserLocation} />}
      </div>
      ) 
};

  export default Geolocation;


  