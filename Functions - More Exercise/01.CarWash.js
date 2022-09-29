function solve(input) {

    let total = 0;


    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        switch (command) {
            case 'soap':
                total += 10;
                break;
            case 'water':
                total *= 1.2;
                break;
            case 'vacuum cleaner':
                total *= 1.25;
                break;
            case 'mud':
                total *= 0.9;
                break;
        }
    }
    console.log(`The car is ${total.toFixed(2)}% clean.`);
}

solve(["soap", "soap", "vacuum cleaner", "mud", "soap",
    "water"])