// // Variável é um nome simbólico para um valor 
// // As variáveis são declaradas com a palavra-chave var 

// var x; 

// // Valores podem ser atribuitos às variáveis com o sinal = 

// x = 0; 
// console.log(x);

// x = 1; // Números
// console.log(x);

// x = 0.01 // Um tipo number para inteiros e reais 
// console.log(x);

// x = 'hello world'; //string
// console.log(x);

// x = true;  // valores booleanos 
// console.log(x);

// x = false; // outro valor booleano
// console.log(x);

// x = null; // null é um valor especial que significa "nenhum valor"
// console.log(x);

// x = undefined; // undefined é como null
// console.log(x);

// Variáveis: algo que é variado, que pode ser alterado 
let nome = 'João';
var nome2 = 'Fernanda'; // var é um pouco mais antigo

console.log('O nome dele é ',nome);
console.log('Em 2000', nome, 'conheceu Maria.');


// Criando a variavel mas nao atribuindo nenhum valor 
let name1; 
name1 = 'Luis';
console.log(name1);

name1 = 'João'; // Por ser let, consigo atribuir posteriormente outro valor 
console.log(name1);


const nomeConst = 'Grazielle';
console.log(nomeConst);

nomeConst = 'Amanda'; // ERROR! Assignment to constan variable
console.log(nomeConst);

// const firstDeclaration; //ERROR! Missing initializer in const declaration
