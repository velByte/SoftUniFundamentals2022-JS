function solve(input) {

    /* Splitting the input string by the comma and space and then trimming the whitespace from each
    element. */
    let arr = input.split(", ").map(x => x.trim())

    arr.forEach(item => {
        if (isValid(item)) {
            let result = checkIfWinning(item);
            switch (result.value) {
                case "jakpot":
                    console.log(`ticket "${item}" - ${result.length}${result.symbol} Jackpot!`);
                    break;
                case "win":
                    console.log(`ticket "${item}" - ${result.length}${result.symbol}`);
                    break;
                default:
                    console.log(`ticket "${item}" - no match`);
                    break;
            }
        } else {
            console.log("invalid ticket");
        }
    })

    /**
     * It takes a string of 20 characters, splits it into two halves, checks if each half has a winning
     * combination, and if so, checks if the winning Symbols are the same.
     * @param ticket - an array of 20 numbers
     */
    function checkIfWinning(ticket) {

        let leftHalf = ticket.slice(0, 10);
        let rigthHalf = ticket.slice(10, 20);


        let testLeft = checkIfWiningCombination(leftHalf);
        let testRigth = checkIfWiningCombination(rigthHalf);


        if (testLeft != false && testRigth != false) {
            if (testLeft.Symbol == testRigth.Symbol) {
                /* Checking if the winning combination is 10 Symbols long and if so, it returns a
                jackpot. */
                if (testLeft.length == 10 && testRigth.length == 10) {
                    return { value: "jakpot", length: testLeft.length, symbol: testLeft.symbol }
                } else {
                    return { value: "win", length: Math.min(testLeft.length, testRigth.length), symbol: testLeft.symbol }
                }
            } else {
                return { value: "no match" }
            }
        } else {
            return { value: "no match" }
        }

    }

    /**
     * It takes a string and returns an object with the winning Symbol and the length of the winning
     * combination if there is one, or false if there isn't.
     * @param ticketHalf - the half of the ticket that we are checking for a winning combination
     * @returns an object with two properties:
     */
    function checkIfWiningCombination(ticketHalf) {

        /* A regular expression that matches a same Symbol that is repeated 5 to 9 times. */
        let pattern = /([\@\#\$\^])\1{5,9}/;
        let match = pattern.exec(ticketHalf);

        if (match) {
            // console.log(match);
            return {
                "symbol": match[1],
                "length": match[0].length
            }
        } else {
            return false;
        }
    }

    /**
     * If the length of the ticket is 20, return true, otherwise return false.
     * @param ticket - the ticket number
     * @returns a boolean value.
     */
    function isValid(ticket) {
        if (ticket.length === 20) return true;
        return false;
    }
}

solve("$$$$$$$$$$$$$$$$$$$$, asg  , th@@@@@@@emo@@@@@@ey")