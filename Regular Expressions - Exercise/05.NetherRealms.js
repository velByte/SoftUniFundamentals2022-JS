function solve(input) {
    function getHealth(text) {
        //The sum of the ascii codes of all characters (excluding numbers (0-9), arithmetic symbols ('+', '-', '*', '/') and delimiter dot ('.')) gives a demon's total health
        let pattern = /[^0-9\+\-\*\/\.]/g;
        let match = pattern.exec(text);
        let health = 0;
        while (match) {
            health += match[0].charCodeAt(0);
            match = pattern.exec(text);
        }
        return health;
    }

    function getDamage(text) {
        let resultNumbers = [];
        let resultSymbols = [];

        let pattern = /[-+]*[0-9]+[.0-9]*/g;
        let pattern2 = /[*\/]/g;
        let match = pattern.exec(text);
        while (match) {
            resultNumbers.push(Number(match[0]));
            match = pattern.exec(text);
        }
        let match2 = pattern2.exec(text);
        while (match2) {
            resultSymbols.push(match2[0]);
            match2 = pattern2.exec(text);
        }
        let damage = resultNumbers.reduce((a, b) => a + b, 0);
        for (let i = 0; i < resultSymbols.length; i++) {
            if (resultSymbols[i] === "*") {
                damage *= 2;
            } else if (resultSymbols[i] === "/") {
                damage /= 2;
            }
        }
        return damage;
    }


    let deamons = new Map();

    let namesArr = input.split(/[, ]+/g);

    for (let name of namesArr) {
        let damage = getDamage(name);
        let healt = getHealth(name);

        deamons.set(name, { damage, healt });

    };

    let sortedDeamons = [...deamons.entries()].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, { damage, healt }] of sortedDeamons) {
        console.log(`${name} - ${healt} health, ${damage.toFixed(2)} damage`);
    }
}

solve("Gos/ho")