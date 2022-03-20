import {getSaludo} from '../../Bases/02-templatestring';
import '@testing-library/jest-dom';
describe('pruebas en el archivo 02-templatestring.js',()=>{
test('prueba en el metodo getSaludo ', () => {
    const nombre='jhona';
    const saludo=getSaludo(nombre);
    expect(saludo).toBe('Hola '+ nombre)
})

});