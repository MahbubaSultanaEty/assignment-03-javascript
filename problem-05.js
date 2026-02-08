function analyzeText(str) {
    // let longestWord = null;
    let words = str.split(" ");
    let longestWords = words[0];
    // console.log(words);
    for (let word of words) {
        if (word.length > longestWords.length) {
            longestWords = word;
        }
    } 
    // console.log(longestWord);
    let characters = str.split("");
    // console.log(characters);
    let token = 0;
    for (let char of characters) {
        if (char === ' ') {
            continue
        }
        token++;
    }

    return { longestWords: longestWords, token: token }
}

// let output= analyzeText("Keep coding keep shining")
// console.log(output);