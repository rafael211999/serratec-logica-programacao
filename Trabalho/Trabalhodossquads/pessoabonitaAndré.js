/* Desenvolva um programa para descobrir a idade da pessoa e se ela é bonita. Com as informações que ela te passar, retorne a idade dela e se ela é bonita.   */

var prompt = require("prompt-sync")();
var nome = prompt("Qual o seu nome ? ");
var anoNascimento = prompt("Qual o ano que você nasceu ? ");

var anoatual = 2021;
var calcIdade = anoatual - anoNascimento;
var idade = calcIdade;
var bonita = idade;
var pessoabonita = idade >= 15 && idade <= 45;

if (pessoabonita) {
  console.log("Descobri a sua idade " + nome + ", você tem:" + idade);
  console.log(
    "Você é considerado uma pessoa bonita: " + pessoabonita + " parabéns"
  );
} else {
  console.log("Descobri a sua idade" + nome + ", você tem:" + idade);
  console.log("Você é considerado uma pessoa bonita: " + pessoabonita);
  console.log(
    "Que pena, só te resta ser uma pessoa muito gente boa, isso torna a pessoa bonita, fica triste não."
  );
}
