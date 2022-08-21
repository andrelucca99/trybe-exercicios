const fs = require('fs').promises;

async function filterPersonagem() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    
    const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function main() {
    filterPersonagem();
}

main();