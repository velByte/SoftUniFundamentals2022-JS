function solve(input) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let num of input) {
        num = Number(num);
        (num % 2 === 0) ? sumEven += num : sumOdd += num;

    }
    console.log(sumEven - sumOdd);
}