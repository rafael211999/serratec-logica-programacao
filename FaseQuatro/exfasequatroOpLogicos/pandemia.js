/* Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º. */
const prompt = require("prompt-sync")();
const ler2 = prompt("Usa mascara (S ou N): ")

var mascara = ler2;
var temp = Math.sign(ler)
var temperatura = temp < 37.5;
var liberado = mascara == "S" && temperatura <= 37.5;



if(mascara == "S"){
    var ler = prompt("Qual a sua temperatura: ")
    if(temperatura <= 37.5){
        console.log("Autorizar a entrada ?", liberado );
    }else{
        console.log("Não pode entrar pois você está com febre.");
    }
}else{
    console.log(`Você deveria estar usando mascara.`);
}