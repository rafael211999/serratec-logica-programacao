/* O programa “ao quadrado” imprime os quadrados dos números de um a nove, separando cada expressão em uma linha. */

numeroa = 0;

for(var i = 0; i <= 9; i++){
    numero = Math.pow(i, 2);
    console.log(`${i} ^ 2 = ${numero}`);
}