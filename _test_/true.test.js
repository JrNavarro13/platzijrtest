import { expect } from "@jest/globals";
import { describe } from "yargs";
import { isNull, isTrue, isFalse, isUndefine } from "../true";

describe('Probar resultados nulos', () => {
    test('null', () =>{
    expect(isNull()).toBeNull();  
});
});
describe('Probar resultados verdaderos', () => {
    test('Verdadero', () =>{
    expect(isTrue()).toBeTruthy();  
});
});

describe('Probar resultados falsos', () => {
    test('false', () =>{
    expect(isFalse()).toBeFalsy();  
});
});
describe('Probar resultados Undefine', () => {
    test('undefine', () =>{
    expect(isUndefine()).toBeUndefined();  
});
});
describe('Probar resultados no verdaderos', () => {
    test('Falso o verdareo ', () =>{
    expect(isFalse()).not.toBeTruthy();  
});
});
