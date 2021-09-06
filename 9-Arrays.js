// Lista de nomes 
const nomes = ['Luiz', 'Maria', 'João'];
console.log(`Os nomes da lista são: ${nomes}`);
console.log(`O primeiro elemento da lista é: ${nomes[0]}`);

// Editando o primeiro índice do array
nomes[0] = 'Grazielle';

// Adicionando mais um nome na lista
nomes[3] = 'Luiza';

console.log(`A lista de nomes atualizada é: ${nomes}`);

// Saber o tamanho do array
console.log(`A lista possui ${nomes.length} nomes.`);

// Adicionando mais um elemento na lista utilizando push 
nomes.push('Ramon'); 
nomes.push('Kátia');
nomes.push('José');

console.log(`Lista atualizada: ${nomes}`);

// Adiciona um elemento no início da lista
console.log(`${nomes.unshift('Jade')}`);
console.log(`${nomes}`);

// Remove o último elemento da lista 
const removeUltimo = nomes.pop();
console.log(`${nomes}`);

// Remove o primeiro elemento da lista 
const removePrimeiro = nomes.shift();
console.log(`${nomes}`);

console.log(typeof nomes);
console.log(nomes instanceof Array);