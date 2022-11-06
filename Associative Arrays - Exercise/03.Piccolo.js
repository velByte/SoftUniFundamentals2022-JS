function solve(input) {

    let resultMap = new Map();

    input.forEach(item => {
        let [direction, carNumber] = item.split(", ");
        switch (direction) {
            case "IN":
                carIN(carNumber);
                break;
            case "OUT":
                carOUT(carNumber);
                break;
            default:
                break;
        }
    })


    function carIN(carNumber) {
        resultMap.set(carNumber, justNumbers(carNumber));
    }

    function carOUT(carNumber) {
        resultMap.delete(carNumber);
    }

    function justNumbers(str) {
        var numsStr = str.replace(/[^0-9]/g, '');
        return parseInt(numsStr);
    }


    let resumtMapSorted = new Map([...resultMap.entries()].sort((a, b) => {
        return (a[0].localeCompare(b[0]))
    }))

    if (!resumtMapSorted.size > 0) {
        resumtMapSorted.set("Parking Lot is Empty", true)
    }

    resumtMapSorted.forEach((value, key) => {
        console.log(key);
    })

}

let input = ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']


solve(input)
