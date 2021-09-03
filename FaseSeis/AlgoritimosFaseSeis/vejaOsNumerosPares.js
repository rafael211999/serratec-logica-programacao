/* No programa “Veja os números pares”, o console apresentará uma frase com os números pares entre 2 e 10, separados por vírgula e na mesma linha. A frase termina com ponto, não com vírgula. Após escrever a frase, o sistema pede para continuar, e a cada confirmação, exibe a nova mensagem na sequência (entre 12 e 20 etc). */

console.log(`${2}, ${4}, ${6}, ${8}.`);

var prompt = require("prompt-sync")();
var numeroPar = [];

var numero = [];
numero[0] = 1;
numero[1] = 2;
numero[2] = 3;
numero[3] = 4;
numero[4] = 5;
numero[5] = 6;
numero[6] = 7;
numero[7] = 8;
numero[8] = 9;


for (var i = 0; i < numero.length; i++) {
  if (numero[i] % 2 == 0) {
      numeroPar.push(numero[i] * 2);
    }
}
var resposta = prompt("Deseja continuar ?");

do {
  for (var i = 0; i < numeroPar.length; i++) {
    numeroPar[i] = numeroPar[i] * 2;
  }
  console.log(`${numeroPar}.`);
  resposta = prompt("Deseja continuar ?");
} while (resposta != "nao");
