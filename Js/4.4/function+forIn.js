//Objetos e For/In
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
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
function palindromo(word) {
  let result = false;
  let isPalin = ""; 
  for (let index = word.length -1; index  >= 0; index -= 1) {
    isPalin += word[index];
  }
  if (word === isPalin) {
    result = true;
  }
  return result;
}
console.log(palindromo("arara"));