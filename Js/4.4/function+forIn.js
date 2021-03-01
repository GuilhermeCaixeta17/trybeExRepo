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
//Ex 4 aça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for (const key in info) {
  console.log(info[key]);
}
