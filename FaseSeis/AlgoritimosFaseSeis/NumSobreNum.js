/* Em “números sobre números”, o programa solicita uma entrada inteira, mostra a sequência decrescente entre número até 1, e a soma de todos os valores da sequência. */

const prompt = require("prompt-sync")();
var pergunta = prompt("Digite um numero: ")
var numero = parseInt(pergunta);
var soma = 0;

for(var i = numero; i >= 1; i = numero--){
    console.log(numero)
    soma += i;
}
console.log(`A soma dos valores é = ${soma}`);