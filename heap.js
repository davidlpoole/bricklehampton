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

const findCorrectScript = (word, minLength, maxLength) => {
  const target = 'bricklehampton'
  const scriptChars = ['l', 'r', '!']
  let result = null

  const generatePermutations = (currentScript) => {
    if (
      currentScript.length >= minLength &&
      currentScript.length <= maxLength
    ) {
      const resultWord = run(currentScript, word)
      if (resultWord === target) {
        result = currentScript.slice() // Store the current script if it matches the target word
        return
      }
    }

    if (currentScript.length >= maxLength) {
      return // Stop generating permutations if current script length exceeds maximum length
    }

    for (let i = 0; i < scriptChars.length; i++) {
      generatePermutations(currentScript.concat(scriptChars[i]))
    }
  }

  generatePermutations([])

  return result
}

const inputWord = 'tlibcheaomkpnr'
const minLength = 15 // minimum length of the script
const maxLength = 20 // maximum length of the script
const script = findCorrectScript(inputWord, minLength, maxLength)
console.log('Script:', script)
