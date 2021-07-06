describe('Comprobar cadenas  de texto',() =>{
    const text = 'un bonito texto;'
    test('debe contener el mismo texto', () =>{
        expect(text).toMatch(/bonito/);
    });
    test('No contiene el mismo texto', () =>{
        expect(text).not.toMatch(/es/);
    });
    test('comprobar el tamaño del texto', () =>{
        expect(text).toHaveLength(15);
    });
});