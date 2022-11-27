function solve(input) {
    let message = input.shift();

    input.forEach(item => {
        if (item === "Decode") return;
        let itemRaw = item.split("|");



        switch (itemRaw[0]) {
            case "ChangeAll":
                let subString = itemRaw[1];
                let replacement = itemRaw[2];
                changeAll(subString, replacement);
                break;
            case "Insert":
                let index = Number(itemRaw[1]);
                let value = itemRaw[2];
                insert(index, value);
                break;
            case "Move":
                move(Number(itemRaw[1]));
                break;
            default:
                break;
        }
    })

    console.log("The decrypted message is:", message);

    function move(n) {
        let subString = message.slice(0, n);
        message = message.slice(n) + subString;
    }

    function insert(index, value) {

        let firstPart = message.slice(0, index);
        let secondPart = message.slice(index);
        message = firstPart + value + secondPart;
    }

    function changeAll(subString, replacement) {
        let convertToString = message;
        while (convertToString.includes(subString)) {
            convertToString = convertToString.replace(subString, replacement);
        }
        message = convertToString;
    }
}