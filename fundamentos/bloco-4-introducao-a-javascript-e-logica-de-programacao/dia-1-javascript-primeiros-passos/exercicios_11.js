let salario = 5189.82;
let inss = '';

if (salario == 1556.94) {
    inss = (salario * 8) / 100;
} else if (salario >= 1556.95 || salario < 2594.92) {
    inss = (salario * 9) / 100;
} else if (salario >= 2594.93 || salario < 5189.82) {
    inss = (salario * 11) / 100;
} else if (salario > 5189.82) {
    inss = salario - 570.88;
}

console.log(inss);