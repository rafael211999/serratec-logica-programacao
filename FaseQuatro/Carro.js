var prompt = require("prompt-sync")();
//Requisito:
//Criar um progra que indentifique se o carro está ligado.

//Entrada
console.log('Responda algumas perguntas com "sim" ou "não": ');
var movimento = prompt("O veículo está em movimento ?");
var barulho = prompt("Está ouvindo o barulho do motor ? ");
var luzes = prompt("As luzes do painel, ou farol, estão acesas ?");

//Processamento
var ligado = movimento == "sim" || barulho == "sim" || luzes == "sim";

//Saída
console.log("Concluímos que: Seu carro está ligado ?", ligado);

// Textos vem entre "" para poder diferenciar de identificadores
var A = "A";
var B = B;