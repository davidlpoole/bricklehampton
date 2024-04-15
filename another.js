function runnn(script, word) {
    return script.reduce(function (word, i) {
        switch (i) {
            case 'l':
                return word.slice(1) + word[0];
            case 'r':
                return word.slice(-1) + word.slice(0, -1);
            case '!':
                return word[3] + word[2] + word[1] + word[0] + word.slice(4);
            default:
                return word;
        }
    }, word);
}
function generateCombosAndCheckTs(minLength, maxLength, inputString, targetString) {
    var characters = ['l', 'r', '!'];
    function generateAndCheck(prefix, remainingLength) {
        if (remainingLength === 0) {
            if (runnn([prefix], inputString) === targetString) {
                console.log(prefix);
            }
            return;
        }
        for (var i = 0; i < characters.length; i++) {
            generateAndCheck(prefix + characters[i], remainingLength - 1);
        }
    }
    for (var i = minLength; i <= maxLength; i++) {
        console.log("Generating combinations of length ".concat(i));
        generateAndCheck('', i);
    }
}
console.log('hello');
generateCombosAndCheckTs(1, 30, 'tlibcheaomkpnr', 'bricklehampton');
