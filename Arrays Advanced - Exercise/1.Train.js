function solve(input) {

    let wagonsArr = input[0].split(" ").map(n => Number(n));
    let maxCapacity = Number(input[1]);
    // console.log(wagonsArr);
    // console.log(maxCapacity);

    function addWagon(passengerCount) {
        wagonsArr.push(passengerCount)
    }

    function addPassangerToExistenWahon(passengerCount) {
        while (passengerCount > 0) {
            for (let i = 0; i < wagonsArr.length; i++) {
                if (wagonsArr[i] < maxCapacity) {
                    let dif = maxCapacity - wagonsArr[i];
                    if (dif >= passengerCount) {
                        wagonsArr[i] += passengerCount;
                        passengerCount = 0;
                    }
                    // else {
                    //     wagonsArr[i] += dif;
                    //     passengerCount -= dif;
                    // }
                }
            }
        }
    }

    let i = 2;

    // console.log(...wagonsArr);
    while (i < input.length) {

        let itemArr = input[i].split(" ");

        switch (itemArr[0]) {
            case "Add":
                addWagon(Number(itemArr[1]));
                break;
            default:
                addPassangerToExistenWahon(Number(itemArr[0]))
                break;
        }
        i++;
    }
    console.log(...wagonsArr);
}

solve(["32 54 21 12 4 0 23",
    "75",
    "Add 10",
    "Add 0",
    "30",
    "10",
    "75"])