/*O sistema “Faço parte” vai te mostrar um histórico da trajetória de nossa cidade. O resultado apresentado na tela será: “Teresópolis tem x anos. Desses, foram y antes de mim. Mas nos últimos z anos ela conta comigo!”. Cada letra maiúscula do texto será uma variável, sendo que “x” e “z” são valores fixos, e “y” irá conter uma expressão. */
const prompt = require("prompt-sync")();
const ler = prompt("Qual a sua idade ?");
const ler2 = prompt("Qual a sua data de nascimento ?");
var minhaid = ler;
var datnascimento = ler2;
var idtere = 130;
var idantes = idtere - minhaid;
var idatual = 2021 - datnascimento;

console.log(
  `Teresópolis tem ${idtere} anos. Desses, foram ${idantes} antes de mim. Mas nos últimos ${idatual} anos ela conta comigo!”`
);
