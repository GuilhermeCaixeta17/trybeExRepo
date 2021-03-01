let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Ex 1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);

}

//Ex 2 Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];

}
console.log(soma);

//Ex 3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     soma = soma + numbers[index];

// }
let media = soma / numbers.length;
console.log(media);
//Ex 4 Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media >= 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}
//Ex 5 Utilizando for , descubra qual o maior valor contido no array e imprima-o;
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (maiorNum < numbers[index]) {
        maiorNum = numbers[index];
    }
}
console.log(maiorNum);
//Ex 6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        impar += 1;
    }
}
if (impar === 0) {
    console.log("nenhum valor ímpar encontrado")
} else {
    console.log(impar)
}
//Ex 7 Utilizando for , descubra qual o menor valor contido no array e imprima-o;
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNum = 10000000000000000;
for (let index = 0; index < numbers.length; index += 1) {
    if (menorNum > numbers[index]) {
        menorNum = numbers[index];
    }
}
console.log(menorNum);


