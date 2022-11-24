function solve(input) {
    let regex = /\+359(-2-([0-9]{3})-([0-9]{4}\b)|(\s2\s([0-9]{3})\s([0-9]{4})\b))/g;
    console.log(input[0].match(regex).join(', '));
}
