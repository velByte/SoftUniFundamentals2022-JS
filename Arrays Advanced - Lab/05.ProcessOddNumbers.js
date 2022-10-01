function solve(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 != 0) {
            arr.unshift(input[i] * 2)
        }
    }
    console.log(...arr);
}

solve([10, 15, 20, 25]); 