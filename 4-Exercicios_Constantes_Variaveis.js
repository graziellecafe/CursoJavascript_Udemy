//  Cálculo do IMC 

const nome = 'Grazielle';
const sobrenome = 'Café';
const idade = 27; 
const peso = 60;
const altura = 1.76; 

// Calculando o IMC 
let imc = peso/(altura*altura);
console.log(`O IMC da ${nome} é: ${imc}`);

// Calculando seu ano de nascimento
const anoAtual = 2021; 
const anoDeNascimento = anoAtual - idade; 
console.log(`${nome} tem ${idade} e nasceu em ${anoDeNascimento}`);

