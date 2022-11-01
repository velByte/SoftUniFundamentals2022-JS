function solve(arr1, arr2) {

    let tempFoundProductIndex = null;

    class Product {
        name;
        quantity;

        constructor(name, quantity) {
            this.name = name;
            this.quantity = Number(quantity);
        }

        add(num) {
            this.quantity += Number(num);
        }
    }

    let inventory = [];

    for (let i = 0; i < arr1.length; i += 2) {
        let productName = arr1[i];
        let productQuantity = arr1[i + 1];
        inventory.push(new Product(productName, productQuantity));
    }

    for (let i = 0; i < arr2.length; i += 2) {
        let productName = arr2[i];
        let productQuantity = arr2[i + 1];
        if (includeProduct(productName)) {
            inventory[tempFoundProductIndex].add(productQuantity);
        } else {
            inventory.push(new Product(productName, productQuantity))
        }

    }

    function includeProduct(productName) {

        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].name === productName) {
                tempFoundProductIndex = i;
                return true;
            };
        }

        return false;

    }

    inventory.forEach(item => {
        console.log(`${item.name} -> ${item.quantity}`);
    })

}

let arr1 = [
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
];

let arr2 = [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
];

solve(arr1, arr2);
