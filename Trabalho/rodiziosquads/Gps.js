/* # Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Daniel Cesar
● Squad de Origem (Requisito): GPS - Group of Programming Students (Squad 1)
● Arquivo: signo.js
● Data: 22/08/2021
## Descrição:
Solicite o nome e a data de nascimento do usuário. Com essas informações, será gerado o
signo e uma descrição genérica e aleatória de sua personalidade. */

var prompt = require("prompt-sync")();

var nome = prompt("Digite seu nome:    ");
var mes = prompt("Digite o número do mês do seu nascimento:   ");
var dia = prompt("Digite o dia do seu nascimento:   ");

if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4))
  console.log(
    nome +
      "você é do signo de Aries, tem a característica individualistas e espontâneos"
  );
if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10))
  console.log(
    nome +
      "você é do signo de Libra, tem a característica equilíbrio e a justiça"
  );
if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5))
  console.log(
    nome + "você é do signo de Touro, tem a característica cuidadoso"
  );
if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11))
  console.log(
    nome + "você é do signo de Escorpião, tem a característica auto-confiança"
  );
if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6))
  console.log(nome + "você é do signo de Gêmeos, tem a característica animado");
if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12))
  console.log(
    nome + "você é do signo de Sagitário, tem a característica inteligente"
  );
if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7))
  console.log(
    nome + "você é do signo de Câncer, tem a característica dedicado"
  );
if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1))
  console.log(
    nome + "você é do signo de Capricórnio, tem a característica persistente"
  );
if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8))
  console.log(nome + "você é do signo de Leão, tem a característica corajoso");
if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2))
  console.log(
    nome + "você é do signo de Aquário, tem a característica idealista"
  );
if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9))
  console.log(
    nome + "você é do signo de Virgem, tem a característica organizado"
  );
if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3))
  console.log(
    nome + "você é do signo de Peixes, tem a característica sonhador"
  );