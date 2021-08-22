/* Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra. */

var valor1 = 345.0;
var valor2 = 1545.0;
var total = valor1 + valor2;
var juros = (total * 1.5) / 100;

var parcela1 = total / 3;
var parcela2 = total / 5;
var parcela3 = total + juros;
parcela3 = parcela3 / 10;
parcela3 = Math.trunc(parcela3);

console.log(
  `Em quantas vezes o senhor(a) deseja parcelar ? \n. Pode ser em 3 vezes sem juros com o valor de: R$${parcela1}. \n Pode ser em 5 vezes sem juros com o valor de: R$${parcela2}. \n Pode ser em 10 vezes com 1.5% de juros, no valor de: R$${parcela3}.`
);
