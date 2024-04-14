const run = (script, word) =>
  script.reduce((word, i) => {
    switch (i) {
      case 'l': // moves first to last
        return word.slice(1) + word[0]
      case 'r': // moves last to first
        return word.at(-1) + word.slice(0, -1)
      case '!': // reverses first 4
        return word[3] + word[2] + word[1] + word[0] + word.slice(4)
      default:
        return word
    }
  }, word)

const generateCombinations = (characters, length) => {
  const combinations = []

  function generate(prefix, remainingLength) {
    if (remainingLength === 0) {
      combinations.push(prefix)
      return
    }

    for (let i = 0; i < characters.length; i++) {
      generate(prefix + characters[i], remainingLength - 1)
    }
  }

  generate('', length)
  return combinations
}

const gooo = () => {
  const characters = ['l', 'r', '!']
  let minLength = 17
  let maxLength = 20

  for (let len = minLength; len <= maxLength; len++) {
    console.log('generating: ', len)
    const combinations = generateCombinations(characters, len)
    console.log('trying: ', len)
    for (const combo of combinations) {
      const result = run(combo.split(''), 'tlibcheaomkpnr')
      if (result === 'bricklehampton') {
        console.log('yoo: ', combo)
      }
    }
  }
}

console.log(gooo())
