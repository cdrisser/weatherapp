import React from 'react';
import '../ErrorBanner/ErrorBanner.css'

const ErrorBanner = (props)=>{
    return <p className="error-banner">{props.children}</p>
}

export default ErrorBanner; 