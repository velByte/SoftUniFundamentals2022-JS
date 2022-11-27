function solve(input) {
    let message = input[0];
    let pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    let matches = message.matchAll(pattern);

    let result = [];
    let totalCalories = 0;

    for (let match of matches) {
        let item = match.groups.item;
        let date = match.groups.date;
        let calories = Number(match.groups.calories);
        totalCalories += calories;
        result.push(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
    }
    
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(result.join('\n'));
}

solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)