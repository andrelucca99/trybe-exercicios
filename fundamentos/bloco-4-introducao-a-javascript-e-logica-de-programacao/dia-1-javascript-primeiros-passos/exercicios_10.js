const custo = 50;
const valor = 100;
const porcentagem = 20;

let soma = valor * 1000;

if (custo < 0 || valor < 0) {
    console.log('Valor invalido')
} else {
    let custoTotal = custo + porcentagem;
    let lucro = valor - custoTotal;
    console.log(lucro);
}




