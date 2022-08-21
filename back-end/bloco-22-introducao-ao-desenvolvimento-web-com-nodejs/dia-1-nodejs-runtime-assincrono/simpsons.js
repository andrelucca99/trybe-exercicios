const fs = require('fs').promises;

async function addPersonagem() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsonsFamily = JSON.parse(fileContent);
    
    simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

    await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsFamily));
}

async function main() {
    addPersonagem();
}

main();