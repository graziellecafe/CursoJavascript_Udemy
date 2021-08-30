// Diferença entre let, var e const: 

//Tipo string
const nome = 'Luiz'; 
const nome1 = 'Otávio';
const nome2 = `Fernando`;
console.log(nome, nome1, nome2);

//Tipo number
const num1 = 10; 
const num2 = 10.50; 
console.log(num1, num2);

// Let e Const
let nomeAluno; 
// const nomeAluno; // ERROR!
nomeAluno = 'Grazielle';
console.log(nomeAluno);

nomeAluno = undefined;  // não aponta para nenhum local na memória; 
console.log(nomeAluno);

nomeAluno = null; 
console.log(nomeAluno);

const aprovado = false; 
console.log(aprovado, typeof(aprovado)); // false, do tipo boolean