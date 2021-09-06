# CursoJavascript_Udemy
Exercícios do curso de Javascript referente ao curso da Udemy 

Github do curso: https://github.com/luizomf/curso-js

# Aula 3 - Variáveis 
```
const <nome_da_variavel>: '';
```

Definição: const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =). Depois de criá-la não podemos: 

  ```
  const nome = 'luiz';  
  nome = 'joão';
  ```

  Variáveis são como um apelido para um valor, uma espécie para mencionar algum valor salvo na memória. 

  Já os valores são realmente os dados que ficam salvos na memória e sustentam determinado tipo. 

  * Valores imutáveis: number, string, boolean, undefined, null, symbol e bigint (os primitivos são valores imutáveis).

  * Valores mutáveis: geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Ex.: array, objetos.

  Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar uma constante).

  Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

  Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

  Exemplo: 
  
  ```
  const array = [1, 2, 3, 4, 5];
  array.push(6);
  array[0] = 1024;
  console.log(array);
````


# Aula 7 -- Alert e prompt 
Janela Window: objeto que contém como por exemplo o alert, document, body, etc. 
* window.alert: mensagem de alerta na tela. O retorno do método é 'undefined', ou seja, não aponta para nenhum local na memória. 
* window.document
* window.prompt: Mensagem que aguarda um valor (string) como resposta do usuário 
* window.confirm: Mensagem de confirmação ao usuário. 'Ok' retorna um valor true e 'Não' um valor false. 

Método: quando uma função está dentro de um objeto

# Aula 8 -- Strings
* String.indexOf: retorna a posição da primeira ocorrência na string
* String.charAt: Returns the character at the specified index.
* String.length: Returns the length of a string object
* String.split: Split a string into substrings usint the specified separator and return them as an array.


# Aula 9 -- Arrays
Definição: Semelhante a uma lista. Strings são indexadas pelo seu valor. 

Para uma constante, temos: 
```
const nome = 'Luiz Otávio';
              123456789...
```

Os arrays são indexados por elemento 
```
const nomes = ['Luiz', 'Amanda', 'Fernanda'];
                 0         1          2
```
