solve = (number) => {

    let strNumber = String(number);

    let sum = 0;

    for (let i = 0; i < strNumber.length; i++) {
        sum += Number(strNumber[i]);
    }
    let result = String(sum).split("");
    console.log(`${number} Amazing? ${result.includes("9") ? "True" : "False"}`)
}

solve(1233)