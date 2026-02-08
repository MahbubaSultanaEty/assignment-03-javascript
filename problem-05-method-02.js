function analyzeText(str) {
    const words = str.split(" ");
    let longwords = words[0];

    for (let word of words) {
        if (word.length > longwords.length) {
            longwords = word;
        }
    }

    const token = str.split(" ").join("").length;

    return { longwords, token };
}
let output= analyzeText("Keep coding keep shining")
console.log(output);