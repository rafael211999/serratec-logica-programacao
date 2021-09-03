/* No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, que armazena o valor e solicita a próxima carta. A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha o carteador quando a soma ultrapassa esse valor. */
var prompt = require("prompt-sync")();


carta = parseInt(carta);
var somar = 0;

do {
var carta = prompt("Qual carta: ");
somar += parseInt(carta); 
console.log(somar);
}while(somar < 21)

if (somar == 21) {
  console.log("O vencedor é o Jogador!!");
}
if (somar > 21) {
  console.log("O ganhador é o carteador.");
}