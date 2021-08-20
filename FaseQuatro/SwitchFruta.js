const fruta = '🍌';

switch (fruta) {
  case '🍍':
    console.log('Faça um chá com a casca.');
    break;
  case '🍉':
  case '🍊':
    console.log('Melancia e laranja são frutas do verão.');
    break;
  default:
    console.log('Sem informações sobre a fruta.');
}

//Anotações: No switch, ele avalia a expressão e compara os casos, alem de permitir operar outros tipos de dados. O Break serve para parar quando terminar o caso selecionado.

var numero = 6;
var resposta = "";
switch(umero) {
  case 1: resposta = "um"; break;  
  case 2: resposta = "dois"; break;
  case 3: resposta = "tres"; break;
  case 4:{
    resposta = resposta + "quatro";
    console.log("multiplo de dois")
  } break;
  case 5: resposta = "cinco"; break;
  case 6: resposta = "seis"; break;
  case 7: resposta = "sete"; break;
}

//Anotações: 