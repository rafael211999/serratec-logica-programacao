/* O “gerador de tabela verdade” solicita ao aluno de programação qual operador lógico quer visualizar (e, ou), e depois imprime na tela a tabela verdade montada em um laço. */

const prompt = require("prompt-sync")();
const pergunta = prompt("QUal operador ligico quer visualizar (e, ou ) ?");

console.log(`P  | Q  |  R `);
var P = undefined;
var Q = undefined;

switch(pergunta){
case "e": 
for (var i = 0; i < 4; i++) {
   P = i % 2;
   if (P == 0) {
      P = true;
      
   } else {
      P = false;
   }
   
   Q = i % 3;
   if (Q == 0) {
      Q = true;
   } else {
      Q = false;
   }

   if(P == true && Q == true){
      resultado = true;
   }else{
      resultado = false;
   }
   console.log(`${P}| ${Q}| ${resultado}`);
}break;
case "ou": 
for (var i = 0; i < 4; i++) {
   P = i % 2;
   if (P == 0) {
      P = true;
   } else {
      P = false;
   }
   
   Q = i % 3;
   if (Q == 0) {
      Q = true;
   } else {
      Q = false;
   }

   if(P == true || Q == true){
      resultado = true;
   }else{
      resultado = false;
   }
   console.log(`${P}| ${Q}| ${resultado}`);
}break;
}

