function solve(input) {
    for (let i = input.length - 1; i >= 0; i--) {
        process.stdout.write(`${input[i]}${i != 0 ? " " : ""}`)
    }
}

solve(["a", "b", "c", "d", "e"])
