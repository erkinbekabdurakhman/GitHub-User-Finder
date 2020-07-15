import React from 'react';
import spinner from './spin.gif';

const Spinner = () => {
    return(
        <>
        <img src={spinner} alt="loading" 
        style={{width: '200px', margin: 'auto', display: 'block'}} />
        </>
    )
}

export default Spinner;