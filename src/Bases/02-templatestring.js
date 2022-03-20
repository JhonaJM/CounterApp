const nombre="jhona";
const apellido="jimenez";
const NombreCompleto = `
${nombre}
 ${apellido}`;

//console.log(NombreCompleto);

export function getSaludo(nombre) {
    return 'Hola '+ nombre;
}

//console.log( ` este es un texto ${getSaludo(nombre)}`)