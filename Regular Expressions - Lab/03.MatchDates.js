function solve(input) {
    let regex = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    while ((validData = regex.exec(input)) !== null) {
        let day = validData.groups['day'];
        let month = validData.groups['month'];
        let year = validData.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
