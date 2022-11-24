function solve(input) {

    let n = input.shift()
    let attackPlanetsList = new Map();
    let destroyedPlanetList = new Map();


    for (let i = 0; i < n; i++) {
        let massageDecripted = input.shift();
        let foundLetters = countLetters(massageDecripted);
        let massageEntcriped = removeFromChar(massageDecripted, foundLetters);
        extractInfo(massageEntcriped);
    }

    attackPlanetsList = new Map([...attackPlanetsList.entries()].sort((a, b) => {
        return a[0].localeCompare(b[0]);
    }))
    destroyedPlanetList = new Map([...destroyedPlanetList.entries()].sort((a, b) => {
        return a[0].localeCompare(b[0]);
    }))


    console.log("Attacked planets:", attackPlanetsList.size);
    attackPlanetsList.forEach((value, key) => {
        console.log("->", value.planetName);
    })
    console.log("Destroyed planets:", destroyedPlanetList.size);
    destroyedPlanetList.forEach((value, key) => {
        console.log("->", value.planetName);
    })

    function extractInfo(text) {
        //Each message should have a planet name, population, attack type ('A', as an attack or 'D', as destruction), and soldier count.
        // let pattern = /@(?<planetName>[A-Za-z]+)[^@\-\!\>.]*:(?<population>[0-9]+)[^\@\-\:\>]*\!(?<attacTyp>[AD])\![^\@\:]*\-\>(?<soldierCount>[0-9]+)/
        let pattern = /@(?<planetName>[A-Za-z]+)[^@\-\!\>]*:(?<population>[0-9]+)[^\@\-\:\>]*\!(?<attacTyp>[AD])\![^\@\:]*\-\>(?<soldierCount>[0-9]+)/
        let match = pattern.exec(text);
        if (match) {
            let planetName = match.groups.planetName;
            let population = Number(match.groups.population);
            let attacTyp = match.groups.attacTyp;
            let soldierCount = Number(match.groups.soldierCount);
            if (attacTyp === "A") {
                attackPlanetsList.set(planetName, { population, soldierCount, planetName });
            } else if (attacTyp === "D") {
                destroyedPlanetList.set(planetName, { population, soldierCount, planetName });
            }
        }
    }

    function countLetters(text) {

        let pattern = /[star]/gi;
        let match = pattern.exec(text);
        if (match) {
            let count = 0;
            while (match) {
                count++;
                match = pattern.exec(text);
            }
            return count;
        }
        return 0;
    }
    function removeFromChar(text, count) {
        let result = [];
        for (let i = 0; i < text.length; i++) {
            let currentCharCode = text[i].charCodeAt(0);
            let newCharCode = currentCharCode - count;
            result.push(String.fromCharCode(newCharCode))
        }
        return result.join("");
    }

}

solve(['3', 'sad', 'GQhrr|A977777(H(TTTT', 'EHfytsnhf?8555&I&2C9555SR', 'EHfsytsnhf?8555&I&2C9555SR']
);


// -> Cantonica
// -> Coruscant
