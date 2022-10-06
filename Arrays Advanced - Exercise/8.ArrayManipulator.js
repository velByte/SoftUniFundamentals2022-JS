function solve(arr1, arr2) {

    //Valid Commands

    let arr = [];
    arr = arr1;
    let cmdArr = [];
    cmdArr = arr2;

    let cmdArrLength = cmdArr.length;


    function add(index, element) {
        //adds element at the specified index
        arr.splice(index, 0, element)
    }

    function addMany(index, elementsArr) {
        let tempArr = [];
        tempArr = elementsArr.map(n => Number(n));
        arr.splice(index, 0, ...tempArr)
        //adds a set of elements at the specified index
    }

    function contains(element) {
        //prints the index of the first occurrence of 
        //the specified element (if exists) in the array or -1 if the element is not found
        let isIncludet = arr.includes(Number(element));
        if (isIncludet) {
            console.log(arr.indexOf(Number(element)));
        } else {
            console.log(-1);
        }
    }

    function remove(index) {
        //removes the element at the specified index.
        arr.splice(index, 1);
    }

    function shift(position) {
        for (let i = 0; i < position; i++) {
            arr.push(arr[0]);
            arr.shift();
        }
    }

    function sumPairs() {
        let tempArr = [];
        let arrLength = arr.length;
        for (let i = 0; i < arrLength; i += 2) {
            let firstElement = arr[i];
            let secondElement = i + 1 === arrLength ? 0 : arr[i + 1];
            tempArr.push(firstElement + secondElement);
        }
        arr = tempArr;
        //sums the elements in the array by pairs (first + second, third + fourth, …).
    }

    function print() {

        console.log("[ " + arr.join(", ") + " ]");
        //stop receiving more commands and print the last state of the array in the following format
    }

    // console.log("End:", arr);
    // console.log("End:", cmdArr);

    for (let i = 0; i < cmdArrLength; i++) {

        let buff = cmdArr[i].split(" ");

        // console.log(buff);
        let cmd = buff[0];
        let index;
        let parameters;

        switch (cmd) {
            case "add":
                index = Number(buff[1])
                parameters = Number(buff[2]);
                add(index, parameters);
                break;
            case "addMany":
                index = Number(buff[1]);
                buff.splice(0, 2);
                addMany(index, buff);
                break;
            case "contains":
                contains(buff[1]);
                break;
            case "remove":
                remove(buff[1]);
                break;
            case "shift":
                shift(buff[1]);
                break;
            case "sumPairs":
                sumPairs();
                break;
            case "print":
                print();
                break;
            default:
                break;
        }

    }

}

solve([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
)