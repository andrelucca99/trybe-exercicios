//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, letra) =>
     acc + letra.split('').reduce((acumulator, letraAtual) => {
        if (letraAtual === 'a' || letraAtual === 'A'){
          return acumulator + 1;
        }
        return acumulator;
     }, 0), 0);
}

console.log(containsA());