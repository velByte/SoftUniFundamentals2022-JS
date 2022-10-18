function solve(input) {
    //special or regular
    let index = 0;
    let total = 0;
    let taxes = 0;


    while (input[index] != "special" && input[index] != "regular") {

        let temp = Number(input[index]);

        if (temp < 0) {
            console.log("Invalid price!");
        } else {
            total += temp;
        }

        index++;
    }


    if (total === 0) {
        console.log("Invalid order!");
    } else {
        taxes = total * 0.2;
        console.log(`Congratulations you've just bought a new computer!`)
        console.log(`Price without taxes: ${total.toFixed(2)}$`)
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log(`-----------`)

        total += taxes;

        if (input[index] === "special") {
            total = total - (total * 0.1);
        }

        console.log(`Total price: ${(total).toFixed(2)}$`)

    }

}

solve([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])


