function theatrePrinter(weekDay, age) {

    let index = 0;
    if (0 <= age && age <= 18) {
        index = 0;
    } else if (18 < age && age <= 64) {
        index = 1;
    } else if (64 < age && age <= 122) {
        index = 2;
    } else {
        return "Error!";
    }

    let table = {
        "Weekday": ["12$", "18$", "12$"],
        "Weekend": ["15$", "20$", "15$"],
        "Holiday": ["5$", "12$", "10$"]
    }
    return table[weekDay][index];
}

console.log(theatrePrinter("Weekday", 64));