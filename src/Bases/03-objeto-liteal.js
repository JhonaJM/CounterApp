const persona={
    nombre:"tony",
    apellido:"stark",
    edad:"45",
    direccion:{
        ciudad:"new york",
        zip:"123",
        lat:"3.43",
        long:"-3234"
    }
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map

console.log({persona});
///console.table({persona});
//creando copia de persona con ecmascript
const persona2={...persona};
persona2.nombre='peter';
console.log(persona2);