function solve(input) {

    let calender = new Map();

    input.forEach(item => {
        let [day, name] = item.split(" ");
        if (!calender.has(day)) {
            console.log(`Scheduled for ${day}`);
            calender.set(day, name)
        } else {
            console.log(`Conflict on ${day}!`);
        }
    })

    for (let element of calender.entries()) {
        console.log(element[0] + " -> " + element[1]);
    }

}

let input = ['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'];

solve(input)
