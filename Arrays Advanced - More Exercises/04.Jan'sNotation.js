function solve(input) {

    let arr = [];
    let error = false;

    /* Iterating through the input array and checking if the current element is a number or a string.
    If it is a number it is pushed to the array. If it is a string it checks if the array has at
    least two elements. If it does it calls the function getLastTwo() and reverses the array. Then
    it calls the function operationHandler() and passes the current element, the first and the
    second element of the array. */
    for (let i = 0; i < input.length; i++) {
        let current = input[i];

        if (typeof current === 'number') {
            arr.push(current);
        } else {
            if (arr.length < 2) {
                error = true;
                break;
            }

            /* Using the array destructuring syntax to assign the first and second elements of the
            array returned by the function `getLastTwo()` to the variables `first` and `second`. */
            let [first, second] = getLastTwo().reverse();

            arr.push(operationHandler(current, first, second));

        }
    }

    /**
     * `getLastTwo` returns the last two elements of the array `arr` by removing them from the array
     * @returns The last two elements of the array.
     */
    function getLastTwo() {
        return [arr.pop(), arr.pop()];
    }

    /**
     * It takes three arguments, an operation, and two numbers, and returns the result of the operation
     * on the two numbers
     * @param operation - the operation to be performed
     * @param first - the first number
     * @param second - The second number in the operation.
     * @returns the result of the operation.
     */
    function operationHandler(operation, first, second) {
        switch (operation) {
            case '+':
                return first + second;
            case '-':
                return first - second;
            case '*':
                return first * second;
            case '/':
                return first / second;
        }
    }

    /* It checks if there is an error and if there is it prints the error message. If there is no error it
    checks if there are more than one elements in the array and if there are it prints the second error
    message. If there are no errors and there is only one element in the array it prints the element. */
    if (error) {
        console.log('Error: not enough operands!');
    } else if (arr.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(arr.pop());
    }

}

let input = [15,
    '/'];



solve(input);