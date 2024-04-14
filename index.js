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

const rootEl = document.getElementById('root')
const scriptEl = document.getElementById('script')
const resultEl = document.getElementById('result')
const outputEl = document.getElementById('output')
const inputEl = document.getElementById('input')
const expectedEl = document.getElementById('expected')

const start = 'tlibcheaomkpnr'
inputEl.append(start)

expectedEl.append('bricklehampton')

const rand = (max) => {
  return Math.floor(Math.random() * max)
}

const options = ['l', 'r', '!', '?']
const MAX_STEPS = 20

let script
let output

do {
  script = []

  for (let i = 0; i < rand(MAX_STEPS); i++) {
    const opt = options[rand(options.length)]
    script.push(opt)
  }
  console.log(script)

  output = run(script, start)
  console.log(output)
} while (output !== 'bricklehampton')

scriptEl.append(JSON.stringify(script))
outputEl.append(output)
resultEl.append(result)
