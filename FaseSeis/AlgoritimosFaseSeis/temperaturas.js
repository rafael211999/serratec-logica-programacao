/* Para exibir a tabela de “temperaturas”, o programa irá exibir os graus Celsius entre 0º e 40ºC, além da equivalência com os graus Fahrenheit. */


for(var i = 0; i <= 40; i++){
    var equivalente = i * 1.8 + 32;
    equivalente = equivalente.toFixed(1)
    console.log(`${i}°C == ${equivalente} °F`)
}