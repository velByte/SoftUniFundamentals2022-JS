function solve(input) {

    let employee1 = Number(input[0]);
    let employee2 = Number(input[1]);
    let employee3 = Number(input[2]);

    let hour = 0;
    let questionsPerHour = employee1 + employee2 + employee3;
    let questions = Number(input[3]);

    while (questions > 0) {
        hour++;
        if (hour % 4 === 0) {
            continue;
        }
        questions -= questionsPerHour;
    }
    console.log(`Time needed: ${hour}h.`);
}

let input = ['1', '2', '3', '45']

solve(input);

