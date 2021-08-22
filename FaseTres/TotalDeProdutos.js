/* Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. Depois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade */

const prompt = require("prompt-sync")();
const ler = prompt("Quantos produtos o senhor(a) vai comprar ? ");
var quantProdutos = ler;
console.log(`Parabéns por comprar ${quantProdutos}.`);
