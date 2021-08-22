/* O laboratório fabricante de álcool em gel precisa saber se o produto está atingindo a concentração ideal para desinfecção, que é de 70%. Para a ajudar o laboratório, crie um programa onde será preenchida a capacidade da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel que precisam ser misturados para preenchimento do vasilhame. */
const prompt = require("prompt-sync")();

do {
  var ler = prompt(
    "Qual a quantidade de álcool que está dentro do vasilhame ?"
  );
  var alcool = ler != 70;
  if (alcool) {
    console.log(
      `A mistura esta com ${ler} ml de alcool, adicione ou subtraia, até chegar a 70 ml`
    );
  } else {
    console.log(
      `Parabéns, você está com ${ler} ml de alcool na sua mistura, esse é o ideal.`
    );
    break;
  }
} while (ler);

do {
  var ler = prompt("Qual a quantidade de gel que está dentro do vasilhame ?");
  var gel = ler != 30;
  if (gel) {
    console.log(
      `A mistura esta com ${ler} ml de gel, adicione ou subtraia, até chegar a 30 ml`
    );
  } else {
    console.log(
      `Parabéns, você está com ${ler} ml de gel na sua mistura, esse é o ideal.`
    );
    break;
  }
} while (ler);
