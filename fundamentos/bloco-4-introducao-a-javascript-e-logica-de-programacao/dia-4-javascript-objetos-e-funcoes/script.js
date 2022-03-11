function indiceMenor(numero) {
  let indiceDoMenor = 0;

  for (let indice in numero) {
    if (numero[indiceDoMenor] > numero[indice]) {
      indiceDoMenor = indice;
    }
  }
  return indiceDoMenor;
}
console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]));