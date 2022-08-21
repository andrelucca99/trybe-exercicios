const weight = 57;
const height = 170;

const calculaBMI = (weight, height) => {
    console.log(`weight: ${weight}, height: ${height}`);

    const heightMetros = height / 100;
    const heightQuadrado = heightMetros ** 2;

    const bmi = height / heightQuadrado;

    return bmi;
}

const main = () => {
    const bmi = calculaBMI(weight, height);

    console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();