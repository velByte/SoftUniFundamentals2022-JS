function solve(input) {

    let daysOfPlunder = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);
    let totalPLunder = 0;

    for (let index = 1; index <= daysOfPlunder; index++) {
        totalPLunder += dailyPlunder;
        if (index % 3 === 0) {
            totalPLunder += (dailyPlunder * 0.5);
        }
        if (index % 5 === 0) {
            totalPLunder -= totalPLunder * 0.3;
        }
    }

    if (totalPLunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPLunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = ((totalPLunder / expectedPlunder) * 100).toFixed(2);;
        console.log(`Collected only ${percentage}% of the plunder.`)
    }

}

let input = (["10",
    "20",
    "380"])
    ;


solve(input);