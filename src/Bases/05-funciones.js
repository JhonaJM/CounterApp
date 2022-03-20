//trabajar funciones con const,para evitar tocarlas sin querer
const saludar =function saludar(nombre) {
    return `Hola ${nombre}`;    
}

//funcio flecha
const saludar2 =(nombre)=> {
    return `Hola ${nombre}`;    
}

//funcion ligera de un solo un return
const saludar3 =(nombre)=>  `Hola ${nombre}`;    
const saludar4 =()=>  `Hola MUNDO`;   
//RETORNAR UN OBJETO DE MANERA IMPLICITA, debe estar entre parentesis para retornar un objeto
const getUser=()=>(
    {
        uid:"1004",
        username:"jhonajm"
    }) 

    const user= getUser();
console.log(saludar("JHonatan"));
console.log(saludar2("Jhonatan"));
console.log(saludar3("DE"));
console.log(saludar4());
console.log(user);
//ejercicio
function  getUsuarioActivo(nombre) {
    return{
        uid:"1004",
        username:nombre
    }
}

const usuarioActivo = getUsuarioActivo('lila');
//transformar a funcion flecha y retornar objeto implicito
const getUserActivo2=(nombre)=>({
        uid:"1004",
        username:nombre
    });  
    console.log(getUserActivo2('jhona'));
