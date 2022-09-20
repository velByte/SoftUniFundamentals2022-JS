function solve(input) {
    let newArr = [];

    for (let i = 0; i < input.length; i++) {

        if (input[i] % 2 === 0) {
            newArr.push(input[i] + i);
        } else {
            newArr.push(input[i] - i);
        }

        // console.log(i);
    }

    let sumOrgArr = input.reduce((a, b) => b + a)
    let sumNewArr = newArr.reduce((a, b) => b + a)
    console.log(newArr);
    console.log(sumOrgArr);
    console.log(sumNewArr);
}

solve([5, 15, 23, 56, 35])