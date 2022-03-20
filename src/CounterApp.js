//rafcp + tab y crea la estructura

import React,{useState} from 'react';
import PropTypes from 'prop-types';
import "./index.css";
//FC->functional components

const CounterApp=({numero})=>{  
    
    const [counter,setCounter]= useState(numero); //desectructuracion=hook
    
    

    const handleAdd=(e)=>{
        setCounter(counter + 1);
        //setCounter((c)=>c+1);
    }
    const handleSubtract=(e)=>{        
        setCounter((c)=>c-1);
    }
    const handleReset=(e)=>{
        setCounter(numero);
        //setCounter((c)=>c+1);
    }
    return (
        <>
        <h1>Counter App</h1>
        <p>{counter}</p>  

        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleReset } >reset</button>
        <button onClick={ handleSubtract }>-1</button>
        </>
    );
}

CounterApp.propTypes={  
    numero:PropTypes.number.isRequired
}
//valores por dfecto
CounterApp.defaultProps={
    numero:1004,
}
export default CounterApp;