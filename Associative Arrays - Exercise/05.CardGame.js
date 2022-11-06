function solve(input) {

    let resultMap = new Map();


    input.forEach(item => {
        let [name, cardsArr] = item.split(": ");

        if (!resultMap.has(name)) {
            resultMap.set(name, []);
        }

        /* Checking if the name is already in the map, if it is, it is getting the value of the name
        and concatenating it with the cardsArr.split(", ") and then it is checking if there are any
        duplicates in the array and if there are, it is removing them. */
        resultMap.set(name, checkIfSamePower(resultMap.get(name).concat(cardsArr.split(", "))));

    })

    resultMap.forEach((value, key) => {

        let points = calcPints(value);
        console.log(`${key}: ${points}`);

    })

    //discard more than one card with the same power and type
    function checkIfSamePower(arr) {
        return [...new Set(arr)];
    }

    function calcPints(cardArr) {
        let decodeType = {
            S: 4,
            H: 3,
            D: 2,
            C: 1,
        };

        let decodePower = {
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            J: 11,
            Q: 12,
            K: 13,
            A: 14
        }

        let pointsSum = 0;

        cardArr.forEach(item => {

            /* Taking the last element of the array and putting it in the variable type and the rest of the
            elements in the variable power. */
            let item2arr = Array.from(item);
            let type = item2arr.pop();
            let power = item2arr.join("");

            pointsSum += (decodePower[power] * decodeType[type])

        })
        return pointsSum;
    }

}

let input = [
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
    ;

solve(input)
