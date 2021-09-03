/* O “cara ou coroa estatístico” vai jogar a moeda mil vezes, e depois demonstrar percentualmente as aparições de caras ou coroas.
Pesquise sobre a função de números aleatórios, para sortear um número e usá-lo como sendo a resposta da moeda. */

var cara = 0;
var coroa = 0;



for (var i = 1; i <= 1000; i++){
    var moeda = Math.floor(Math.random() * 2);
  
    if(moeda == 0){
        cara++
    }else{
        coroa++
    }
}

cara = cara * 100 / 1000;
coroa = coroa * 100 / 1000; 

console.log(`A porcentagem de Caras foi de: ${cara}%`);
console.log(`A porcentagem de Coroas foi de: ${coroa}%`);
