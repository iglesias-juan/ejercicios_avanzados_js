function rollDice(numbFaces) {
  if (numbFaces < 1) {
    throw new Error()
  }
  const result = Math.floor(Math.random() * numbFaces) + 1
  return result
}

const aleatoryResult = rollDice(3)
console.log(`Resultado de la tirada:${aleatoryResult}`)
