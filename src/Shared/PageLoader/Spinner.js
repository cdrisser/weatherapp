import React from 'react'
import '../PageLoader/Spinner.css'
const Spinner = (props)=>{
    return(
        <div className = 'weather-container'>
        <div className="spinner">{props.children}</div>
        </div>
    )
}

export default Spinner;