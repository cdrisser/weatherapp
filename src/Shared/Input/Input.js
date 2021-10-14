import React from 'react';
import { inputValidator } from '../InputValidator/InputValidator';

const Input = ({setlookupParams})=>{
    const verifyInput = (event)=>{
        setTimeout(()=>{
            let value = event.target.value.trim();
            if(inputValidator(value)) {
                const paramType = parseInt(value)? 'zip':'q';
                setlookupParams(prevState=>({
                    ...prevState,
                    isvalid:true,
                    param:paramType,
                    value:value.replace(/\s+/g,'')
                }));
                
            }
            else {
                setlookupParams(prevState=>({
                    ...prevState,
                    isvalid:false
                }));          
            }
        },500)
    }

    return(
        <div>
        <label htmlFor = "lookupParams">Please enter zip or city and state as shown</label>
        <br></br>
        <input id="lookUpParams" type = 'text' onChange={verifyInput} placeholder="97015 or Clackamas, OR"></input>
        </div>
    )
}

export default Input;