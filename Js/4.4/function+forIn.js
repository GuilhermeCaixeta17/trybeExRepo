//Objetos e For/In
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
}
//Ex 1 Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
console.log("boas-vindas " + info['personagem'] + "!");
console.log("boas-vindas " + info.personagem + "!");
//Ex 2 Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
info.recorrente = "Sim";
console.log(info);
//Ex 3 Faça um for/in que mostre todas as chaves do objeto.
for (const key in info) {
  console.log(key);
}
//Ex 4 Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for (const key in info) {
  console.log(info[key]);
}
//Ex 5 Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Funções
//Ex 1 Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function palindromo(word) {
  let result = false;
  let isPalin = "";
  for (let index = word.length - 1; index >= 0; index -= 1) {
    isPalin += word[index];
  }
  if (word === isPalin) {
    result = true;
  }
  return result;
}
console.log(palindromo("arara"));
//Ex 2 Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function higherNumberIndex(numbers) {
  let result = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if ( result < numbers[index]) {
      result = index;
    }
  }
  return result;
}
console.log(higherNumberIndex([2, 3, 6, 7, 10, 1]));
