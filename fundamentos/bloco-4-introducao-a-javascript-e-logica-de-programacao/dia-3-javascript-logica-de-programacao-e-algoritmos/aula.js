// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.

/*
let = somaValores = 0;

for (let index = 0; index <= 50; index += 1) {
    somaValores += index;
}

console.log(somaValores);
*/


//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let p1 = 'pedra';
let p2 = 'tesoura';
let pc = 'papel';

if (p1 === 'pedra' && pc === "papel") {
    console.log('A Ties');
} else if (p1 === "pedra" && p2 == "tesoura") {
    console.log("Player 1 won");
} else if (p2 === 'tesoura' && pc === "papel"){
    console.log("Player 2 won")
} else {
    console.log("Player 1 won");
}

