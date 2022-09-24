function solve(input) {
    let steps = Number(input.pop());

    let resultArr = [];

    for (let i = 0; i < input.length; i += steps) {
        resultArr.push(input[i]);
    }

    console.log(...resultArr);
}

solve(["5", "20", "31", "4", "20", "2"])