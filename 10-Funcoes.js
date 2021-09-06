// Aprendendo sobre declaração de funções
function saudacao(nome) {
    return `Bom dia, ${nome}`;
}

const saudacaoNome = saudacao('Grazielle');
console.log(saudacaoNome);


// Função que soma dois valores 
function soma(x,y) {
    const resultado = x + y; 
    return resultado;
}

let number1 = 2; 
let number2 = 10; 
const resultadoSoma = soma(number1, number2);
console.log(`O resultado da soma entre ${number1} e ${number2} é igual a: ${resultadoSoma}`);

// Uma constante recebendo uma função 
const raiz = function(n) {
    return n**0.5;
}

console.log(raiz(9));

// Arrow function 
const somaArrowFunction = (x,y) => {
    resultado = x + y;
    console.log(resultado);
}

somaArrowFunction(2,10);
