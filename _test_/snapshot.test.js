import { getCharacter } from "../snapshot";
import rick from '../rick.json';

describe('Es hora de jugar',()=>{
    test('Snapshot',()=>{
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('Siempre fallara la instantanea',()=>{
        const user ={
            createAt: new Date (),
            id: Math.floor(Math.random()*20),
        }
        expect(user).toMatchSnapshot();
    });
    test('Tenemos una excepsion dentro del codigo',()=>{
        const user ={
            createAt: new Date (),
            id: Math.floor(Math.random()*20),
            name:"Oscar Barajas "
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        });
    });
});