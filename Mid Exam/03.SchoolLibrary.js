function solve(input) {

    let index = 0;
    let shelfArr = input[index++].split("&");

    while (input[index] != "Done") {

        let buff = input[index].split(" | ");
        let cmd = buff[0];

        switch (cmd) {
            case "Add Book":
                add(buff[1]);
                break;
            case "Take Book":
                take(buff[1]);
                break;
            case "Swap Books":
                swap(buff[1], buff[2]);
                break;
            case "Insert Book":
                insert(buff[1]);
                break;
            case "Check Book":
                check(Number(buff[1]));
                break;

            default:
                break;
        }

        index++;
    }

    console.log(shelfArr.join(", "));

    function add(bookName) {
        if (!isIncludet(bookName)) {
            shelfArr.unshift(bookName);
        }
    }

    function take(bookName) {
        if (isIncludet(bookName)) {
            let bookIndex = getItemIndex(bookName);
            shelfArr.splice(bookIndex, 1);
        }
    }

    function swap(book1, book2) {
        if (isIncludet(book1) && isIncludet(book2)) {

            let book1Index = getItemIndex(book1);
            let book2Index = getItemIndex(book2);

            [shelfArr[book1Index], shelfArr[book2Index]] = [shelfArr[book2Index], shelfArr[book1Index]]
        }
    }

    function insert(bookName) {
        if (!isIncludet(bookName)) {
            shelfArr.push(bookName);
        }
    }

    function check(bookIndex) {
        if (inRange(bookIndex)) {
            console.log(shelfArr[bookIndex]);
        }
    }

    function inRange(i) {
        return i >= 0 && i < shelfArr.length;
    }

    function isIncludet(itemName) {
        return shelfArr.includes(itemName);
    }

    function getItemIndex(itemName) {
        return shelfArr.indexOf(itemName);
    }

}

let input = (["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"])


    ;

solve(input);
