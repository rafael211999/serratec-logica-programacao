/* No programa “Conto nos dedos”, a criança diz até qual número quer contar, e os números aparecem na tela em sequência. Ela vai experimentar vários números, até que digite um zero para parar de contar. */
var prompt = require("prompt-sync")();
var resposta = prompt("Até qual numero você deseja contar ?")

do{

    for(var i = 0; i <= resposta; i++){
        console.log(i);
    }
    resposta = prompt("Qual numero você quer experimentar agora ?");
}while(resposta != 0);

console.log("Obrigado por contar com a gt hahaha")