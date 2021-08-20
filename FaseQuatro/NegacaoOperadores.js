const prompt = require("prompt-sync")();

const limite_clientes = 8;

var qtde = prompt("Quantas pessoas eu tenho na loja agora ? ");

//Para negar uma expressão, basta colocar !.
var bloquear = qtde >= limite_clientes;
console.log("Impedir a entrda ? ", bloquear);

//Negações

// false negado true
// true negado false
// == negado !=
// < negado >
var permitir = qtde < limite_clientes;
var texo = "Loja está cheia";

//Valor true
if (permitir) 
texto = "Pode permitir a entrada do cliente que está na fila";

console.log("console:", texto);
