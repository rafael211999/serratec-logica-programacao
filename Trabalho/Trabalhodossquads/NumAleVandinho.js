/* O programa "Número aleatório" mostra no console 6 números aleatórios entre 1 e 100, um embaixo do outro, em sequência. */

function Numero(min, max) {
  return (resposta = Math.random() * (max - min) + min);
}

for (var i = 0; i < 6; i++) {
  valor = i = +i;
  Numero(0, 100);
  resposta = Math.trunc(resposta);
  console.log("Primeiro Número aleatório:", resposta);
}
