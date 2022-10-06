function solve(input) {

    let result = [];
    let asc = input.slice(0).sort((a, b) => a - b);
    let desc = input.slice(0).sort((a, b) => b - a);

    if (input.length % 2 === 0) {

        for (let i = 0; i < input.length / 2; i++) {
            result.push(desc[i]);
            result.push(asc[i]);
        }

    } else {

        for (let i = 0; i < (input.length / 2) - 1; i++) {
            result.push(desc[i]);
            result.push(asc[i]);
        }

        result.push(desc[Number.parseInt(desc.length / 2)]);
    }

    console.log(...result);

}