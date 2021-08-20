var prompt = require("prompt-sync")();

console.log("=== Shopping - Sanitários ===");

// Entradas
var cor = prompt("Qual a cor do indicador ? ");

//Processamento
var texto = "";

if (cor == "vermelho") texto = "Completamente ocupado";
else if (cor == "amarelo") texto = "Atenção à capacidade";
else if (cor == "laranja") texto = "Feminino ocupado, masculino livre";
else texto = "Sanitaário liberado";
console.log(texto);

//Para casa: extensão que marca