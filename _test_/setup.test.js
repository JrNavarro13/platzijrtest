// despues de cada prueba
afterEach (() => console.log('Depues de cada prueba'));
afterAll (() => console.log('Depues de todas las pruebas'));

//antes de cada prueba
beforeAll (() => console.log('Antes de todas laspruebas'));
beforeEach(() => console.log('Antes de cada prueba'));

describe('preparar antes de ejecutar',() => {
    test('Es verdadero', () => {
        expect(true).toBeTruthy();
    } );
});