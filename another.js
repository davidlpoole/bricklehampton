function generateCombinationsAndCheck(length, targetString) {
  const characters = ['l', 'r', '!']

  function generateAndCheck(prefix, remainingLength) {
    if (remainingLength === 0) {
      if (decodeAndCheck(prefix, targetString)) {
        console.log(prefix)
      }
      return
    }

    for (let i = 0; i < characters.length; i++) {
      generateAndCheck(prefix + characters[i], remainingLength - 1)
    }
  }

  for (let i = 1; i <= length; i++) {
    console.log(`Generating combinations of length ${i}`)
    generateAndCheck('', i)
  }
}

function decodeAndCheck(combination, targetString) {
  const run = (script, word) =>
    script.reduce((word, i) => {
      switch (i) {
        case 'l':
          return word.slice(1) + word[0]
        case 'r':
          return word.at(-1) + word.slice(0, -1)
        case '!':
          return word[3] + word[2] + word[1] + word[0] + word.slice(4)
        default:
          return word
      }
    }, word)

  return run([...combination], '') === targetString
}

generateCombinationsAndCheck(15, 'targetString')
