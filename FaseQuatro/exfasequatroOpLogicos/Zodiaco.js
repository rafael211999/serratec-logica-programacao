const prompt = require("prompt-sync")();
const aniversario = prompt("Qual o dia do seu aniversario: ");
const nascimento = prompt("Qual o mes do seu nascimento:");
var nasc = nascimento == 01;
var dianiver = aniversario;
var inteligente = nascimento == 01 && aniversario == 25;
switch (aniversario) {
  case "25": {
    if (nasc) {
      console.log(
        `Mês do seu nascimento: ${nascimento}\nDia do aniversario: ${dianiver}\nVocê é inteligente ? ${inteligente}`
      );
      break;
  }}
  default:
    console.log("Informações não encontradas.");
}
