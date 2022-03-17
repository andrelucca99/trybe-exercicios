const peca = 'TORRE';

if (peca === 'TORRE') {
    console.log(peca.toUpperCase() + ': movimentos são: vertical ou horizontal');
} else if (peca === 'torre') {
    console.log(peca.toLowerCase() + ': movimentos são: vertical ou horizontal');
} else {
    console.log('erro');
}