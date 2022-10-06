function solve(param1, additionalParamArr) {

    let bombNum = additionalParamArr[0];
    let bombPower = additionalParamArr[1];

    while (param1.includes(bombNum)) {
        let bombIndex = param1.indexOf(bombNum);
        let startIndex = bombIndex - bombPower < 0 ? 0 : bombIndex - bombPower;
        let endIndex = bombPower * 2 + 1 >= param1.length ? param1.length : bombPower * 2 + 1;
        param1.splice(startIndex, endIndex)
    }

    console.log(param1.length > 0 ? param1.reduce((a, b) => a + b) : 0);
}

solve([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 50])