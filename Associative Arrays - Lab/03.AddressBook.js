function solve(input) {

    let addressBook = new Map(input.map(item => {
        return [key, value] = item.split(":");
    }))

    let addressBookAsc = new Map([...addressBook.entries()].sort((a, b) =>
        a[0].localeCompare(b[0])
    ));

    for (let item of addressBookAsc.entries()) {
        console.log(`${item[0]} -> ${item[1]}`);
    }

}

let input = ['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'];


solve(input)
