function solve(num) {

    let sumOfDigits = (n) => {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Number.parseInt(n / 10);
        }
        return sum;
    }

    let isSpecial = (a) => {
        switch (a) {
            case 5:
                return true;
            case 7:
                return true;
            case 11:
                return true;
            default:
                return false;
        }
    }

    for (let i = 1; i <= num; i++) {
        console.log(`${i} -> ${isSpecial(sumOfDigits(i)) ? "True": "False" }`)
    }


}


solve(6);


