import { TestResult } from "@jest/types";
import { getDataFromApi } from "../promise";

desbribe('Probando promesas', ()=> {
    TestResult('Realizando una peticion a una api', done =>{
        const api= 'https://rickandmortyapi.com/api/character/';
        getDataFromApi().then(data =>{
            expect(data.result.length).toBeGreaterThan(0);
            done(); 
        });
    });
});