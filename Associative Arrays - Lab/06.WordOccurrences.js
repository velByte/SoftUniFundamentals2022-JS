function solve(input) {
    let resumtMap = new Map();

    input.forEach(item => {
        if (resumtMap.has(item)) {
            resumtMap.set(item, resumtMap.get(item) + 1);
        } else {
            resumtMap.set(item, 1);
        }
    })

    let resumtMapSorted = new Map([...resumtMap.entries()].sort((a, b) => b[1] - a[1]))

    resumtMapSorted.forEach((value, key) => {
        console.log(key, "->", value, "times");
    })

}

let input = ["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]




solve(input)
