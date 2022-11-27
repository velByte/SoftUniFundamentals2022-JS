function solve(input) {

    let resultStrin = input.shift();

    while (input[0] != "Travel") {

        let [cmd, arg1, arg2] = input.shift().split(":");
        switch (cmd) {
            case "Add Stop":
                addStop(arg1, arg2);
                break;
            case "Remove Stop":
                removeStop(arg1, arg2);
                break;
            case "Switch":
                switchStops(arg1, arg2);
                break;

        }
    }
    function addStop(index, text) {
        resultStrin = resultStrin.split("");
        if (index >= 0 && index < resultStrin.length) {
            resultStrin.splice(index, 0, text);
        }
        resultStrin = resultStrin.join("");
        console.log(resultStrin);
    }
    function removeStop(startIndex, endIndex) {
        resultStrin = resultStrin.split("");
        if (startIndex >= 0 && startIndex < resultStrin.length && endIndex >= 0 && endIndex < resultStrin.length) {
            resultStrin.splice(startIndex, endIndex - startIndex + 1);
        }
        resultStrin = resultStrin.join("");
        console.log(resultStrin);
    }
    function switchStops(old_string, new_string) {
        let regex = new RegExp(old_string, "g");
        resultStrin = resultStrin.replace(regex, new_string);
        console.log(resultStrin);
    }
    console.log(`Ready for world tour! Planned stops: ${resultStrin}`);
}