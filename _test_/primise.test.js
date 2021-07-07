import { TestResult } from "@jest/types";
import { getDataFromApi } from "../promise";

desbribe('Probando promesas', ()=> {
    test('Realizando una peticion a una api', done =>{
        const api= 'https://rickandmortyapi.com/api/character/';
        getDataFromApi().then(data =>{
            expect(data.result.length).toBeGreaterThan(0);
            done(); 
        });
    });
    test('Resuelve un Hola!', done =>{
        return expect(Promise.resolve('Hola!')).resolve.toBe('hola!');
    });
    test('Rechaza con un error', done =>{
        return expect(Promise.resolve('Errror')).rejects.toBe('Errror');
    
    });
});