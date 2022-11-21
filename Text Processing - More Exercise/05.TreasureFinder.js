function solve(input) {

    let key = input.shift().split(' ').map(Number);

    let index = 0;

    while (input[index] !== 'find') {

        let massege = decrypt(input[index]);
        let type = getType(massege);
        let coordinates = getCoordinates(massege);
        console.log(`Found ${type} at ${coordinates}`);
        index++;
    }

    function getCoordinates(massege) {
        let start = massege.indexOf('<') + 1;
        let end = massege.lastIndexOf('>');
        return massege.substring(start, end);
    }

    function getType(massage) {
        let start = massage.indexOf('&') + 1;
        let end = massage.lastIndexOf('&');
        return massage.substring(start, end);
    }

    function decrypt(text) {
        let keyIndex = 0;
        let decrypted = '';
        for (let i = 0; i < text.length; i++) {

            let current = text[i].charCodeAt(0);
            let currentKey = key[keyIndex % key.length];
            let newChar = String.fromCharCode(current - currentKey);
            decrypted += newChar;
            keyIndex++;

        }
        return decrypted;
    }

}

solve(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]

)