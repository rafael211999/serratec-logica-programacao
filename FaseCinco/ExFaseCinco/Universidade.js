/*Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.  */

const prompt = require("prompt-sync")()
const dia = prompt("Data atual: ")
const pagamento = prompt("Dia do pagamento: ")
const numboleto = prompt("Código do boleto: ")


var diahj = dia;
var vencimento = 15;

var desconto = pagamento >= 10 && pagamento <= 13;

if(desconto){
    console.log(`Dia hoje: ${diahj}`)
    console.log(`Número do Boleto: ${numboleto}`)
    console.log(`Dia de pagamento: ${pagamento}`)
    console.log(`Desconto na próxima mensalidade ? ${desconto}`)
}else{
    console.log(`Dia hoje: ${diahj}`)
    console.log(`Número do Boleto: ${numboleto}`)
    console.log(`Dia de pagamento: ${pagamento}`)
    console.log(`Desconto na próxima mensalidade ? ${desconto}`)
}