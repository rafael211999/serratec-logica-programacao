/* No sistema “Todas as tabuadas”, o aluno de matemática não precisa escolher o número: As tabuadas entre 2 e 10 serão impressas de uma vez. */
var numero = 0;
function tabuada(){
    for(var j = 0; j <= 10; j++){
        resultado = i * j
        console.log(`${i} x ${j} = ${resultado}`);
       
    }
}

for(var i = 1;i <= 10 ; i++){
    console.log("\n");
    tabuada(i);
    if(i == 10){
    }
}