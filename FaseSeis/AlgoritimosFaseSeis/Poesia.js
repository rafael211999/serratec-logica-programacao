/* No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos. */


var prompt = require("prompt-sync")();
var ler = prompt("Gostaria de apreciar uma poesia ? ");
var lerpoesia = "sim";


var poesia = "A poesia é, de fato, o fruto. de um silêncio que sou eu, sois vós, por isso tenho que baixar a voz. porque, se falo alto, não me escuto. A poesia é, na verdade, uma. fala ao revés da fala, como um silêncio que o poeta exuma. do pó, a voz que jaz embaixo. do falar e no falar se cala."

do{
   
    console.log(poesia);
    var ler = prompt("Gostou da poesia ? Quer ler ela outra vez ? ");
    var lerpoesia = ler;


}while(lerpoesia != "nao");

