/* Para ajudar a criança que ainda não sabe contar “ímpar par”, o programa pergunta até qual número ela quer contar, e quais ela quer ver (pares ou ímpares). */

const prompt = require("prompt-sync")();
var numero = prompt("Até qual numero voce deseja contar ? ");
var parImpar = prompt("Quais você deseja ver, pares ou impares ? ");

for (var i = 1; i <= numero; i++) {
  switch (parImpar) {
    case "pares":
      if (i % 2 == 0) {
        console.log(i);
      }
      break;
    case "impares":
      if (i % 2 == 1) {
        console.log(i);
      }
      break;
  }
}
