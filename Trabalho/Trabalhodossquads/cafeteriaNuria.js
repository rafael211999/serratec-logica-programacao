/* Uma cafeteria está implantando um novo software para que os seus clientes possam realizar os pedidos. Eles necessitam de um programa em que o cliente escolha o tipo de café (café preto, café duplo, café com leite ou cappuccino), informe a quantidade de unidades desejada e o valor total do pedido */

var prompt = require("prompt-sync")();
var ler = prompt(
  "Qual o tipo de café o senhor(a) deseja ?:café preto, café duplo, café com leite ou cappuccino ?   "
);
var ler2 = prompt("Digite a quantidade desejada: ");

var tipocafe = ler;
var quantidade = ler2;

var cafpreto = 3;
var cafduplo = 5;
var cafleite = 4;
var cappuccino = 7;
var calvalor = 0;

switch (tipocafe) {
  case "cafe preto":
    calvalor = quantidade * cafpreto;
    console.log(
      `Café preto = ${quantidade}. Valor total da compra = R$${calvalor},00; `
    );
    console.log("Tenha um Bom dia !!");
    break;
  case "cafe duplo":
    calvalor = quantidade * cafduplo;
    console.log(
      `Café duplo = ${quantidade}. Valor total da compra = R$${calvalor},00; `
    );
    console.log("Tenha um Bom dia !!");
    break;
  case "cafe com leite":
    calvalor = quantidade * cafleite;
    console.log(
      `Café com leite = ${quantidade}. Valor total da compra = R$${calvalor},00; `
    );
    console.log("Tenha um Bom dia !!");
    break;
  case "cappuccino":
    calvalor = quantidade * cappuccino;
    console.log(
      `Cappuccino = ${quantidade}. Valor total da compra = R$${calvalor},00; `
    );
    console.log("Tenha um Bom dia !!");
    break;
  default:
    console.log("Você ainda não fez o seu pedido de forma corréta.");
}
