let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

for (let i = 0; i < numbers.length; i += 1) {
    let numero = numbers[i];

    total = total + numero;
}

let media = total / numbers.length;

console.log(media);