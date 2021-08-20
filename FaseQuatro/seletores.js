{
 const prompt = require('prompt-sync')();

 const limite_clientes = 8;
 console.log("TEm uma pessoa na porta da loja querendo entrar. ");
 var qtde = 8; 

 
 var permitir = qtde < limite_clientes;
 var texto = "Loja está cheia";

 //valor true 
 // A instrução a se verdadeiro executa; se é falso salta próxima linha.
 if (permitir)
 texto = "Pode permitir a entrada do cliente que está na fila";

 if (true)
 var segundacondicao = ";"

 console.log("console:", texto);
}