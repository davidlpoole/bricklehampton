function run(script: string[], word: string) {
  return script.reduce((word, i) => {
    switch (i) {
      case 'l':
        return word.slice(1) + word[0]
      case 'r':
        return word.slice(-1) + word.slice(0, -1)
      case '!':
        return word[3] + word[2] + word[1] + word[0] + word.slice(4)
      default:
        return word
    }
  }, word)
}

function generateCombosAndCheck(
  minLength: number,
  maxLength: number,
  inputString: string,
  targetString: string
) {
  const characters: string[] = ['l', 'r', '!']

  function generateAndCheck(script: string, remainingLength: number) {
    if (remainingLength === 0) {
      if (run([...script], inputString) === targetString) {
        console.log('DONE!: ', script)
      }
      return
    }

    for (let i = 0; i < characters.length; i++) {
      generateAndCheck(script + characters[i], remainingLength - 1)
    }
  }

  for (let i = minLength; i <= maxLength; i++) {
    console.log(`Generating combinations of length ${i}`)
    generateAndCheck('', i)
  }
}

generateCombosAndCheck(17, 30, 'tlibcheaomkpnr', 'bricklehampton')
