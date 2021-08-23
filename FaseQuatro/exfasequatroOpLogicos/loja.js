/* O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir. */

const prompt = require("prompt-sync")();
var pessoas = prompt("Quantas pessoas querem entrar na loja ?");

var limite = pessoas < 10;
var loja = 0;
while (limite) {
  console.log("Pode entrar na loja.");
  pessoas = ++pessoas;
  loja = pessoas;
}

console.log(`A loja esta com ${loja} pessoas, voce vai ter que esperar.`)