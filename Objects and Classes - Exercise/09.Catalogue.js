function catalogue(input) {

    let catalogue = new Map();

    for (let item of input) {
        let [product, price] = item.split(' : ');
        price = Number(price);
        catalogue.set(product, price);
    }

    let sorted = new Map([...catalogue.entries()].sort(
        (a, b) => {
            if (a[0].toLowerCase() < b[0].toLowerCase()) {
                return -1;
            } else {
                return 1;
            }
        }
    ));

    let letter = '';
    for (let [product, price] of sorted) {
        if (product[0] !== letter) {
            letter = product[0];
            console.log(letter);
        }
        console.log(`  ${product}: ${price}`);
    }

}

let input = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]




catalogue(input);