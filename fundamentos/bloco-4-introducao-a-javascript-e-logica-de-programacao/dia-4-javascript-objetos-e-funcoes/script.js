function maiorNome(nomes) {
  let nomeDoMaior = nomes[0];

  for (let index in nomes) {
    if (nomeDoMaior.length < nomes[index].length) {
      nomeDoMaior = nomes[index];
    }
  }
  return nomeDoMaior;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));