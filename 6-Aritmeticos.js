// Adição e Concatenação: 
// Exemplo: 

const number1 = 10; 
const number2 = 5; 
const soma = number1 + number2; 
console.log(`A soma entre NÚMEROS 10 e 5 é: ${soma}`); 

const number3 = 8; 
const number4 = '4';
const concatenacao = number3 + number4; 
console.log(`A concatenação entre 8 e 4 é: ${concatenacao}`);

// Potenciação: **
const potenciacao = 2**3; 
console.log(`Potenciação: ${potenciacao}`);

// Resto da divisão: % 
const number5 = 11; 
const number6 = 2; 
const restoDivisao = number5%number6; 
console.log(restoDivisao);

// Incremento 
let contador = 1; 
contador++; 
console.log(contador);

// Atribuição --- Soma
let contador2 = 0; 
contador2 = contador2 + 2; 
console.log(contador2);

let contador50 = 0; 
contador50 += 50; 
console.log(contador50); // 50 
contador50 += 50;
console.log(contador50); // 100

// Atribuição --- Potenciação
let contadorPotenciacao = 2; 
contadorPotenciacao *= 2;
console.log(contadorPotenciacao);

//NaN -- Not a number
const numero1 = 10; 
const numero2 = 'Grazi'; 
console.log(numero1 * numero2); //NaN -- ter cuidado com os tipos de dados 

// ParseInt: converter para numero 
const numeroConv1 = 10; 
const numeroConv2 = parseInt('5');
console.log(numeroConv1*numeroConv2);
