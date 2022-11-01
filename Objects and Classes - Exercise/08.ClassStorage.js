function solve() {

    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = new Array();
            this.totalCost = 0;
        }

        addProduct(product) {
            this.storage.push(product);
            this.capacity -= product.quantity
            this.totalCost += (product.price * product.quantity);
        }
        getProducts() {
            let result = []
            this.storage.map(item => {
                result.push(JSON.stringify(item))
            })
            return result.join("\n");
        }

    }


    let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
    let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
    let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    console.log(storage.getProducts());
    console.log("capacity", storage.capacity);
    console.log(storage.totalCost);

}

solve();