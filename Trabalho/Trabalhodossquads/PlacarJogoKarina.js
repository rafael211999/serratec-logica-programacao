/* Um placar de jogo que quando o jogador chegar no 7 vence a partida */
var prompt = require("prompt-sync")();
var ler = prompt("Escolha um numero de 1 a 7: ");

do {
  var num = ler == "7";
  var num2 = ler > "7" || ler < "1";

  if (num) {
    console.log("Parabéns, você venceu !!!");
    break;
  } else if (num2) {
    console.log("Numero invalido");
    var ler = prompt("Você deve escolher um numero de 1 a 7: ");
  } else {
    console.log("Você errou.");
    var ler = prompt("Escolha um numero de 1 a 7: ");
  }
} while (!num);
