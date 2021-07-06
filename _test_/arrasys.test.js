import { test } from "@jest/globals";
import { arrayFruits,arrayColors } from "../arrasys";

describe('Comprobaremos que existe un elemento',() =>{
    test('¿Tiene una banana', () =>{
        expect(arrayFruits()).toContain('banana');
    });
    test('No tiene un Platano', () =>{
        expect(arrayFruits()).not.toContain('platano');
    });
    test('comprobar el tamaño de un arreglo', () =>{
        expect(arrayFruits()).toHaveLength(5);
    });
    test('comprobar que esxiste un color', () =>{
        expect(arrayColors()).toContain("azul");
    });
});