function solve(input) {
    const initHealth = 100;
    let health = initHealth;
    let bitcoins = 0;
    let inputArr = input.split("|");
    let room = 0;

    let isDead = () => {
        return health <= 0;
    }

    for (let i = 0; i < inputArr.length; i++) {
        room++;
        let buff = inputArr[i].split(" ");
        let cmd = buff[0];
        let value = Number(buff[1]);

        switch (cmd) {
            case "potion":
                potion(value);
                break;
            case "chest":
                chest(value);
                break;
            default:
                if (defult(...buff)) {
                    return;
                }
                break;
        }

    }

    function potion(value) {
        let added = 0;

        if (value + health > initHealth) {
            added = initHealth - health;
        } else {
            added = value;
        }

        health += added;

        console.log(`You healed for ${added} hp.`);
        console.log(`Current health: ${health} hp.`);
    }

    function chest(value) {

        bitcoins += value;
        console.log(`You found ${value} bitcoins.`);

    }

    function defult(monster, valut) {

        health -= Number(valut);

        if (isDead()) {
            console.log(`You died! Killed by ${monster}.`);
            console.log(`Best room: ${room}`);
            return true;
        } else {
            console.log(`You slayed ${monster}.`);
        }

        return false;
    }



    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);


}

let input = "rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000";

solve(input);