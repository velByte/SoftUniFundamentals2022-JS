function solve(input) {

    const budget = Number(input[0]);
    const students = Number(input[1]);
    const priceFlour = Number(input[2]);
    const priceEgg = Number(input[3]);
    const priceApron = Number(input[4]);
    let total =
        (students * 10 * priceEgg)
        + ((students - Math.floor(students / 5)) * priceFlour)
        + (Math.ceil(students + (students * 0.2)) * priceApron);


    if (total <= budget) {
        console.log(`Items purchased for ${total.toFixed(2)}$.`);
    } else {
        console.log(`${(total - budget).toFixed(2)}$ more needed.`);
    }

}

let input = ([100,
    25,
    4.0,
    1.0,
    6.0])



solve(input)
