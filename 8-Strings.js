//               0123456789..   
let umaString = 'Um texto qualquer';
console.log(umaString[2]); // retorna o espaço 
console.log(umaString[3]); // Retorna a letra 't';
console.log(umaString[7]); // Retorna a letra 'o';

// Função charAt: retorna o elemento da posição desejada
console.log(`Utilizando a função charAt na posição [3]: ${umaString.charAt(3)}`);


/* Formas de concatenação */ 
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);

// Em qual índice começa a letra ou palavra desejada
console.log(umaString.indexOf('texto'));
console.log(umaString.length);
console.log(umaString.split(' '));