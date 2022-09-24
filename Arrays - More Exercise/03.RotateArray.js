function solve(input) {
    let rotationSteps = Number(input.pop());


    for (let i = 0; i < rotationSteps; i++) {
        rotate(input);
    }

    function rotate(arr) {
        let lastItem = arr.pop();
        arr.unshift(lastItem);
    }
    console.log(...input);
}

solve(["Banana", "Orange", "Coconut",
    "Apple", "15"])

