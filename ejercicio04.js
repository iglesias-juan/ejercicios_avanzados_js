//! 4.1

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

console.log(findArrayIndex(mainCharacters, 'Anakin'))

//! 4.2

function removeItem(array, text) {
  const i = findArrayIndex(array, text)
  if (i !== -1) {
    array.splice(i, 1)
  }
  return array
}

console.log(removeItem(mainCharacters, 'Rey'))
console.log(removeItem(mainCharacters, 'Luke'))
console.log(removeItem(mainCharacters, 'Darth Vader'))
