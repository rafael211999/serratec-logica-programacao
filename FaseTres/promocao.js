/*É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras. Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou?
 */

var valor = 1890;
var cupom = 1890 / 190;
cupom = Math.round(cupom);

console.log(`Alice ganhou ${cupom} em compras.`);
