function solve(str) {
    str = String(str);
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < str.length; i++) {
        let current = Number(str[i]);
        if (current % 2 === 0) {
            evenSum += current;
        } else {
            oddSum += current;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve('1000435');