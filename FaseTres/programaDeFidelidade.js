/* O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto. */

const prompt = require("prompt-sync")();
const ler = prompt("Digite seus cupons: ");
console.log(`De acordo com seus cupons, você tem ${ler} pontos no programa de fidelidade!`)
