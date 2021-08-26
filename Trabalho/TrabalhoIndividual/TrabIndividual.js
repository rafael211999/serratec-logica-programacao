// Limpar a casa. Crie um programa que mostre se o cômodo da casa que voce escolher está limpo ou se ele tem que ser limpo. Você deve ter a entrada com os cômodos da casa, e criar um sistema que indique se o comodo esta limpo ou não, exibindo uma mensagem no console, para cada cômodo que for da sua escolha.

var prompt = require("prompt-sync")();
var limpou = prompt("Você ja limpou algum cômodo, sim ou nao ?. ");
var estalimpo = limpou != "nao";


if (estalimpo) {
  var comodo = prompt("Qual cômodo você limpou ?.");
  switch (comodo) {
    case "sala":
      console.log("A sala esta limpa, parabéns !!. ");
      break;

    case "quarto":
      console.log("O quarto está limpo, parabéns !!. ");
      break;

    case "cozinha":
      console.log("A cozinha está suja, pode lavar a louça. ");
      break;
    case "banheiro":
      console.log("O banheiro está limpo, parabéns !!");
      break;
    default:
      console.log(
        "Se ja terminou de limpar a casa, pode descansar, se não acabou, pode continuar limpando, uma hora você acaba... haha"
      );
      break;
  }
} else {
  console.log("A casa está uma bagunça, começe a limpar.");
}
