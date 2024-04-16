import * as readline from 'readline'

let script = ''
let initial = 'tlibcheaomkpnr'
let target = 'bricklehampton'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function getUserInput() {
  const clearCode = '\x1Bc'
  process.stdout.write(clearCode)

  const result = run([...script], initial)
  console.log(result + '\n')

  const msg = 'Please enter your input (l/r/1): '
  rl.question(msg, (input) => {
    if (input === '1') input = '!'
    if (input !== '' || result === target) {
      script += input
      getUserInput()
    } else {
      rl.close()
    }
  })
}

getUserInput()

function run(script: string[], word: string): string {
  return script.reduce(function (word: string, i: string): string {
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
