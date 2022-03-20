describe('pruebas en el archivo demo.test.js',()=>{
    //describe es para agrupar las pruebas
    //test es la prueba,pueden haber varias aqui
    test('debe ser igual los string', () => {
        //1.inicializacion  
        const mensaje1="jhona";
        //2. Estimulo
        const mensaje2=`jhona`;
        //3 observa el comportamiento
        expect(mensaje1).toBe(mensaje2);
    })

});