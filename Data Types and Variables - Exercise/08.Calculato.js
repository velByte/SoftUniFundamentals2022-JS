function solve(a, b, c) {
    let result = 0;
    a = Number(a);
    c = Number(c)
    switch (b) {
        case "+":
            result = a + c;
            break;
        case "-":
            result = a - c;
            break;
        case "/":
            result = a / c;
            break;
        case "*":
            result = a * c;
            break;
        default:
            break;
    }

    console.log(result.toFixed(2));
}