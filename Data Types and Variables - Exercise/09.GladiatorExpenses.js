function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let isHelmetBroken = false;
    let isSwordBroken = false;
    let isShildBroken = false;

    let helmetBrokeCount = 0;
    let swordBrokeCount = 0;
    let shildBrokeCount = 0;
    let armorBrokeCount = 0;


    for (let i = 1; i <= lostFightsCount; i++) {

        if (i % 2 === 0) {
            isHelmetBroken = true;
            helmetBrokeCount++;
        }
        if (i % 3 === 0) {
            isSwordBroken = true;
            swordBrokeCount++;
        }
        if (isHelmetBroken && isSwordBroken) {
            isShildBroken = true;
            shildBrokeCount++;
        }
        if (isShildBroken && shildBrokeCount % 2 === 0) {
            isArmoreBroken = true;
            armorBrokeCount++;
        }

        isHelmetBroken = false;
        isSwordBroken = false;
        isShildBroken = false;
        isArmoreBroken = false;

    }
    let totalCost =
        helmetBrokeCount * helmetPrice
        + swordBrokeCount * swordPrice
        + shildBrokeCount * shieldPrice
        + armorBrokeCount * armorPrice;

    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);

}

solve(7, 2, 3, 4, 5);