function solve(input) {

    let initNumber = Number(input.shift());
    let collectionMap = new Map();

    for (let i = 0; i < initNumber; i++) {
        let [piece, composer, key] = input.shift().split("|");

        collectionMap.set(piece, {
            piece,
            composer,
            key
        })
    }

    while (input[0] != "Stop") {
        //'Add|Sonata No.2|Chopin|B Minor',
        let [cmd, arg1, arg2, arg3] = input.shift().split("|");

        switch (cmd) {
            case "Add":
                add(arg1, arg2, arg3)
                break;
            case "Remove":
                remove(arg1);
                break;
            case "ChangeKey":
                changeKey(arg1, arg2);
                break;
        }
    }

    collectionMap.forEach(item => {
        console.log(`${item.piece} -> Composer: ${item.composer}, Key: ${item.key}`);
    })

    function add(piece, composer, key) {
        if (!collectionMap.has(piece)) {
            collectionMap.set(piece, { piece, composer, key });
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        } else {
            console.log(`${piece} is already in the collection!`);
        }
    }
    function remove(piece) {
        if (collectionMap.has(piece)) {
            collectionMap.delete(piece);
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
    function changeKey(piece, key) {
        if (collectionMap.has(piece)) {
            let temp = collectionMap.get(piece);
            temp.key = key;
            collectionMap.set(piece, temp);
            console.log(`Changed the key of ${piece} to ${key}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

}

let input = [
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]

solve(input)