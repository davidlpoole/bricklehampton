# Bricklehampton

`run` runs a script on a word, we're looking for the right value of script to
unshuffle the word.

```javascript
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
```

What is a value for script so that the following expression evaluates to true. (There's at least one).

```javascript
run(script, 'tlibcheaomkpnr') === 'bricklehampton'
```
