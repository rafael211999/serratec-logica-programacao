/* A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela. */

const prompt = require("prompt-sync")()
const paciente = prompt("Qual o nome do paciente ?")
const vacina = prompt("O paciente ja foi vacinado ?")

var infeccao = vacina == "sim";

if(infeccao){
    console.log(`Paciente: ${paciente}`)
    console.log(`Já vacinado: Ok`)
    console.log("[Triagem]")
    console.log(`Sujeito a infecção ? ${infeccao} `)   
}else{
    console.log(`Paciente: ${paciente}`)
    console.log(`Já vacinado: Nâo`)
    console.log("[Triagem]")
    console.log(`Sujeito a infecção ? ${!infeccao} `)  
}