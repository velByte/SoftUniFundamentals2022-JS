function solve(input) {
    let init = 1;
    let resultArr = [];
    let index = 0;

    while (index < input.length) {

        switch (input[index]) {
            case "add":
                resultArr.push(init)
                break;
            case "remove":
                resultArr.pop()
                break;
            default:
                break;
        }
        init++
        index++;
    }

    if (resultArr.length != 0) {
        console.log(...resultArr);
    } else {
        console.log("Empty");
    }

}

solve(["add", "add", "remove", "add", "add"]);
solve(["add", "add", "add", "add"]);
solve(["remove", "remove", "remove"]);

