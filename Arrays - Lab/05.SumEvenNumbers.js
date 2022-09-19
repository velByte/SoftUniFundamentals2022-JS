function solve(input) {
    let sum = 0;
    for (let num of input) {
        num = Number(num);
        sum += num % 2 === 0 ? num : 0;
    }
    console.log(sum);
}

solve(["1", "2", "3", "4", "5", "6"])