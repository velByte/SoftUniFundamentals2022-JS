function solve(input) {
    input.sort();

    let i = 1;

    input.map(item => {
        console.log(i + "." + item);
        i++;
    })
}

solve(["Potatoes", "Tomatoes", "Onions",
    "Apples"])