
function start(input) {

    let result = [];

    let currentWord = input[0];

    for (let i = 1; i < input.length; i++) {

        let currentChar = input[i];

        if (currentChar === currentChar.toUpperCase()) {

            result.push(currentWord);

            currentWord = currentChar;

        } else {

            currentWord += currentChar;

        }

    }

    result.push(currentWord);

    console.log(result.join(', '));

}


start('SplitMeIfYouCanHaHaYouCantOrYouCan');
