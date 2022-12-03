function solve(input) {

    let message = input.shift();

    let commands = {
        "TakeOdd": takeOdd,
        "Cut": cut,
        "Substitute": substitude
    }

    while (input[0] != "Done") {

        let [cmd, ...arg] = input.shift().split(" ");
        commands[cmd](arg);

    }

    console.log(`Your password is: ${message}`);

    function takeOdd(param) {
        let rawPassword = [];
        let temp = message.split("");
        for (let i = 0; i < temp.length; i++) {
            if (i % 2 != 0) {
                rawPassword.push(temp[i]);
            }
        }
        message = rawPassword.join("")
        console.log(message);
    }
    function cut([index, length]) {
        index = Number(index);
        length = Number(length);
        let substring = message.slice(index, index + length)
        message = message.replace(substring, "")
        console.log(message);
    }
    function substitude([substring, substitute]) {

        let regex;
        let specialChars = "[$&+,:;=?@#|'<>.-^*()%!]";

        if (specialChars.includes(substring)) {
            regex = edgeCaseHendler(substring)
        } else {
            regex = new RegExp(substring, "g");
        }
        if (regex.test(message)) {
            message = message.replace(regex, substitute)
            console.log(message);
        } else {
            console.log("Nothing to replace!");
        }
    }

    function edgeCaseHendler(substring) {
        let escape = "\\" + substring
        return new RegExp(escape, "g");
    }


}