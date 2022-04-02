const testingScope = escopo => {
    if (escopo === true) {
        let isScope = 'Não devo ser utilizada fora do meu escopo (if)';
        isScope = `${isScope} ótimo, fui utilizada no escopo !`;
        console.log(isScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

testingScope(false);