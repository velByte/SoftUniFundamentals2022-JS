function solve(input) {
    let k = Number(input[0]);
    let arr = input.slice(1);
    let first = arr.slice(0, k);
    let last = arr.slice(arr.length - k, arr.length);
    console.log(first.join(" "));
    console.log(last.join(" "));
}

solve([3,
    6, 7, 8, 9])