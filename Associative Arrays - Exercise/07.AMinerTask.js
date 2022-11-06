function solve(input) {

    let resourceMap = new Map();

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1])

        if (!resourceMap.has(resource)) {
            resourceMap.set(resource, 0);
        }

        resourceMap.set(resource, resourceMap.get(resource) + quantity)

    }
    resourceMap.forEach((value, key) => {
        console.log(key + " -> " + value);
    })
}


let input = [
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
    ;

solve(input)
