import React,{useState} from 'react'
import Input from '../Shared/Input/Input';

const WeatherLookup = ({setUserLocation})=>{
    const [lookupParams, setlookupParams] = useState({param:null,value:'',isvalid:false});
    

    const verifyInput = event =>{
        event.preventDefault();
        const {param,value} = {...lookupParams};
        const unwrapLocationParams = {param,value};
        setUserLocation(unwrapLocationParams);
    }
    return(
        <form onSubmit={verifyInput}>
        <Input setlookupParams={setlookupParams} value ={lookupParams.value}   />
        <button type="submit" value="Submit" disabled={!lookupParams.isvalid}>Submit</button>
        </form>
        
    )
}
export default WeatherLookup;