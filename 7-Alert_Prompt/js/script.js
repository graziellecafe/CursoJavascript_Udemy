// window.alert('Testando a Janela Window (objeto) chamando o alert');


// // window.confirm: Aparece uma janela de confirmação ao usuário
// // Retorna false para Cancelar 
// // Retorna true para OK 
// window.confirm('Deseja realmente apagar os seus dados?'); 


// // Window.prompt: onde peço para o usuário digitar algo
// window.prompt('Digite o seu nome: ');
// // retorna a string

// const confirma = confirm('Realmente deseja apagar?');
// console.log(confirma);


// ----------- Exercício  ----------- /
let number1 = prompt('Digite o valor do PRIMEIRO número:');
let number2 = prompt('Digite o valor do SEGUNDO número:');
console.log(`Tipo da variável number1: ${typeof number1} \n Tipo da variável number2: ${typeof number2}`);
/* É necessário converter o valor recebido para number pois o que é retornado 
pelo prompt é uma string
*/
let resultado = parseInt(number1) + parseInt(number2);
console.log(resultado);
