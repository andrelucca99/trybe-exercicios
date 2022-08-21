const readline = require('readline-sync');

const calculaBMI = (weight, height) => {
    console.log(`weight: ${weight}, height: ${height}`);

    const heightMetros = height / 100;
    const heightQuadrado = heightMetros ** 2;

    const bmi = height / heightQuadrado;

    return bmi;
}

const main = () => {
    const weight = readline.questionInt("What' your weight?");
    const height = readline.questionInt("What' your height?");

    const bmi = calculaBMI(weight, height);

    console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();