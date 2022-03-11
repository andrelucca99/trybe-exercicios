function indiceMaior(numero) {
  let indicedoMaior = 0;

  for (let indice in numero) {
    if (numero[indicedoMaior] < numero[indice]) {
      indicedoMaior = indice;
    }
  }
  return indicedoMaior;
}
console.log(indiceMaior([2, 3, 6, 7, 10, 1]));