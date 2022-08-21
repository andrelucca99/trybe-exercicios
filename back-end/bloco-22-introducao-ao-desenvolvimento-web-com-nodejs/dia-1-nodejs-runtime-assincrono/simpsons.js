const fs = require('fs').promises;

async function addPersonagem() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    
    const filterPersonagem = simpsons.filter((simpson) => simpson.id !== '8');

    const addMaggie = filterPersonagem.concat([{ id: '15', name: 'Maggie Simpson' }]);

    return fs.writeFile('./simpsons.json', JSON.stringify(addMaggie));
}

async function main() {
    addPersonagem();
}

main();