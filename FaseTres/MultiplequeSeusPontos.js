/*O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor.  */

const prompt = require("prompt-sync")();
const ler = prompt("Digite seus cupons: ");
var multipontos = ler * 2;
console.log(`Seus cupons agora valem ${multipontos} pontos!.`)