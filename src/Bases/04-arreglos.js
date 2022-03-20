//---solo usar el new array para definir un numero predefinido de 100 elementos
//const arreglo= new Array(100);
//--se  puede expandir el arreglo con el push
//arreglo.push(1);

const arreglo=[1,2,3,4]

//no es recomendable usar el push porque cambia el arreglo, usar el spreet que son los 3 puntitos
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);

let arreglo2=[...arreglo,5];
const arreglo3=arreglo2.map(function (numero) {
    return numero*2;
})


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
