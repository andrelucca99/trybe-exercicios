const fs = require('fs').promises;

async function addPersonagem() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    
    const familyIds = [1, 2, 3, 4];
    const simpsonsFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));

    await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsFamily));
}

async function main() {
    addPersonagem();
}

main();