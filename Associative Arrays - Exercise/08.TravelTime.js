function solve(input) {

    let resultMap = new Map();

    input.forEach(item => {
        let [countryName, townName, travalCost] = item.split(" > ");
        travalCost = Number(travalCost)
        if (!resultMap.has(countryName)) {
            resultMap.set(countryName, new Map());
        }

        if (!resultMap.get(countryName).has(townName)) {
            resultMap.get(countryName).set(townName, travalCost);
        } else {
            let price = Math.min(travalCost, resultMap.get(countryName).get(townName));
            resultMap.get(countryName).set(townName, price);
        }

    })

    resultMap.forEach((value, key) => {
        let sortedMap = new Map([...value.entries()].sort((a, b) => {
            return (a[1] - b[1])
        }))
        resultMap.set(key, sortedMap)
    });

    let sortedResult = new Map([...resultMap.entries()].sort((a, b) => a[0].localeCompare(b[0])))

    sortedResult.forEach((value, key) => {
        let toPrint = [];

        value.forEach((v, k) => {
            toPrint.push(`${k} -> ${v}`)
        })
        console.log(key + " -> " + toPrint.join(" "));
    })

}

let input = [
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]



solve(input)
