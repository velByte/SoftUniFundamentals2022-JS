
solve = (a, b, opr) => {
    let oprObj = {
        'add': a + b,
        'subtract': a - b,
        'multiply': a * b,
        'divide': a / b,
    }
    return oprObj[opr];
}

solve();