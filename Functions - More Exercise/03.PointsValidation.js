function solve(input) {
    let [x1, y1, x2, y2] = input;

    function distance(pX1, pY1, pX2, pY2) {
        let a = pX1 - pX2;
        let b = pY1 - pY2;
        return Math.sqrt(a * a + b * b);
    }

    function checkValidity(x1, y1, x2, y2) {

        if (Number.isInteger(distance(x1, y1, x2, y2))) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        }
        else {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
        }
    }
    console.log(checkValidity(x1, y1, 0, 0));
    console.log(checkValidity(x2, y2, 0, 0));
    console.log(checkValidity(x1, y1, x2, y2));
}

solve([2, 1, 1, 1])