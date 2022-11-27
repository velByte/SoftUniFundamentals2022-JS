function solve(input) {
    let message = input.shift();

    let commands = {
        "InsertSpace": insertSpace,
        "Reverse": reverse,
        "ChangeAll": changeAll
    }

    while (input[0] != "Reveal") {
        let [cmd, ...arg] = input.shift().split(":|:");

        commands[cmd](arg);
    }

    function insertSpace(index) {
        index = Number(index);
        message = message.substring(0, index) + " " + message.substring(index);
        console.log(message);
    }

    function reverse(substring) {

        substring = substring[0];
        if (message.includes(substring)) {
            message = message.replace(substring, "");
            message += substring.split("").reverse().join("");
            console.log(message);
        } else {
            console.log("error");
        }
    }

    function changeAll(param) {
        let [substring, replacement] = param;
        let regex = new RegExp(substring, "g");
        message = message.replace(regex, replacement);
        console.log(message);
    }

    console.log(`You have a new text message: ${message}`);
}

let input = [
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]



solve(input); 