https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
//desestructuracion
//asignacion desestructurante
const persona ={
    nombre:"Tony",
    edad:45,
    clave:"IronMan"
};

//const {nombre,edad,clave} = persona;
//:name vendria a ser como asignanr el nombre de ese campo, por ejemplo tenemos una variable nombre por  otro lado
//y en ese objeto hay una variable nombre entonces llamamos al campo dos puntos y el nuevo nombre
//ejemplo:
//const {nombre:name} = persona;
//console.log(nombre,edad,clave)

//en los parentesis nombre es un campo del objeto persona , va con las llaves sino da error
const UseContext= ({clave,nombre,edad,rango='si no tiene se pone este valor'})=>{   

   // console.log(nombre,rango);
    return {
        nombreClave:clave,
        anios:edad,
        latitud:{
            lat:123,
            lng:-123,
        }
    }
}

//para acceder a un objeto que esa dentro de mi objeto destructurado se hace asi : como esta longitud
const {nombreClave,anios,latitud:{lat,lng}}=UseContext(persona);
console.log(nombreClave,anios,lat,lng);
