

const getWeatherFromParams = async(userLocation)=>{
    const injectParams = !userLocation.latitude ? `${userLocation.param}=${userLocation.value},us`:`lat=${userLocation.latitude}&lon=${userLocation.longitude}`;
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?${injectParams}&appid=5261ae218e7be91538dfa119b6491587&units=imperial`);
    const parseResult = await result.json();
    return parseResult;
  
}

export {getWeatherFromParams}