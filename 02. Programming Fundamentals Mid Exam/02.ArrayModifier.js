function solve(input) {


    let initArr = input[0].split(" ").map(n => Number(n));

    let index = 1;

    while (input[index] != "end") {

        let buff = input[index].split(" ");
        let cmd = buff.splice(0, 1)[0];

        commandHandler(cmd, buff)

        index++;
    }


    function commandHandler(cmd, values) {

        let index1 = null;
        let index2 = null;

        if (values.length != 0) {
            index1 = Number(values[0]);
            index2 = Number(values[1]);
        }

        switch (cmd) {
            case "swap":
                swap(index1, index2);
                break;
            case "multiply":
                multiply(index1, index2);
                break;
            case "decrease":
                decrease();
                break;
            default:
                break;
        }
    }


    console.log(initArr.join(", "));


    //Swap
    function swap(index1, index2) {
        [initArr[index1], initArr[index2]] = [initArr[index2], initArr[index1]];
    }
    //Multipy
    function multiply(index1, index2) {
        initArr[index1] = initArr[index1] * initArr[index2]
    }
    //Decrease
    function decrease() {
        initArr = initArr.map(num => num - 1)
    }

}


let input = [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
];

solve(input);
