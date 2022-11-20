
function start(input) {

    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');



    function getLeterPosition(letter) {
        return abc.indexOf(letter.toLowerCase()) + 1;
    }

    function letlerBeforeNumber(letter, nummber) {
        if (isUpper(letter)) {
            return nummber / getLeterPosition(letter);
        } else {
            return nummber * getLeterPosition(letter);
        }
    }

    function letterAfterNumber(letter, nummber) {
        if (isUpper(letter)) {
            return nummber - getLeterPosition(letter);
        } else {
            return nummber + getLeterPosition(letter);
        }
    }

    function isUpper(letter) {
        return letter === letter.toUpperCase();
    }

    let result = 0;

    //Regex for finding all letters and numbers
    let regexLetterBefor = /\b[a-zA-Z]+/g;
    let regexNumber = /\d+/g;
    let regexLetterAfter = /[a-zA-Z]+\b/g;

    
    /* Removing all the spaces and then splitting the string into an array. */
    let arr = input.replace(/\s+/g, ' ').trim().split(" ");

    arr.forEach(item => {
        let letterBefore = item.match(regexLetterBefor)[0];
        let number = Number(item.match(regexNumber)[0]);
        let letterAfter = item.match(regexLetterAfter)[0];
        result += letterAfterNumber(letterAfter, letlerBeforeNumber(letterBefore, number));

    })
    console.log(result.toFixed(2));
}


start('A12b s17G');
