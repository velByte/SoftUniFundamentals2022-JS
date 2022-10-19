function solve(input) {
    let index = 0;
    let seqArr = input[index++].split(" ").map(Number);
    let seqBound = seqArr.length;

    while (input[index] != "End") {

        let raw = input[index].split(" ");
        let cmd = raw[0];
        let param1 = Number(raw[1]);
        let param2 = Number(raw[2]);

        switch (cmd) {
            case "Shoot":
                shoot(param1, param2);
                break;
            case "Add":
                add(param1, param2);
                break;
            case "Strike":
                strike(param1, param2);
                break;
            default:
                break;
        }
        index++;
    }

    console.log(seqArr.join("|"));

    function shoot(index, power) {
        if (inRange(index)) {
            seqArr[index] -= power;
            if (seqArr[index] <= 0) {
                seqArr.splice(index, 1);
            }
        }
    }

    function add(index, value) {
        if (inRange(index)) {
            seqArr.splice(index, 0, value);
        } else {
            console.log("Invalid placement!");
        }
    }

    function strike(index, radius) {

        if (inRange(index)) {
            let start = index - radius;
            let end = index + radius;
            if (start >= 0 && end < seqArr.length) {
                seqArr.splice(start, end - start + 1);
            } else {
                console.log("Strike missed!");
            }
        } else {
            console.log("Strike missed!");
        }
    }

    function inRange(arr1) {
        return arr1 >= 0 && arr1 < seqArr.length;
    }

}