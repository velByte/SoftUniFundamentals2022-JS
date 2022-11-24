function solve(input) {

    let participants = new Map(input.shift().split(', ').map(x => [x, 0]));

    input.forEach(item => {
        if (item === "end of race") {
            return;
        }
        let name = item.match(/[A-Za-z]+/g).join('');
        let distance = item.match(/\d/g).map(Number).reduce((a, b) => a + b);
        if (participants.has(name)) {
            participants.set(name, participants.get(name) + distance);
        }
    })
    participants = [...participants].sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${participants[0][0]}`);
    console.log(`2nd place: ${participants[1][0]}`);
    console.log(`3rd place: ${participants[2][0]}`);
}