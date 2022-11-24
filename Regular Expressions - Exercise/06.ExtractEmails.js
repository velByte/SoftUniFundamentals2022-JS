function solve(input) {

    let pattern = /(?<=\s|^)[a-zA-Z0-9]+[.\-_]?[a-zA-Z0-9]+@[a-zA-Z]+\-?[a-zA-Z]+(\.[a-zA-Z]+\-?[a-zA-Z]+)+/g;
    let match = pattern.exec(input);

    while (match) {
        console.log(match[0]);
        match = pattern.exec(input);
    }
}

solve("Please contact us at: support@github.com.");