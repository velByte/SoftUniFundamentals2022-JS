function solve(input) {
    let resultArr = [];
    let index = 0;
    let init = Number(input[index]);

    resultArr = input.filter((n) => {
        if (n >= init) {
            init = n;
            return true;
        } else {
            return false;
        }
    })

    console.log(...resultArr);
}

solve([-5, -3, -8, 4, 10, 12, 3, 2, 24])