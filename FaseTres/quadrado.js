/* O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado. */

const prompt = require("prompt-sync")();
const ler = prompt("Digite um numero ?");

var numero = ler;
var dobro = numero * numero;

console.log(`O quadrado de ${numero} foi ${dobro}.`);
