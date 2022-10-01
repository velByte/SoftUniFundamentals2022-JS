function solve(n, k) {

    let arr = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            arr[i] = 1
        } else {
            let tempArr = undefined;
            if (i - k < 0) {
                tempArr = arr.slice(0, i);
            } else {
                tempArr = arr.slice(i - k, i);
            }
            let sum = 0;
            if (tempArr.length != 0) {
                sum = tempArr.reduce((a, b) => a + b);
                arr[i] = sum;
            } else {
                arr[i] = 1
            }
        };
    }
    console.log(...arr);
}

solve(8, 2)