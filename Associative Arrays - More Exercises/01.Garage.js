function solve(input) {

    let garages = new Map();
    let id = 0;
    class Car {
        constructor(carTraits) {
            this.traits = new Map();
            carTraits = carTraits.split(", ")
            carTraits.forEach(item => {
                let [key, value] = item.split(": ");
                this.traits.set(key, value)
            })
        }
    }

    input.forEach(item => {
        id = Number.parseInt(Math.random() * 100000);

        let [garageNumber, carTraits] = item.split(" - ");
        if (!garages.has(garageNumber)) {
            garages.set(garageNumber, new Map());
        }
        garages.get(garageNumber).set(id, new Car(carTraits));
    })

    garages = new Map([...garages.entries()].sort((a, b) => {
        return a[0] - b[0]
    }))

    garages.forEach((value, key) => {
        console.log("Garage №", key);
        value.forEach((v, k) => {
            let result = [];
            v.traits.forEach((carTraitValue, carTraitKey) => {
                result.push(`${carTraitKey} - ${carTraitValue}`);
            })
            console.log("--- " + result.join(", "));
        })
    })
}


let input = ['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']

solve(input);