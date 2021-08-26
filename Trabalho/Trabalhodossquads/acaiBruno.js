/* açai.js
escolher o tamanho do copo do açaí (300 ml,400ml e 700ml).
escolher um dos complementos (banana, granola e leite em pó).
gerar o preço do pedido.
 */

var prompt = require("prompt-sync")();
var ler = prompt("Qual tamanho você deseja: 300ml , 400ml, 700ml: ");
var ler1 = prompt("Você deseja colocar complemento: s ou n ");
var ler0 = prompt(
  "Escolha um dos complementos: banana, granola,  leite em pó ? "
);

var tamanho = ler;
var complementos = ler1;

var ml300 = 3.0;
var ml400 = 4.0;
var ml700 = 7.0;

var valorComplemento = 1.0;

var escolha = tamanho == 300 && complementos == "s";
var escolha1 = tamanho == 400 && complementos == "s";
var escolha2 = tamanho == 700 && complementos == "s";

if (escolha) {
  resultado = ml300 + valorComplemento;
  console.log("O valor do seu açai ficou em: R$" + resultado + ",00");
} else if (escolha1) {
  resultado = ml400 + valorComplemento;
  console.log("O valor do seu açai ficou em: R$" + resultado + ",00");
} else if (escolha2) {
  resultado = ml700 + valorComplemento;
  console.log("O valor do seu açai ficou em: R$" + resultado + ",00");
}
