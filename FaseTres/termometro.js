// O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.
const prompt = require("prompt-sync")();

var graus = prompt("Quantos graus está hoje ? ");
var trasnformar = graus * 1.18 + 32;
console.log(
  `Essa temperatura é o equivalente a ${trasnformar} na escala Fahrenheit`
);
