function solve(input) {

    let words2track = input.shift().split(" ");
    let resultObj = new Map();

    for (let word of words2track) {
        resultObj.set(word, 0);
    }

    for (word of input) {
        if (resultObj.has(word)) {
            resultObj.set(word, resultObj.get(word) + 1);
        }
    }


    let resultMapDesc = new Map([...resultObj.entries()].sort((a, b) => b[1] - a[1]))

    resultMapDesc.forEach((value, key) => {
        console.log(`${key} - ${value}`);
    })

}

let input = [
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
    ;

solve(input)
