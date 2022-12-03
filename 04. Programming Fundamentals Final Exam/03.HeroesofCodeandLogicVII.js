function solve(input){

    let heroesCount = Number(input.shift()); 
    let heroesMap = new Map(); 
    let commands = {
        "CastSpell" : castSpell, 
        "TakeDamage" : takeDamage, 
        "Recharge": recharge, 
        "Heal": heal
    }

    for (let i = 0; i < heroesCount; i++){
        let [heroName, hp, mp] = input.shift().split(" ");
        hp = Number(hp); 
        mp = Number(mp);
        heroesMap.set(heroName, {heroName, hp, mp});
    }
    while (input[0] != "End"){
        let [cmd, ...args] = input.shift().split(" - ");
        commands[cmd](args);
    }

    function castSpell([heroName, mpNeeded, spellName]){
        mpNeeded = Number(mpNeeded); 
        let heroReference = heroesMap.get(heroName);
        if (heroReference.mp >= mpNeeded){
            heroReference.mp -= mpNeeded; 
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroReference.mp} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }

    }
    function takeDamage([heroName, damage, attacker]){
        damage = Number(damage); 
        let heroReference = heroesMap.get(heroName);
        heroReference.hp -= damage;

        if(heroReference.hp > 0){
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroReference.hp} HP left!`);
        } else {
            heroesMap.delete(heroName);
            console.log(`${heroName} has been killed by ${attacker}!`);
        }
       
    }
    function recharge([heroName, amount]){
        //MP max 200
        //{hero name} recharged for {amount recovered} MP!
        amount = Number(amount);
        let heroReference = heroesMap.get(heroName);
        let currentmp = heroReference.mp; 
        heroReference.mp = Math.min(200, heroReference.mp + amount);
        console.log(`${heroName} recharged for ${heroReference.mp - currentmp} MP!`);
    }
    function heal([heroName, amount]){
        //HP max 100
        //{hero name} healed for {amount recovered} HP!
        amount = Number(amount);
        let heroReference = heroesMap.get(heroName);
        let currentHP = heroReference.hp; 
        heroReference.hp = Math.min(100, heroReference.hp + amount);
        console.log(`${heroName} healed for ${heroReference.hp - currentHP} HP!`)
    }

    heroesMap.forEach((value, key) => {
        console.log(key);
        console.log(" HP:", value.hp);
        console.log(" MP:", value.mp);
    })
}

let input = [
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ]

solve(input);