/*O sistema irá solicitar a digitação da sigla da "UF" de onde você mora. E o programa irá dizer o nome completo do estado. Para as UFs do sudeste, considerar a entrada em maiúsculas ou minúsculas. Alt + Z (Para quebrar linha e continuar tudo na msm linha)*/


//Prompt
const ler = require("prompt-sync")();

//Entradas

const uf = ler("Qual a sigla da UF de onde você mora ? ")

//Processamento
var nomeCompleto = "";
/*
Forma usando if

if (uf == "AM") {
    nomeCompleto = "Amazonas";
}
else
if (uf =="AP") {
    nomeCompleto = "Amapá"
}
*/

switch (uf) {
    case "AM" : nomeCompleto = "Amazonas"; break;
    case "AP" : nomeCompleto = "Amapá"; break;
    case "BA" : nomeCompleto = "Bahia"; break;
    case "rj" :
    case "RJ" : nomeCompleto = "Rio de Janeiro"; break;
    case "sp" : 
    case "SP" : nomeCompleto = "São Paulo"; break;
    case "mg" :
    case "MG" : nomeCompleto = "Minas Gerais, ó minas gerais"; break;
    case "es" :
    case "ES" : nomeCompleto = "Espirito Santo, amém"; break;
    default: nomeCompleto = "Outro estado"
}

//Saiída
console.log("Nome completo do estado: " + nomeCompleto)