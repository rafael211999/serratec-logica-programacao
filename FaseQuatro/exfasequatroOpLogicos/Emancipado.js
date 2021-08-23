/* É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual. */

const prompt = require("prompt-sync")();
const idade = prompt("Qual a sua idade ? ");
const sexo = prompt("Qual o seu sexo: Masculino ou Feminino ?");
var sexo1 = sexo == "Masculino";
var anonasc = 2021 - idade;
var emancipado = (sexo == "Masculino" && idade == 18) || idade == 21;
switch (idade) {
  case "21":
    console.log(
      `Sexo: ${sexo}\nAno de Nascimento: ${anonasc}\nCidadão emancipado: ${emancipado}`
    );
    break;
  case "18": {
    if (sexo1) {
      console.log(
        `Sexo: ${sexo}\nAno de Nascimento: ${anonasc}\nCidadão emancipado: ${emancipado}`
      );
      break;
    } else {
      console.log(`Sexo: ${sexo}\nAno de Nascimento: ${anonasc}\nCidadão emancipado: ${emancipado}`);
      break;
    }
  }
  default:
    console.log("Informações não encontradas.");
}
