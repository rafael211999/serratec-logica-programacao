/* No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas.  */

const prompt = require("prompt-sync")();
console.log("== Eleições 2020 ==");
const ler = prompt("Digite sua idade: ");

var idade = ler > 16;
if (idade) {
  console.log("Você já pode votar ?", idade);
} else {
  console.log(
    "Infelizmnte você ainda nao pode votar, aguarde fazer a idade necessaria."
  );
}
