function verifica(palindromo) {
  for (index in palindromo) {
    if (palindromo[index] !== palindromo[(palindromo.length - 1) - index]) {
      return false
    }
  }
    return true
}

console.log(verifica('arara'));