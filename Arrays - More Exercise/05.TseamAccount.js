function solve(input) {
    let resultArr = input.shift().split(" ");
    let index = 0;
    let command = input[index];

    while (command != "Play!") {
        let [action, game] = command.split(" ");
        switch (action) {
            case "Install":
                if (!resultArr.includes(game)) {
                    resultArr.push(game);
                }
                break;
            case "Uninstall":
                if (resultArr.includes(game)) {
                    let index = resultArr.indexOf(game);
                    resultArr.splice(index, 1);
                }
                break;
            case "Update":
                if (resultArr.includes(game)) {
                    let index = resultArr.indexOf(game);
                    resultArr.splice(index, 1);
                    resultArr.push(game);
                }
                break;
            case "Expansion":
                let [gameName, expansion] = game.split("-");
                if (resultArr.includes(gameName)) {
                    let index = resultArr.indexOf(gameName);
                    resultArr.splice(index + 1, 0, `${gameName}:${expansion}`);
                }
                break;
            default:
                break;
        }
        index++;
        command = input[index];
    }
    console.log(resultArr.join(" "));
}


solve(["CS WoW Diablo",
    "Install LoL",
    "Uninstall WoW",
    "Update Diablo",
    "Expansion CS-Go",
    "Play!"])
solve(["CS WoW Diablo",
    "Uninstall XCOM",
    "Install XCOM",
    "Install ",
    "Update PeshoGame",
    "Update WoW",
    "Expansion Civ-V",
    "Play!"])