// Relacionais


var aluno = "";
var presente = (aluno != "");

console.log("Aluno esta presente?");
console.log(presente);

//Lógicos

//Boolean
var maria = true;
var carol = true;

// Quero saber se AMBOS os alunos estão presentes
var estaoPresentes = maria && carol;
console.log("Estão presntes ?", estaoPresentes);

//Tabela verdade AND
// P     Q      &&
// true | true | true
// true | false|false
// false| true |false
// false| false|false

// Operador OU === ||

var servidorDragao = true;
var severGuerrilha = true;

var entrar = servidorDragao || serverGuerrilha;

console.log("Estou conectado no discord ?", entrar);

//Tabela do OU === || 

// P    | Q    | ||
// true |true |true
// true |false|true
// false|true |true
// false|false|false

// Tabela Negação !

P    | Not
true | false
false| true



var prompt = require('prompt-sync')();
// Entradas
var A = prompt("Possui habilitação A? Digite s ou n");
var B = prompt("Possui habilitação B? Digite s ou n");
var C = prompt("Possui habilitação C? Digite s ou n");

//Porcessamento 
//Primeiro particularizar, depois, generalizar

var motoca = A == "s" || A == "S" || A == "Sim"
var carro = B == "s" || B == "S" || B == "Sim"
var vuc = C == "s" || C == "S" || C == "Sim"

//&& || lógicos
var resposta = motoca && carro && vuc;

//Saída
console.log("Você é um motorista proficional ?", resposta);