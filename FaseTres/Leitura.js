// A linha abaixo cria um prompt de comando.
var prompt = require("prompt-sync")();

//abstrái por enquanto 
//nome ()

var nome = prompt("Qual o seu nome ?")
console.log("Bom dia" + nome);

//O \n serve para quebrar uma linha dentro do texto
console.log("linha1 \n linha2")