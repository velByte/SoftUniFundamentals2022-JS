function solve(input) {

    let isMagic = true;

    let sum = input[0].reduce((a, b) => a + b);

    for (let i = 0; i < input.length; i++) {
        let rowSum = input[i].reduce((a, b) => a + b);
        let colSum = 0;

        for (let j = 0; j < input.length; j++) {
            colSum += input[j][i];
        }

        if (rowSum !== sum || colSum !== sum) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);

}

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);