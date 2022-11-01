function solve(input) {

    class Hero {
        constructor(heroName, heroLevel, items) {
            this.name = heroName;
            this.level = Number(heroLevel);
            this.items = items.split(", ");
        }
    }

    let herosArr = [];

    input.forEach(item => {
        herosArr.push(new Hero(...item.split(" / ")))
    })

    herosArr.sort((a, b) => a.level - b.level);

    herosArr.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    })
}

let input = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
];

solve(input);


