function solve(input) {

    let resultMap = new Map();

    input.forEach(item => {
        let [companyName, id] = item.split(" -> ");

        if (!resultMap.has(companyName)) {
            resultMap.set(companyName, new Map())
        }
        resultMap.get(companyName).set(id, 1);
    })

    let resultMapOrdered = new Map([...resultMap.entries()].sort((a, b) => {
        return a[0].localeCompare(b[0])
    }))

    resultMapOrdered.forEach((value, key) => {
        console.log(key);
        value.forEach((v, k) => {
            console.log("--", k);
        })
    })
}

let input = [
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]


solve(input)
