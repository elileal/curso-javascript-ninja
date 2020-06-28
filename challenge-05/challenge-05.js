/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarr = ['Eli', true, null, 1, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var myfunction = function (arr) {
  return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myfunction(myarr)[1]);

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
var arrFiveValues = ['value', 1, null, false, NaN];

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
    oAutoDaCompadecida: {
      quantidadePaginas: 192,
      autor: 'Ariano Suassuna',
      editora: 'Agir'
    },
    oSantoEAPorca : {
      quantidadePaginas: 224,
      autor: 'Ariano Suassuna',
      editora: 'Nova Fronteira'
    },
    oSedutorDoSertão: {
      quantidadePaginas: 248,
      autor: 'Ariano Suassuna',
      editora: 'Nova Fronteira'
    }
  }

  return (name) ? obj[name] : obj;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro O Sedutor do Sertão tem " + book('oSedutorDoSertão').quantidadePaginas + " páginas!");


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro O Auto da Compadecida é " + book('oAutoDaCompadecida').autor);


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro O Santo e a Porca foi publicado pela editora " + book('oSantoEAPorca').editora + ".");
