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

const start = 'tlibcheaomkpnr'
console.log(start)
const input = ''
const script = 'r!r'
console.log(run(script.split(''), start))
