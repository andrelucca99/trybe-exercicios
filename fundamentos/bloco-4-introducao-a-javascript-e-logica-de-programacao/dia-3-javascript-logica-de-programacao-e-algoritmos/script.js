let numero = 0;

for (let i = 0; i <= 50; i += 1) {
  let primo = true;
  for (let divisor = 2; divisor < i; divisor += 1) {
    if (i % divisor === 0) {
      primo = false;
    }
  }
  if (primo) {
    numero = i;
  }
}

console.log(numero);