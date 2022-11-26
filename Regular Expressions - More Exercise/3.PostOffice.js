function solve(input) {

    class Word {
        constructor(firsLetter, asciiChar) {
            this.firsLetter = firsLetter;
            this.wordLenth = 0;
            this.asciiChar = asciiChar;
        };

        setLength(wordLenth) {
            this.wordLenth = wordLenth;
        }
    }


    let [firstPart, secondPart, thirdPart] = input[0].split("|");
    // console.log(input[0]);
    // console.log(firstPart);
    // console.log(secondPart);
    // console.log(thirdPart);

    let wordsMap = new Map();

    let capitalLetters = getCapitalLetters(firstPart);
    let startingLetter = extractWordLength(secondPart);

    // console.log(capitalLetters);
    // console.log(startingLetter);
    // console.log(wordsMap);

    extractWords();

    function extractWordLength(text) {
        let result = [];
        let pattern = /(?<asciiCode>[0-9]+[0-9]+):\s*(?<length>[0-9]+[0-9]+)/g

        let match = pattern.exec(text);

        while (match) {
            let asciiCode = Number(match.groups.asciiCode);
            let wordLenth = Number(match.groups.length);
            // console.log(asciiCode);
            if (wordsMap.has(asciiCode)) {
                wordsMap.get(asciiCode).setLength(wordLenth);
            }
            result.push(match[0])
            match = pattern.exec(text);
        }
        return result;
    }

    function getCapitalLetters(part) {
        let result = [];
        let pattern = /([\#\$\*\&])(?<letters>[A-Z]+)\1/g;
        let capitalLetters = "";
        let match = pattern.exec(part);

        while (match) {
            capitalLetters += match.groups.letters
            match = pattern.exec(part);
        }
        result = capitalLetters.split("");
        result.map(item => {
            let asciiChar = item.charCodeAt();
            wordsMap.set(asciiChar, new Word(item, asciiChar));
        })
        return result;
    }

    function extractWords() {
        wordsMap.forEach(item => {
            let letter = item.firsLetter;
            let length = item.wordLenth;

            let pattern = new RegExp(`(?<=\\s|^)${letter}[\\S]{${length}}(?=\\s|$)`, "g");
            let match = pattern.exec(thirdPart);
            while (match) {
                console.log(match[0]);
                match = pattern.exec(thirdPart);
            }

        })
    }
}

solve(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])