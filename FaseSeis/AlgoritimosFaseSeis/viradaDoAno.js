/* Na “virada de ano novo”, um mostrador gigante no centro da cidade vai fazer a contagem junto com a galera. A regressiva de 10 segundos termina com o “Feliz ano novo!”. */

for(var i = 10; i > 0; i-- ){
    console.log(`Contagem regreciva: ${i}`)
    if(i == 1){
        console.log("Feliz ano novo !!!")
    }
}