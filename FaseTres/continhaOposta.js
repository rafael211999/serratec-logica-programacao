//  A “continha oposta” lê um número e mostra seu valor negativo.
const prompt = require("prompt-sync")();
var ler = prompt("Qual numero você escolhe ?");

var numeroInverso = (ler *= -1);
console.log(`O valor inverso do numero que você ecolheu é ${numeroInverso}`);
