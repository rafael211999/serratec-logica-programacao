/* O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda até que ela caia do jeito que você queria! Cada jogada será exibida no console. */

const prompt = require("prompt-sync")();
const pergunta = prompt("Qual voce escolhe 0 = cara e 1 = coroa  ");

var resposta = parseInt(pergunta);
var aleatorio = Math.floor(Math.random() * 2);
console.log(aleatorio);


while (aleatorio != resposta){ 
  aleatorio = Math.floor(Math.random() * 2);
  console.log(aleatorio);
}
console.log("Aleluia você ganhou !!!"); 
