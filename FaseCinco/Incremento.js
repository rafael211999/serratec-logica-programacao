//Incremento

var numero = 0;

numero = 1;
console.log(numero)
// incremento
numero = numero + 1;
console.log(numero)
numero = numero + 1;
console.log(numero)
// Contagem, contadora
numero++;
console.log(numero);

numero = numero + 3;
console.log(numero)

//Decremento
numero--;
console.log(numero)

var resposta = numero++;
console.log("Ult numero", numero);
console.log("resposta", resposta);

// ++antes == incrementa primeiro, retorna depois;
// depois++ == retorna primeiro, incrementa depois;

//Soma abreviação

var num = 0;

//isso
num =num + 3;
// é equivalente a isso
num += 3;

var texto = "Olá";
texto += "Zépa";

//Operador colocado na atribuição
texto = texto + "Zépa";

num = num - 5;
//significa "ele mesmo"
num -= 5;
num++;
