/* O abecedário da Xuxa agora segue cantando a definição musical até que a criança decida parar de ouvir, pressionando o zero. */

const prompt = require("prompt-sync")();
var musicaXuXa =
  "A de amor, B de baixinho, C de coração, D de docinho, E de escola, F de feijão, G de gente, H de humano, I de igualdade, J juventude, L liberdade, M molecagem, N natureza, O obrigado, P proteção, Q de quero-quero, R de riacho, S saudade, T de terra, U de universo, V de vitória, X o que é que é? É Xuxa!!!, Z é zum zum zum zum zum";

do {
  console.log(musicaXuXa);
  var resposta = prompt("deseja continuar ounvindo essa musica ?");
} while (resposta != "0");

console.log("Obrigado por ouvir nossa musica !!!")
