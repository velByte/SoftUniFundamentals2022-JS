solve = (num) => {

    let numsToWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    console.log(numsToWords[num % 10]);

}

console.log(solve(512));