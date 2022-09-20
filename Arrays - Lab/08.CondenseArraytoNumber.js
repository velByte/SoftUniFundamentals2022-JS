function solve(input) {

    function sumOfCondense(input) {

        let length = input.length;

        if (length === 1) {
            return input[0];
        }
        let res = []

        for (let i = 0; i < length - 1; i++) {
            res.push(input[i] + input[i + 1]);
        }
        return sumOfCondense(res)
    }

    console.log(sumOfCondense(input));
}

solve([5])