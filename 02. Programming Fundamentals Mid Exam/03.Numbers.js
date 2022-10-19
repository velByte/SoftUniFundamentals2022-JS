function solve(input) {
    let arr = input.split(" ").map(n => Number(n));
    let sum = arr.reduce((a, b) => a + b);
    let average = Math.floor(sum / arr.length);
    let newArr = arr.filter(num => num > average).sort((a, b) => a - b).reverse();
    if (newArr.length != 0) {
        newArr.splice(5)
        console.log(...newArr);
    } else {
        console.log("No");
    }
}

let input = '-1 -2 -3 -4 -5 -6';

solve(input)