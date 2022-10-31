function solve(input) {
    for (let key of Object.keys(input)) {
        console.log(`${key} -> ${input[key]}`);
    }
}

let input = {
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
};

solve(input);
