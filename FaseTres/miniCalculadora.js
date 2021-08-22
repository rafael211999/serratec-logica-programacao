/* Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles. */
const prompt = require("prompt-sync")();
const ler = prompt("Digite o primeiro número para operação: ");
const ler2 = prompt("Digite o segundo número para operação: ");

var n1 = parseInt(ler);
var n2 = parseInt(ler2);

var soma = n1 + n2;
var sub = n1 - n2;
var mult = n1 * n2;
var div = n1 / n2;

console.log(
  `O resultado da soma do primeiro e do segundo numero é de: ${soma}.`
);
console.log(
  `O resultado da subtração do primeiro e do segundo numero é de: ${sub}.`
);
console.log(
  `O resultado da multiplicação do primeiro e do segundo numero é de: ${mult}.`
);
console.log(
  `O resultado da divisão do primeiro e do segundo numero é de: ${div}.`
);
