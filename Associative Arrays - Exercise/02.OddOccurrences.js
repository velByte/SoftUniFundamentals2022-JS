function solve(input) {

    let wordsMap = new Map();

    let wordsArr = input.split(" ").map(item => item.toLowerCase());

    wordsArr.forEach(item => {

        if (!wordsMap.has(item)) {
            wordsMap.set(item, 0);
        }
        wordsMap.set(item, wordsMap.get(item) + 1);
    })

    let resultArr = [];

    wordsMap.forEach((value, key) => {
        if (value % 2 != 0) {
            resultArr.push(key);
        }
    })

    console.log(...resultArr);
}

let input = 'Java C# Php PHP Java PhP 3 C# 3 1 5 C#';

solve(input)
