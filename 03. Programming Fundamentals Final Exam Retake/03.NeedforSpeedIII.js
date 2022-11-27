function solve(input) {

    let numbersOfCars = Number(input.shift());
    // console.log("🚀 ~ file: 03.NeedforSpeedIII.js ~ line 3 ~ solve ~ numbersOfCars", numbersOfCars)

    let commands = {
        "Drive": drive,
        "Refuel": refuel,
        "Revert": revert
    }

    let carCollection = new Map();

    for (let i = 0; i < numbersOfCars; i++) {
        let [car, mileage, fuel] = input.shift().split("|");
        mileage = Number(mileage);
        fuel = Number(fuel);
        carCollection.set(car, { car, mileage, fuel });
        // console.log("🚀 ~ file: 03.NeedforSpeedIII.js ~ line 7 ~ solve ~ car", car)
        // console.log("🚀 ~ file: 03.NeedforSpeedIII.js ~ line 7 ~ solve ~ mileage", mileage)
        // console.log("🚀 ~ file: 03.NeedforSpeedIII.js ~ line 7 ~ solve ~ fuel", fuel)
    }

    while (input[0] != "Stop") {
        let [cmd, ...arg] = input.shift().split(" : ");
        commands[cmd](arg);
    }

    function drive([car, distance, fuel]) {
        fuel = Number(fuel);
        distance = Number(distance);
        let carReference = carCollection.get(car);
        if (carReference.fuel < fuel) {
            console.log("Not enough fuel to make that ride");
        } else {
            carReference.mileage += distance;
            carReference.fuel -= fuel;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            if (carReference.mileage >= 100000) {
                console.log(`Time to sell the ${carReference.car}!`);
                carCollection.delete(carReference.car);
            }
        }
    }
    function refuel([car, fuel]) {

        fuel = Number(fuel);
        let carReference = carCollection.get(car);
        let oldFuel = carReference.fuel;
        carReference.fuel += fuel;
        if (carReference.fuel > 75) {
            carReference.fuel = 75;
        }
        console.log(`${car} refueled with ${carReference.fuel - oldFuel} liters`);
    }
    function revert([car, kilometters]) {
        let carReference = carCollection.get(car);

        carReference.mileage -= kilometters;

        if (carReference.mileage < 10000) {
            carReference.mileage = 10000;
        } else {
            console.log(`${car} mileage decreased by ${kilometters} kilometers`);
        }
    }

    carCollection.forEach((value, car) => {
        console.log(`${car} -> Mileage: ${value.mileage} kms, Fuel in the tank: ${value.fuel} lt.`);
    })

}

let input = [
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]

solve(input); 