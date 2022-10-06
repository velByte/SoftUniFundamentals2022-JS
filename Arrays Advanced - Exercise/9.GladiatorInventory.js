function solve(input) {

    let inventory = [];

    inventory = input[0].split(" ");

    let cmdArr = input;
    cmdArr.splice(0, 1);


    function buy(item) {
        let isIncludet = inventory.includes(item);
        if (!isIncludet) inventory.push(item);
    }

    function trash(item) {
        let isIncludet = inventory.includes(item);
        if (isIncludet) {
            let indexOfItem = inventory.indexOf(item);
            inventory.splice(indexOfItem, 1);
        };
    }

    function repair(item) {
        let isIncludet = inventory.includes(item);
        if (isIncludet) {
            let indexOfItem = inventory.indexOf(item);
            inventory.push(inventory.splice(indexOfItem, 1)[0]);
        }
    }

    function upgrade(item) {
        let buff = item.split("-");

        let isIncludet = inventory.includes(buff[0]);
        if (isIncludet) {
            let indexOfItem = inventory.indexOf(buff[0]);
            let newItem = item.replace("-", ":")
            inventory.splice(indexOfItem + 1, 0, newItem)
        }
    }

    cmdArr.map(cmdItem => {
        cmdItem = cmdItem.split(" ");
        let cmd = cmdItem[0];
        let item = cmdItem[1];
        switch (cmd) {
            case "Buy":
                buy(item)
                break;
            case "Trash":
                trash(item)
                break;
            case "Repair":
                repair(item)
                break;
            case "Upgrade":
                upgrade(item)
                break;
            default:
                break;
        }

    })
    console.log(...inventory);
}

solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']

)