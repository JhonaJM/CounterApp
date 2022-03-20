import React from 'react';
import PropTypes from 'prop-types';
//FC->functional components

//el fragement se usa para retornar varias etiquetas->no lo usan mucho,mas se usa los signos vacios como esta abajo

//no se puede retornar objetos ni boleanos solo colocando la variable en llaves.
//<pre>{JSON.stringify(objeto,null,3)}</pre> ->el null y el 3 hacen que se vea bonito en la web

//saludo es una desfragmentacion
const PrimeraApp=({saludo,otra,subtitulo})=>{
   
   /*  if(!saludo)
    throw new Error("error, el saludo es neccesario"); */
    const texto="hola texto";
    const numeros=123.12;
    const array=[1,2,3,4,5,"hola"];
    const boleano=true;
    const objeto={ nombre:"jhona",edad:21};
    return (
        <>
        <p>{subtitulo}</p> 
        <p>{saludo}</p> 
        <p>{otra}</p> 
        <h2>{texto}</h2> 
        <h2>{numeros}</h2> 
        <h2>{array}</h2> 
        <h2>{boleano}</h2> 
        <pre>{JSON.stringify(objeto,null,3)}</pre> 
        
        </>
    );

}

PrimeraApp.propTypes={
    saludo:PropTypes.string.isRequired,
    otra:PropTypes.number.isRequired
}
//valores por dfecto
PrimeraApp.defaultProps={
    subtitulo:'Soy un subtitulo',
}
export default PrimeraApp;