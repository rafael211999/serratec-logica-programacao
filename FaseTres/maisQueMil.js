/* O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros múltiplos de 4 acima de mil, subtraindo dos 4 primeiros números primos a partir de zero. */

var numero = "";
for (var i = 1000; i < 1020; numero = i += 4) {
  console.log(numero);
}

var somar = 1004 + 1008 + 1012 + 1016;
console.log("O resultado da soma desses multiplos é ", somar);
