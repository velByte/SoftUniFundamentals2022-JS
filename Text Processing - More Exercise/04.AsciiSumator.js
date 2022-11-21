function solve(input) {

    let start = input[0].charCodeAt(0);
    let end = input[1].charCodeAt(0);
    let text = input[2];

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        let current = text[i].charCodeAt(0);
        if (current > start && current < end) {
            sum += current;
        }
    }
    console.log(sum);
}

solve(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']

)