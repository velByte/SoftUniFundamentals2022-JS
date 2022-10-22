function solve(input) {

    let index = 0;
    let studentCount = Number(input[index++]);
    let courseLectures = Number(input[index++]);
    let additionalBonus = Number(input[index++]);

    let attendancesArr = input.slice(3, input.length).map(Number);
    let max = attendancesArr.length === 0 ? 0 : Math.max(...attendancesArr);
    let totalBonus = Math.round((max / courseLectures) * (5 + additionalBonus));
    console.log(`Max Bonus: ${isNaN(totalBonus) ? 0 : totalBonus}.`)
    console.log(`The student has attended ${max} lectures.`)
}

let input = [
    "0"
]
    ;

solve(input);