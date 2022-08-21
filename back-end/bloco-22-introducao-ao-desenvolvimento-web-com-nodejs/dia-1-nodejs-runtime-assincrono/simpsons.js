const fs = require('fs').promises;

async function getPersonagem(id) {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    
    const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

    if(!chosenSimpson) {
        throw new Error('id não encontrado');
    }

    return chosenSimpson;
}

async function main() {
    const simpson = await getPersonagem(2);
    console.log(simpson);
}

main();