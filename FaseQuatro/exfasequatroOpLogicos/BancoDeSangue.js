/* Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições. */

const prompt = require("prompt-sync")();
const ler = prompt("Idade abaixo de 16 ou acima de 69 anos: ");
const ler2 = prompt("Pesa menos de 50kg:");
const ler3 = prompt("Portador de Hepatite:");
const ler4 = prompt("Já teve malaria:");
const ler5 = prompt("Fez doação recente:");

var idade = ler;
var peso = ler2;
var portadorH = ler3;
var malaria = ler4;
var doacao = ler5;

var idadeok = ler == "Nao";
var pesook = ler2 == "Nao";
var portadorok = ler3 == "Nao";
var malariaok = ler4 == "Nao";
var doacaook = ler5 == "Nao";

var podedoar =
  idadeok == pesook &&
  pesook == portadorok &&
  portadorok == malariaok &&
  malariaok == doacaook;

if (podedoar) {
  console.log("Idade abaixo de 16 ou acima de 69 anos: Não");
  console.log("Pesa menos de 50kg: Não");
  console.log("Portador de Hepatite: Não");
  console.log("Já teve malaria: Não");
  console.log("Fez doação recente: Não\n");
  console.log("[Resultado da triagem]");
  console.log("Pode doar sangue ?", podedoar);
}
