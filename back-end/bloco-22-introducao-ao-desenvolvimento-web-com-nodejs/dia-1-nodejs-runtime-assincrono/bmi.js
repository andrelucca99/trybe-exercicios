const readline = require('readline-sync');

const calculaBMI = (weight, height) => {
    console.log(`weight: ${weight}, height: ${height}`);

    const heightMetros = height / 100;
    const heightQuadrado = heightMetros ** 2;

    const bmi = height / heightQuadrado;

    return bmi;
}

const main = () => {
    const weight = readline.questionFloat("What' your weight?");
    const height = readline.questionInt("What' your height?");

    const bmi = calculaBMI(weight, height);

    console.log(`BMI: ${bmi.toFixed(2)}`);

    if (bmi < 18.5) {
        console.log('Status: Underweight (thin)');
        return;
      }
  
      if (bmi >= 18.5 && bmi < 25) {
        console.log('Status: Normal weight');
        return;
      }
  
      if (bmi >= 25 && bmi < 30) {
        console.log('Status: Overweight (overweight)');
        return;
      }
  
      if (bmi >= 30 && bmi < 35) {
        console.log('Status: Grade I obesity');
        return;
      }
  
      if (bmi >= 35 && bmi < 40) {
        console.log('Status: Grade II obesity');
        return;
      }
  
      console.log('Status: Obesity grades III and IV');
}

main();