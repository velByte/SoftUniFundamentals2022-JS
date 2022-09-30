function solve(input) {

    let arr = []

    function add2front(num) {
        arr.unshift(num);
    }

    function add2end(num) {
        arr.push(num);
    }


    input.map(x => {
        if (x < 0) add2front(x);
        else add2end(x);
    })

    arr.map(x => {
        console.log(x);
    })


}

solve(["7", "-2", "8", "9"])