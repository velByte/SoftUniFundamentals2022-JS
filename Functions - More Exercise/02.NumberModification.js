function solve(num) {



    function getSum(n) {
        let sum = 0;
        let digitsCount = 0;
        while (n != 0) {
            sum = sum + n % 10;
            digitsCount++;
            n = parseInt(n / 10);
        }
        return sum / digitsCount;
    }

    function getResult(num) {

        if (getSum(num) > 5) {
            return num;
        }
        else {
            let addDigit = Number(String(num) + "9")
            return getResult(addDigit);
        }
    }

    console.log(getResult(num));

}

solve(101);