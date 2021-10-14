export const inputValidator = (inputToBeValidated)=>{
    const zipRegex = new RegExp(/\b\d{5}\b/g);
    const cityAndStateRegex = /\b[a-zA-Z]+,[ ]?[A-Z]{2}\b/;
    if(zipRegex.test(inputToBeValidated)){
        return true;
    }
    else if(cityAndStateRegex.test(inputToBeValidated)){
        return true;
    }
    return false; 
}