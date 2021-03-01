// Operadores logicos  > , < , && , ||

//Ex 1 Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
let a = 2;
let b = 7;
let option = "**";
switch (option) {
    case "+":
        console.log(a + b);

        break;
    case "-":
        console.log(a - b);

        break;
    case "*":
        console.log(a * b);

        break;
    case "/":
        console.log(a / b);

        break;
    case "**":
        console.log(a ** a);
        console.log(b ** b);

        break;

    default:

        console.log("operacao invalida!");

}

//Ex 2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
let num1 = 1;
let num2 = 2;
if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

//Ex 3 Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let num3 = 3;
if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2)
} else {
    console.log(num3);
}

//Ex4 Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let isTrue = 5;
let isFalse = 5;
console.log((isTrue * 2) % 2 == 0);
console.log(isFalse % 2 == 0);

//Ex 5 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
let angulo1 = 60;
let angulo2 = 80;
let angulo3 = 950;
if (angulo1 + angulo2 + angulo3 == 180) {
    console.log(true);
} else {
    console.log(false);
}

//Ex 6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let peao = "peao";
let cavalo = "cavalo";
let torre = "torre";
let bispo = "bispo";
let rainha = "rainha";
let rei = "rei";

let Peao = "peao";
let Cavalo = "cavalo";
let Torre = "torre";
let Bispo = "bispo";
let Rainha = "rainha";
let Rei = "rei";

switch (Rei) {
    case "peao":
        console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.")
        break;
    case "cavalo":
        console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.")
        break;
    case "torre":
        console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.")
        break;
    case "bispo":
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.")
        break;
    case "rainha":
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.")
        break;
    case "rei":
        console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.")
        break;
    default:
        console.log("Erro");

}

//Ex 7 Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
let nota = 30;
if (nota >= 90 && nota < 100) {
    nota = "A";
    console.log(nota);

} else if (nota >= 80 && nota < 90) {
    nota = "B";
    console.log(nota);

} else if (nota >= 70 && nota < 80) {
    nota = "C";
    console.log(nota);

} else if (nota >= 60 && nota < 70) {
    nota = "D";
    console.log(nota);

} else if (nota >= 50 && nota < 60) {
    nota = "C";
    console.log(nota);
} else if (nota < 50 && nota > 0) {
    nota = "F";
    console.log(nota);
} else {
    console.log("Erro");
}
