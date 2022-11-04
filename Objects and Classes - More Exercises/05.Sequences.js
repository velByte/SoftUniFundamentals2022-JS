function solve(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let current = JSON.parse(input[i]).sort((a, b) => b - a);
        let isUnique = true;
        for (let j = 0; j < result.length; j++) {
            if (result[j].length === current.length) {
                let isSame = true;
                for (let k = 0; k < result[j].length; k++) {
                    if (result[j][k] !== current[k]) {
                        isSame = false;
                    }
                }
                if (isSame) {
                    isUnique = false;
                }
            }
        }
        if (isUnique) {
            result.push(current);
        }
    }
    result.sort((a, b) => a.length - b.length);
    for (let i = 0; i < result.length; i++) {
        console.log(`[${result[i].join(", ")}]`);
    }

}

let input = ["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]

solve(input); 