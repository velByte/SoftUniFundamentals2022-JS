function solve(input) {
    const maxHeigth = 30;
    let sectionArr = input.map(n => Number(n));
    let daysCount = 0;
    let totalConcredAdded = 0;
    let usedConcret = [];

    let completeFlag = false;

    let isComplete = () => {
        for (let i = 0; i < sectionArr.length; i++) {
            if (sectionArr[i] < maxHeigth) return false;
        }
        return true;
    }

    while (!completeFlag) {

        daysCount++;
        let concreteDay = 0;
        for (let i = 0; i < sectionArr.length; i++) {
            if (sectionArr[i] < 30) {
                sectionArr[i] += 1;
                concreteDay += 195;
            }
        }
        totalConcredAdded += concreteDay;
        usedConcret.push(concreteDay)
        completeFlag = isComplete();
    }


    console.log(usedConcret.join(", "));
    console.log(totalConcredAdded * 1900 + " pesos");

}

solve([17])