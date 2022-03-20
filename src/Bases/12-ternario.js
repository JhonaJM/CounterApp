const activo=true;
//let mensaje=activo ? "activo" : "inactivo";

/* if (activo)
mensaje="Activo";
else
mensaje="inactivo"; */

//otra manera de un operador ternario
//lo que hace es que si el primero es verdadero muestra lo que sigue , si lo primero es falso no muestra nada
//y retorna false
const mensaje = activo && "activo";

console.log(mensaje);