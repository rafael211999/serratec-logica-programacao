/* Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar. */

const prompt = require("prompt-sync")();
var tabuada = prompt("Qual a tabuada que você quer saber:");

for (var num = 1; num <= 10; num++) {
  var resultado = num * tabuada;
  var conta = num + " x " + tabuada;
  var mensagem = conta + " = " + resultado;
  console.log(resultado);
}
