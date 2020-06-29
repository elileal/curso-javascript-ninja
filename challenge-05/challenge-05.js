/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarr = ['Eli', true, null, 1, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var myFunction = function (arr) {
  return arr;
};
/*
Criando uma função com atribuição é preciso de um ; no final, pois estamos finalizando a instrução.
Se fosse da forma literal function name(param) {} não é necessário o ; no final
*/

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myarr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var returnIndex = function (arr, i) {
  return arr[i];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrFiveValues = ['value', 1, function myfunc(){}, false, NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnIndex(arrFiveValues, 0));
console.log(returnIndex(arrFiveValues, 1));
console.log(returnIndex(arrFiveValues, 2));
console.log(returnIndex(arrFiveValues, 3));
console.log(returnIndex(arrFiveValues, 4));


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

var book = function (name) {
  var obj = {
    'O Auto da Compadecida': {
      quantidadePaginas: 192,
      autor: 'Ariano Suassuna',
      editora: 'Agir'
    },
    'O Santo e a Porca' : {
      quantidadePaginas: 224,
      autor: 'Ariano Suassuna',
      editora: 'Nova Fronteira'
    },
    'O Sedutor do Sertão': {
      quantidadePaginas: 248,
      autor: 'Ariano Suassuna',
      editora: 'Nova Fronteira'
    }
  };

  return (name) ? obj[name] : obj;
}
// Array em JS são objetos

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
'O livro [NOME_DO_LIVRO] tem [X] páginas!'
*/
var bookName = 'O Sedutor do Sertão'
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
'O autor do livro [NOME_DO_LIVRO] é [AUTOR].'
*/
bookName = 'O Auto da Compadecida'
console.log('O autor do livro ' + bookName + ' é ' + book(bookName).autor);


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
'O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA].'
*/
bookName = 'O Santo e a Porca'
console.log('O livro '+ bookName +' foi publicado pela editora ' + book(bookName).editora + '.');
