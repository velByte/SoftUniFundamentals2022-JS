function solve(input) {

    let uniqueChars = new Map();


    function findeSequences(text) {
        let pattern = /((?<string>\D+)(?<repate>\d+))/g;
        let match = pattern.exec(text);
        let arr = [];
        while (match) {
            let string = match.groups.string;
            let repate = Number(match.groups.repate);
            let tempResultString = (string.repeat(repate).toUpperCase())
            arr.push(tempResultString);
            match = pattern.exec(text)
        }

        return arr.join("");
    }

    function findeUniqeChars(text) {
        for (let i = 0; i < text.length; i++) {
            uniqueChars.set(text[i], 0)
        }
        return uniqueChars.size;
    }

    let resultArr = findeSequences(input);
    let uniqueCharsCount = findeUniqeChars(resultArr);

    console.log("Unique symbols used:", uniqueCharsCount);
    console.log(resultArr);

}

solve('a3');