let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let divisao = 0;

for (let i = 0; i < numeros.length; i += 1) {
    
    let divisor = numeros[i];

    divisao = divisor / 2;

    
    console.log(divisao);
}