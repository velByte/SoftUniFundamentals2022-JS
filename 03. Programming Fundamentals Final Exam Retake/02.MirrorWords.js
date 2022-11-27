function solve(input) {
    let text = input[0];
    let pattern = /(@|#)(?<word>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/gm;
    let result = [];
    let pairsFound = [];
    let match = pattern.exec(text);

    while (match) {
        let word1 = match.groups.word;
        let word2 = match.groups.word2;
        pairsFound.push({ word1, word2 });
        if (isMirror(word1, word2)) {
            result.push(`${word1} <=> ${word2}`);
        }
        match = pattern.exec(text);
    }

    if (pairsFound.length === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${pairsFound.length} word pairs found!`);
    }
    if (result.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(result.join(", "));
    }




    function isMirror(word1, word2) {
        word2 = word2.split("").reverse().join("");
        return word1 === word2;
    }
}

let input = [
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]


solve(input); 