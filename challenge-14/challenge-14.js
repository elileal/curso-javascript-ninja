(function () {

  /*
  reduce(): reduz o array, não modifica o método principal. Logo ele reduz o array a apenas um valor. Caso não haja o segundo parâmetro (0) ele usa o acumulado como o primeiro valor do array e o valor atual será o segundo item. Vai sempre percorrer todos os itens.
  var arr = [1, 2, 3, 4, 5];
  var reduce = arr.reduce(function(acumulado, atual, index, array) {
    return acumulado + atual;
  }, 0);
  1) 0 + 1 = 1
  2) 1 + 2 = 3
  3) 3 + 3 = 6
  4) 6 + 4 = 10
  5) 10 + 5 = 15

  reduceRight(): faz o mesmo que o reduce, mas da direta para a esquerda
  indexOf(): procura se o valor existe no array e retorna o index. Tem um segundo paramentro que é o a partir de qual index ele deve buscar

  lastIndexOf(): começa a busca pelo último index;

  isArray(): verifica se é realmente um array, pois o typeof não funciona sem ser para objetos primitivos.
  */

  /*
  Envolva todo o código desse desafio em uma IIFE.
  */

  /*
  Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
  elemento será um objeto no formato:
  { number: [NUMBER] }
  Os números devem ser de 1 a 10.
  Mostre esse array no console.
  */
  console.log('Number Objects Array:');
  var numberObjects = [];
  for (let i = 1; i <= 10; i++) {
    numberObjects.push({ number: i });
  }
  console.log(numberObjects);


  /*
  Crie um array chamado `justNumbers`, que terá como elementos somente os
  números do array criado acima. Mostre esse novo array no console.
  */
  console.log('\nJust Numbers:');
  var justNumbers = numberObjects.map(function (item) {
    return item.number;
  })
  console.log(justNumbers);


  /*
  Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
  somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
  no console.
  */
  console.log('\nJust module of division by 2 or 3:');
  var justMod2Or3 = justNumbers.filter(function (item) {
    return item % 2 === 0 || item % 3 === 0
  })
  console.log(justMod2Or3);


  /*
  Declare uma variável chamada operation que receba, do array criado acima,
  um valor reduzido pela seguinte operação:
  - Somar 1 ao último valor retornado;
  - Multiplicar o resultado pelo valor atual.
  O cálculo deve começar com zero.
  Mostre o resultado no console.
  */
  console.log('\nOperation:');
  var operation = justMod2Or3.reduce(function (acc, value) {
    return (acc + 1) * value;
  }, 0);
  console.log(operation);


  /*
  Faça o mesmo cálculo passado acima, mas começando do último item para o
  primeiro. O nome da variável deve ser operation2. Mostre o resultado no
  console.
  */
  console.log('\nOperation 2:');
  var operation2 = justMod2Or3.reduceRight(function (acc, value) {
    return (acc + 1) * value;
  }, 0);
  console.log(operation2);

  /*
  Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
  do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
  a "língua do P".
  PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
  infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
  falada, como se você estivesse falando em código xD
  */
  console.log('\nSeu nome na língua do "P":');
  var name = ['E', 'li', 'a', 'be'];

  console.log(name.reduce(function (acc, value) {
    return acc + 'P' + value;
  }, ''));


  /*
  Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
  e atribuirá o seu nome invertido (usando o array criado acima).
  */
  console.log('\nInversed Name:');
  var inversedName = name.reduceRight(function (acc, value) {
    return acc + value;
  })
  console.log(inversedName);


  /*
  Mostre no console o array `numberObjects`.
  */
  console.log('\nNumber objects');
  console.log(numberObjects);


  /*
  Verifique se existem em algum índice de numberObjects um objeto ìgual a
  { number: 2 }. Se houver, mostre no console:
  - "Existe um objeto { number: 2 } em numberObjects!"
  Senão, mostre a frase:
  - "Não existe um objeto { number: 2 } em numberObjects :("
  Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
  o que acontece ;)
  */
  console.log('\nExiste um { number: 2 } em numberObjects?');
  console.log(
    numberObjects.indexOf({ number: 2 }) > -1
      ? 'Existe um objeto { number: 2 } em numberObjects!'
      : 'Não existe um objeto { number: 2 } em numberObjects :('
  );
  // NA CHECAGEM DO INDEXOF ESTOU CRIANDO UM NOVO OBJETO, E COMO ESSE NOVO OBJ TEM UMA REFERÊNCIA DIFERENTE DA DE NUMBEROBJECTS, LOGO NÃO SÃO IGUAIS.
  // A solução é passar por referência:
  var obj = numberObjects[1];
  console.log(
    numberObjects.indexOf(obj) > -1
      ? 'Existe um objeto { number: 2 } em numberObjects!'
      : 'Não existe um objeto { number: 2 } em numberObjects :('
  );


  /*
  Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
  será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
  */
  console.log('\nE buscando a partir do último índice, o { number: 2 } existe?');
  // ?
  console.log(
    numberObjects.lastIndexOf({ number: 2 }, 2) > -1
      ? 'Existe um objeto { number: 2 } em numberObjects!'
      : 'Não existe um objeto { number: 2 } em numberObjects :('
  );

  /*
  Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
  formato de String.
  */
  console.log('\njustMod2Or3 é um array? Se for, a representação dele em String é:');
  Array.isArray(justMod2Or3) ? console.log(justMod2Or3.toString()) : ''

})()
