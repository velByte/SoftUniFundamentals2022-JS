function solve(input) {


    let inputArr = input.split(" ");
    let legendaryItem = "";
    let keyMaterials = ["shards", "fragments", "motes"];
    let inventory = new Map();
    let keyInventory = new Map([
        ["shards", 0],
        ["fragments", 0],
        ["motes", 0]
    ]);

    let index = 0;

    while (index < inputArr.length) {

        let quantyty = Number(inputArr[index++]);
        let material = inputArr[index++].toLowerCase();

        if (keyMaterials.includes(material)) {
            add2Inventory(material, quantyty, keyInventory);
        } else {
            add2Inventory(material, quantyty, inventory);
        }
        if (isFinish()) {
            break;
        }
    }


    keyInventory = new Map([...keyInventory.entries()].sort((a, b) => {
        if (a[1] > b[1]) return -1;
        if (a[1] < b[1]) return 1;
        if (a[1] === b[1]) return a[0].localeCompare(b[0])
    }))

    inventory = new Map([...inventory.entries()].sort((a, b) => {
        return a[0].localeCompare(b[0])
    }))


    printResult();




    function isFinish() {
        if (keyInventory.has("shards")) {
            if (keyInventory.get("shards") >= 250) {
                keyInventory.set("shards", keyInventory.get("shards") - 250);
                legendaryItem = "Shadowmourne";
                return "Shadowmourne"
            }
        }
        if (keyInventory.has("fragments")) {
            if (keyInventory.get("fragments") >= 250) {
                keyInventory.set("fragments", keyInventory.get("fragments") - 250)
                legendaryItem = "Valanyr";
                return "Valanyr"
            }
        }
        if (keyInventory.has("motes")) {
            if (keyInventory.get("motes") >= 250) {
                keyInventory.set("motes", keyInventory.get("motes") - 250)
                legendaryItem = "Dragonwrath";
                return "Dragonwrath"
            }
        }
        return false;
    }

    function add2Inventory(item, quantyty, inv) {
        if (inv.has(item)) {
            quantyty = inv.get(item) + quantyty;
        }
        inv.set(item, quantyty)
    }

    function printResult() {
        console.log(legendaryItem, "obtained!");
        keyInventory.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        })
        inventory.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        })
    }
}

let input = '123 silver 123 sali 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver ';

solve(input)
