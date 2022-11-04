function solve(input) {
    let newMap = new Map(input.map(i => {
        let [key, value] = i.split(" ");
        return [key, value]
    }))

    for (let item of newMap.entries()) {
        console.log(`${item[0]} -> ${item[1]}`);
    }
}

let input = ['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']

solve(input);