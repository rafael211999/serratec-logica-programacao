/* Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente; ig: igual 
Nesse exercício você deverá manter as variáveis e substituir apenas os operadores. Pode ser necessário o uso de parênteses.
x - y M a
x - y * a M c mod y
y <> c
x * y <> c
c mod y mi y mod c
a m b
z / a + x * y - 5 MI b
c * z + 2 ig a * x + y
c ig z + b
y * 2 <> 7 - b
 */

//a
var a = 6.0 - 2 > 6.0;
var resultado = a;
console.log(resultado);

var b = 6.0 - 2 * 6.0 > 12 % 12;
resultado = b;
console.log(resultado);

var c = 2 != 12;
resultado = c;
console.log(resultado);

var d = 6.0 * 2 != 12;
resultado = d;
console.log(resultado);

var e = 12 % 2 <= 2 - 5 % 12;
resultado = e;
console.log(resultado);

var f = 6.0 < 8;
resultado = f;
console.log(resultado);

var g = 4.000 / 8 + 6.0 * 2 - 5 >= 7.5;
resultado = g;
console.log(resultado);

var h = 12 * 4.000 + 2 == 8 * 6.0 + 2;
resultado = h;
console.log(resultado);

var i = 12 == 4.000 + 7.5;
resultado = i;
console.log(resultado);

var j = 2 * 2 != 7 - 7.5;
resultado = j;
console.log(resultado);