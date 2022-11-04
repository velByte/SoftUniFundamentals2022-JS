function solve() {

    class Vehicle {

        constructor(type, model, object, fuel) {
            this.type = type;
            this.model = model;
            this.parts = {
                engine: Number(object.engine),
                power: Number(object.power),
                quality: Number(object.engine) * Number(object.power)
            }
            this.fuel = Number(fuel);
        }

        drive(fuelLose) {
            this.fuel -= fuelLose;
        }
    }

    //Test
    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);

}


solve()


