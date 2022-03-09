let word = 'desenvolva';
let revert = '';

for (let i = 0; i < word.length; i += 1) {
    revert += word[word.length - 1 - i];
}

console.log(revert);