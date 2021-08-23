/*O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.  */
const prompt = require("prompt-sync")();
const ler = prompt("Qual o primeiro valor: ");
const ler2 = prompt("Qual o segundo valor: ");
const ler3 = prompt("Qual o terceiro valor: ");

var n1 = ler;
var n2 = ler2;
var n3 = ler3;

var triangulo = ler == ler2 && ler2 == ler3;

if (triangulo) {
  console.log("Estas medidas formam um triangulo valido.");
} else {
  console.log("Estas medidas não formam um triangulo valido");
}
