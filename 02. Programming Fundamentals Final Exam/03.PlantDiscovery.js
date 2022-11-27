function plantDiscovery(input) {
    let initNumber = Number(input.shift());
    let plantsMap = new Map();

    let actions = {
        "Rate": rate,
        "Update": update,
        "Reset": reset
    }
    for (let i = 0; i < initNumber; i++) {
        let [plant, rarity] = input.shift().split("<->");
        let raiting = [];
        plantsMap.set(plant, { rarity, raiting });
    }
    // console.log(plantsMap);
    while (input[0] != "Exhibition") {
        let rawItem = input.shift();
        let [cmd, args] = rawItem.split(": ");
        actions[cmd](...args.split(" - "));
    }
    function rate(plant, raiting) {
        if (plantsMap.has(plant)) {
            plantsMap.get(plant).raiting.push(Number(raiting));
        } else {
            console.log("error");
        }
    }
    function update(plant, rarity) {
        if (plantsMap.has(plant)) {
            plantsMap.get(plant).rarity = rarity;
        } else {
            console.log("error");
        }
    }
    function reset(plant) {

        if (plantsMap.has(plant)) {
            plantsMap.get(plant).raiting = [];
        } else {
            console.log("error");
        }

    }
    console.log("Plants for the exhibition:");
    plantsMap.forEach((value, key) => {
        let raitingSum = value.raiting.length > 0 ? value.raiting.reduce((a, b) => a + b) : 0;
        let average = value.raiting.length > 0 ? raitingSum / value.raiting.length : 0;
        console.log(`- ${key}; Rarity: ${value.rarity}; Rating: ${average.toFixed(2)}`);
    })
}


let input = (["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])


plantDiscovery(input);