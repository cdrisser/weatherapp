import React from 'react';
import WeatherLookup from '../../WeatherLookup/WeatherLookup';
import '../LayoverSearch/LayoverSearch.css'

const LayoverSearch = ({setUserLocation, close})=> {
    const closeSearchModal =() =>{
        close(false)
    }
    return (
        <div className = "layover-search-container">
            <span className='icon-container' onClick={closeSearchModal}><svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="#af3648" strokeMiterlimit="10" strokeWidth="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" className="colorStrokecurrentColor svgStroke"/><path fill="none" stroke="#af3648" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 320L192 192M192 320l128-128" className="colorStrokecurrentColor svgStroke"/></svg></span>
            <WeatherLookup setUserLocation={setUserLocation}/>
        </div>
    )
}

export default LayoverSearch;