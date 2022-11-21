function solve(input) {

    let result = new Map();
    let str = input.shift();
    for (let i = 0; i < str.length; i++) {

        if (!result.has(str[i])) {
            result.set(str[i], []);
        }
        result.get(str[i]).push(i);

    }

    result.forEach((value, key) => {
        console.log(`${key}:${value.join('/')}`);
    })
}

solve(["avjavamsdmcalsdm"])