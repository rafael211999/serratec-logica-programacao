// Exercício digestivo

/* O shopping decidiu colocar na entrada dos sanitaríos um indicador luminoso de capacidade.
antes de entrar, a pessoa deve responder se o indicador está verde ou vermelho.
caso a resposta seja vermelho, a pessoa deve aguardar antes de entrar.

10 min */

var prompt = require("prompt-sync")();

var cor = prompt("A luz está: verde ou vermelha ?");

var luz = (cor != "verde");

if (luz) {
   usarBanheiro = "Não pode utilizar o banheiro."
}else{
    usarBanheiro = "Pode utilizar o banheiro."
}
console.log(usarBanheiro)