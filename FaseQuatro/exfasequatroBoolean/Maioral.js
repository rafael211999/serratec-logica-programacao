/* Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela */

const prompt = require("prompt-sync")();
var player1 = prompt("Digite um numero:");
var player2 = prompt("Digite um numero:");


var venceu = player1 > player2;
var perdeu = player1 < player2
console.log("== Maioral ==")
console.log(`Player 1: ${player1}`)
console.log(`Player 2: ${player2}`)
console.log(": Resultados :")
console.log(`Player 1 venceu ? ${venceu}`)
console.log(`Player 2 venceu ? ${perdeu}`)