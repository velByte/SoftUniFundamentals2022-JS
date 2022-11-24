function solve(input) {

    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;

    let total = 0;
    console.log(`Bought furniture:`);
    while ((line = pattern.exec(input)) !== null) {
        let name = line.groups.name;
        let price = Number(line.groups.price);
        let quantity = Number(line.groups.quantity);

        total += price * quantity;
        console.log(name);
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);
}