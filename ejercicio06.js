function swap(array, itemX, itemY) {
  if (
    itemX < 0 ||
    itemX >= array.length ||
    itemY < 0 ||
    itemY >= array.length
  ) {
    throw new Error()
  }

  const change = array[itemX]
  array[itemX] = array[itemY]
  array[itemY] = change
  return array
}

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

const result = swap(fantasticFour, 0, 3)
console.log(result)
