function solve(input) {

    let vip = [];
    let regular = [];
    let party = false;
    let result = [];
    input.forEach(element => {
        if (element === "PARTY") {
            party = true;
        } else {
            if (party === false) {
                if (isNaN(element[0])) {
                    regular.push(element);
                } else {
                    vip.push(element);
                }
            } else {
                if (vip.includes(element)) {
                    vip.splice(vip.indexOf(element), 1);
                } else if (regular.includes(element)) {
                    regular.splice(regular.indexOf(element), 1);
                }
            }
        }
    });
    result = vip.concat(regular);
    console.log(result.length);
    result.forEach(element => {
        console.log(element);
    });

}

let input = ['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]


solve(input)
