function solve() {


    class Laptop {
        constructor(info, quality) {
            this.info = {
                producer: info.producer,
                age: info.age,
                brand: info.brand
            }
            this.isOn = false;
            this.quality = quality;
            this.price = Number(800 - (info.age * 2) + (quality * 0.5));
        }
        turnOn() {
            if (!(this.isOn)) {
                this.isOn = true;
                this.quality -= 1;
                this.updatePrice();
            }
        }
        turnOff() {
            if (this.isOn) {
                this.isOn = false;
                this.quality -= 1;
                this.updatePrice();
            }
        }
        updatePrice() {
            this.price = Number(800 - (this.info.age * 2) + (this.quality * 0.5));
        }
        showInfo() {
            return JSON.stringify(this.info)
        }
    }


    let info = { producer: "Dell", age: 2, brand: "XPS" }
    let laptop = new Laptop(info, 10)
    laptop.turnOn()
    console.log(laptop.showInfo())
    laptop.turnOff()
    console.log(laptop.quality)
    laptop.turnOn()
    console.log(laptop.isOn)
    console.log(laptop.price)


}

solve();