/* Pimentinhas para a virada de ano:
É possível fazer o mesmo programa sem a inversão do laço?
E se ao invés de números, a contagem fosse exibida em texto?
*/

var contagem = [];
contagem[0] = "Dez";
contagem[1] = "Nove";
contagem[2] = "Oito";
contagem[3] = "Sete";
contagem[4] = "Seis";
contagem[5] = "Cinco";
contagem[6] = "Quatro";
contagem[7] = "Três";
contagem[8] = "Dois";
contagem[9] = "Um";

for (var i = 0; i < contagem.length; i++) {
  console.log(`Contagem regreciva: ${contagem[i]}`);
  if (i == 9) {
    console.log("Feliz ano novo !!!");
  }
}
