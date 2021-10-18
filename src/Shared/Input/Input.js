import React,{useState, useEffect} from 'react';
import { inputValidator } from '../InputValidator/InputValidator';
import ErrorBanner from '../ErrorBanner/ErrorBanner';

const Input = ({setlookupParams})=>{
    const [showErrorBanner, setShowErrorBanner] = useState(false);
    
    const verifyInput = (event)=>{
        setTimeout(()=>{
            let value = event.target.value.trim();
            let paramType = parseInt(value)? 'zip':'q';
            if(inputValidator(value)) {
                setShowErrorBanner(false);
                setlookupParams(prevState=>({
                    ...prevState,
                    isvalid:true,
                    param:paramType,
                    value:value.replace(/\s+/g,'%20')
                }));
                
            }
            else {
                if(paramType === 'q' && !/\d/.test(value) && value.indexOf(' ') !== -1){
                    setShowErrorBanner(true);
                }
                if(value ===''){
                    setShowErrorBanner(false);
                }
                setlookupParams(prevState=>({
                    ...prevState,
                    isvalid:false
                }));          
            }
        },500)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    

    return(
        <React.Fragment>
            {showErrorBanner && <ErrorBanner><div>Don't forget the comma between city and state</div></ErrorBanner>}
            <input id="lookUpParams" type = 'text' onChange={verifyInput} placeholder="12345 or City, ST"></input>
        </React.Fragment>
    )
}

export default Input;