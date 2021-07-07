import { TestResult } from "@jest/types";
import expectExport from "expect";
import { describe } from "yargs";
import { getDataFromApi } from "../promise";

describe('Probar Async/Await',()=> {
    test('Realiza una peticion a una api',async()=>{
        const api = 'https://rickandmortyapi.com/api/character/';
        const getRick ='https://rickandmortyapi.com/api/character/1';
        await getDataFromApi(api).then(data =>{
            expect(data.result.length).toBeGreaterThan(0);
        });
        await getDataFromApi(getRick).then(data => {
            expect(data.name).toEqual('Rick Sanches');
        });
    });
    test('Realiza una peticion a una api con erro',async()=>{
        const api = 'https://httpstat.us/500';
        const peticion = getDataFromApi(apiError);
        await expect(peticion).rejects.toEqual(Error('Request failed whith status code 500'));
        });

        test('Resuelve un Hola', async()=>{
            await expect(Promise.resolve('Hola')).rejects.toBe('Hola');
await expect(Promise.resolve('Error')).rejects.toBe('Error');
        });

});