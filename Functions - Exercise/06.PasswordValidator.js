function solve(pwd){
    let isBetween6And10 = (pwd.length >= 6 && pwd.length <= 10);
    let isOnlyLettersAndDigits = true;
    let digitsCount = 0;

    for (let i = 0; i < pwd.length; i++) {
        let current = pwd[i];
        let isDigit = !isNaN(Number(current));
        if (!isDigit && !isLetter(current)) {
            isOnlyLettersAndDigits = false;
            break;
        }
        if (isDigit) {
            digitsCount++;
        }
    }
    if (isBetween6And10 && isOnlyLettersAndDigits && digitsCount >= 2) {
        console.log('Password is valid');
    }
    if (!isBetween6And10) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isOnlyLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }
    if (digitsCount < 2) {
        console.log('Password must have at least 2 digits');
    }

    function isLetter(char){
        return char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z';
    }

}