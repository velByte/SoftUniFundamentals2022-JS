function solve(input) {

    let string = String(input[0]);
    let arr = string.split("|")
    let health = 100;
    let coins = 0;
    let dead = false;
    let index = 0;

    while (index < arr.length) {

        /* Splitting the string into an array of strings. */
        /* ["orc", "10"] */
        let buff = arr[index].split(" ");
        /* Assigning the first element of the temporary array to the variable item_monster. */
        let item_monser = buff[0];
        /* Converting the second element of the temporary array to a number. */
        let score = Number(buff[1]);

        switch (item_monser) {
            case "potion":
                /* Checking if the health is greater than 100. If it is, it will set the health to 100.
                If it is not, it will add the score to the health. */
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
                /* Adding the value of the variable score to the variable coins. */
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

    /* Checking if the player is dead. If he is not, it will print the message "You've made it!" and the
    coins and health of the player. */
    if (!dead) {
        console.log("You've made it!");
        console.log("Coins:", coins);
        console.log("Health:", health);
    }

}

solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])