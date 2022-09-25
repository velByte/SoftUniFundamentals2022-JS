function solve(input) {
    let grade = Number(input);

    if (grade <= 2.99) {
        console.log("Fail " + "(" + grade.toFixed(0) + ")");
    } else if (grade <= 3.49) {
        console.log("Poor " + "(" + grade.toFixed(2) + ")");
    } else if (grade <= 4.49) {
        console.log("Good " + "(" + grade.toFixed(2) + ")");
    } else if (grade <= 5.49) {
        console.log("Very good " + "(" + grade.toFixed(2) + ")");
    } else {
        console.log("Excellent " + "(" + grade.toFixed(2) + ")");
    }
}

solve(3.33);