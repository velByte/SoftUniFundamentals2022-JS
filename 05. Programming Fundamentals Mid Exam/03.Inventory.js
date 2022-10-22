function solve(input) {
    let index = 0;
    let inventory = input[index++].split(", ");

    while (input[index] != "Craft!") {

        let [cmd, item] = input[index].split(" - ");

        switch (cmd) {
            case "Collect":
                collect(item)
                break;
            case "Drop":
                drop(item)
                break;
            case "Combine Items":
                combineItems(...item.split(":"));
                break;
            case "Renew":
                renew(item);
                break;
            default:
                break;
        }
        index++;
    }

    function collect(item) {
        if (!inInventory(item)) {
            inventory.push(item);
        }
    }

    function drop(item) {
        if (inInventory(item)) {
            let itemIndex = inventory.indexOf(item);
            inventory.splice(itemIndex, 1);
        }
    }

    function combineItems(old_item, new_item) {
        if (inInventory(old_item)) {
            let old_itemIndex = inventory.indexOf(old_item);
            inventory.splice(old_itemIndex + 1, 0, new_item)
        }
    }

    function renew(item) {

        if (inInventory(item)) {
            let itemIndex = inventory.indexOf(item);
            drop(item);
            inventory.push(item);
        }

    }

    function inInventory(item) {
        return inventory.includes(item);
    }

    console.log(inventory.join(", "));
}

let input = [
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
    ;

solve(input);