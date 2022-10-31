function solve(input) {

    let cats = [];

    class Cat {

        name;
        age;

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let item of input) {
        let [name, age] = item.split(" ");
        cats.push(new Cat(name, age));
    }

    for (let cat of cats) {
        cat.meow();
    }

}

let input = ['Mellow 2', 'Tom 5'];

solve(input);