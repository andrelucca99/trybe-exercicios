let nota = -1;

if (nota >= 90) {
    console.log('A');
} else if (nota >= 80) {
    console.log('B');
} else if (nota >= 70) {
    console.log('C');
} else if (nota >= 60) {
    console.log('D');
} else if (nota >= 50) {
    console.log('E');
} else if (nota < 50 && nota >= 0) {
    console.log('F');
} else {
    console.log('erro a nota passada deve está entre 0 e 100');
}