let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 1];

let numeroMenor = numbers.length;

for (let i = 0; i < numbers.length; i += 1) {

    let numero = numbers[i];

    if (numero < numeroMenor) {
        numeroMenor = numero;
    }
} 

console.log(numeroMenor);