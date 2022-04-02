const longestWord = text => {
    let wordArray = text.split(' ');
    let contLength = 0;
    let resul = '';

    for (const word of wordArray) {
        if (word.length > contLength) {
            contLength = word.length;
            resul = word;
        }
    }

    return resul;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));