function solve(input) {

    let dict = new Map([]);

    /* Iterating through the input array and parsing each item as a JSON object. Then it is getting the
    first key of the object and setting it as the key of the map. Then it is getting the value of
    the key and setting it as the value of the map. */
    input.forEach(item => {
        let json = JSON.parse(item)
        let key = Object.keys(json)[0]
        let value = json[key];
        dict.set(key, value)
    })

    /* Sorting the map by the keys. */
    let sortedAsc = new Map([...dict.entries()].sort())

    /* Iterating through the sorted map and printing the key and value of each item. */
    sortedAsc.forEach((value, key) => {
        console.log(`Term: ${key} => Definition: ${value}`);
    })
}

let input = [
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
]


solve(input);