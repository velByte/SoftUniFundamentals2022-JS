solve = (num1, num2, num3) => {
    let sum = num1 + num2 + num3;
    let isInt = Number.isInteger(sum);
    console.log(`${sum} - ${isInt ? "Integer" : "Float"}`)
}

solve(9, 100, 1)