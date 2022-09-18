sumDigits = (digit) => {
    let sum = 0;
    let str = digit.toString();
    let arr = str.split("");
    let arr2 = arr.map(Number);
    return arr2.reduce((a, b) => a + b, 0);
};