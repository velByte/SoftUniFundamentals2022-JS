function solve(input) {

    let resultMap = new Map();

    input.forEach(item => {
        let [key, value] = item.split(" ");
        value = Number(value);

        if (resultMap.has(key)) {
            value += resultMap.get(key);
            resultMap.set(key, value);
        } else {
            resultMap.set(key, value);
        }
    })

    resultMap.forEach((value, key) => {
        console.log(key, "->", value);
    })

}

let input = ['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']



solve(input)
