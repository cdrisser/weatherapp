import React,{useState} from 'react'
import Input from '../Shared/Input/Input';
import '../WeatherLookup/WeatherLookup.css'

const WeatherLookup = (props)=>{
    const [lookupParams, setlookupParams] = useState({param:null,value:'',isvalid:false});
    

    const verifyInput = event =>{
        event.preventDefault();
        const {param,value} = {...lookupParams};
        const unwrapLocationParams = {param,value};
        props.setUserLocation(unwrapLocationParams);
    }

    return(
        <div className = 'lookup-container' style ={{"justifyContent" : !props.mainPage && 'center'}}>
            {props.mainPage && <h1>Check The Weather</h1>}
            <form onSubmit={verifyInput} className={!props.mainPage ? 'secondary-lookup':'none'}>
            <Input setlookupParams={setlookupParams} value ={lookupParams.value}   />
            <button type="submit" value="Submit" disabled={!lookupParams.isvalid}>Submit</button>
            </form>
        </div>
        
    )
}
export default WeatherLookup;