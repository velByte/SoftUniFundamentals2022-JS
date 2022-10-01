function solve(arr) {

    let iterator = 0;
    let input = arr[iterator].split(" ");
    iterator++;

    while (iterator < arr.length) {

        let tempArr = arr[iterator].split(" ");
        switch (tempArr[0]) {
            case "Add":
                add(tempArr[1]);
                break;
            case "Remove":
                removeAlloccurrences(tempArr[1])
                break;
            case "RemoveAt":
                removeAt(tempArr[1])
                break;
            case "Insert":
                insert(tempArr[1], tempArr[2])
                break;
            default:
                break;
        }

        iterator++;
    }



    function removeAlloccurrences(item) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] === item) {
                input.splice(i, 1);
            }
        }
    }

    function add(num) {
        input.push(num);
    }

    function removeAt(index) {
        input.splice(index, 1);
    }

    function insert(item, index) {
        input.splice(index, 0, item);
    }

    console.log(...input);
}

solve(["4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3"])