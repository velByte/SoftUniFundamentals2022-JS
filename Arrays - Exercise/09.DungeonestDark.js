function solve(input) {

    let string = String(input[0]);
    let arr = string.split("|")
    let health = 100;
    let coins = 0;
    let dead = false;
    let index = 0;

    while (index < arr.length) {

        let buff = arr[index].split(" ");
        let item_monser = buff[0];
        let score = Number(buff[1]);

        switch (item_monser) {
            case "potion":
                let healedFor = 0;
                if (health + score > 100) {
                    healedFor = 100 - health
                    health = 100;
                } else {
                    healedFor = score;
                    health += score;
                }
                console.log("You healed for", healedFor, "hp.");
                console.log("Current health:", health, "hp.");
                break;
            case "chest":
                console.log("You found", score, "coins.");
                coins += score
                break;
            default:
                health -= score;
                if (health <= 0 && !dead) {
                    console.log("You died! Killed by " + item_monser + ".");
                    dead = true;
                } else {
                    console.log("You slayed " + item_monser + ".");
                }
                break;
        }

        index++;

        if (dead) {

            console.log("Best room:", index);

            break;
        }

    }

    if (!dead) {
        console.log("You've made it!");
        console.log("Coins:", coins);
        console.log("Health:", health);
    }

}

solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])