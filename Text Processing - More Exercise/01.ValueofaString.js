function solve(input) {

    let sumTotal = 0;
    let str = input[0].match(/[A-Za-z]/g).join('');
    switch (input[1]) {
        case 'LOWERCASE':
            sumTotal = getSumLowercase(str);
            break;
        case 'UPPERCASE':
            sumTotal = getSumUppercase(str);
            break;
        default:
            break;
    }

    function getSumLowercase(str) {
        let sum = 0;

        for (let i = 0; i < str.length; i++) {
            if (!isUpper(str[i])) {
                sum += str[i].charCodeAt(0);
            }
        }


        return sum;
    }

    function getSumUppercase(str) {
        let sum = 0;

        for (let i = 0; i < str.length; i++) {
            if (isUpper(str[i])) {
                sum += str[i].charCodeAt(0);
            }
        }
        return sum;
    }

    function isUpper(char) {
        return char === char.toUpperCase();
    }

    console.log(`The total sum is: ${sumTotal}`);
}

solve(['AC/DC',
    'UPPERCASE']

)