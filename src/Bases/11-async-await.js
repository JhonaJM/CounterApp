//async funciona como una promesa
//el await nos ayuda a trabajar cmo si todo fuera asincrono
//el await debe estar dentro de async para que funcione

/* const getImage=async()=>
{
    return"https://google.com";
}


getImage().then(console.log) */

const getImage=async()=>
{
    try{
        const apiKey="zMyN4q11jDGRIbdt4tzmXKqMcQPg5Giu";
        const respuesta=await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`);
        const data=await respuesta.json();
        console.log(data);
    }
    catch(error){
        //manejo del error
    

    }   
}
getImage();