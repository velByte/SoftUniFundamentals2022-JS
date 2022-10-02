function solve(input) {

    let list = new Array();



    for (let i = 0; i < input.length; i++) {
        itemHendler(input[i]);
    }

    
    for (let i = 0; i < list.length; i++){
        console.log(list[i])
    }


    function itemHendler(itemString) {

        let rowSplit = itemString.split(/ (.*)/, 2);
        let name = rowSplit[0];
        let cmd = rowSplit[1];

        switch (cmd) {
            case "is going!":
                if (!list.includes(name)) {
                    add2list(name);
                } else {
                    console.log(`${name} is already in the list!`);
                }
                break;
            case "is not going!":
                if (list.includes(name)) {
                    removeFromList(name);
                } else {
                    console.log(`${name} is not in the list!`)
                }
                break;

            default:
                throw new Error("Switch Broken!");
                break;
        }

    }

    function add2list(item) {
        list.push(item);
    }

    function removeFromList(item) {
        let itemIndex = list.indexOf(item);
        list.splice(itemIndex, 1);
    }
}

solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)