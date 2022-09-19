function solve(n, input) {
    let result = [];
    for (n--; n >= 0; n--) {
        result.push(input[n])
    }
    console.log(result.join(" "))
}

solve(3, [10, 20, 30, 40]);