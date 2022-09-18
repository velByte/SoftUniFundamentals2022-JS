function solve(input) {

    let startYield = Number(input);
    let yieldProDay = startYield;
    let totalAmountYield = 0;
    let daysCount = 0;
    let workersConsumtion = 26;

    let sourceProfitable = true;

    while (sourceProfitable && startYield >= 100) {
        daysCount++;
        totalAmountYield += yieldProDay;
        yieldProDay -= 10;

        if (yieldProDay < 100) sourceProfitable = false;

        if (workersConsumtion <= totalAmountYield) {
            totalAmountYield -= workersConsumtion;
        } else {
            totalAmountYield = 0;
        }
    }

    totalAmountYield -= workersConsumtion;
    if (totalAmountYield < 0) totalAmountYield = 0;

    console.log(daysCount)
    console.log(totalAmountYield)
}

solve(90)