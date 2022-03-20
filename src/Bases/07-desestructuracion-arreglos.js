const Personajes=['goku','vegeta','trunks'];
//deseestructuracion de arreglo
//la coma es para separar los elementos del arreglo e indicar la posicion
const [p1,,p3]=Personajes;
console.log(p1,p3);

const retornaArreglo=()=>{
    return['ABC',123];
}

const [letras,numeros]=retornaArreglo();
console.log(letras,numeros);
//tarea

const useState=(valor)=>{
    return[valor,()=>{console.log("hola mundo")}]
}

const [nombre,setNombre]=useState("sapo");
console.log(nombre);
setNombre();