/* O setor de RH quer fazer uma separação dos candidatos à vaga de programador usando um critério diferente: As pessoas com nome iniciado em vogal serão entrevistadas na segunda-feira, e as pessoas com nome iniciado em consoante, na terça-feira. */
const prompt = require("prompt-sync")();
const ler = prompt("Qual a primeira letra do seu nome:");
var nome = ler.toUpperCase();

var vogal =
  nome == "A" || nome == "E" || nome == "i" || nome == "O" || nome == "U";

if (vogal) {
  console.log("Você sera entrevistado na segunda-feira!!");
} else {
  console.log("Você sera entrevistado na Terça-feira!!");
}
