
let color = "\x1b[33m%s\x1b[0m";

function solve(arr1, arr2) {

    let ident = (a, b) => {
        let res = true;
        let index = 0;
        for (let i = 0; i < a.length; i++) {
            if (Number(a[i]) != Number(b[i])) {
                res = false;
                index = i;
                return {
                    "ident": res,
                    "index": index
                }
            }
        }

        return {
            "ident": res,
            "index": undefined
        };
    }

    // let tF1 = performance.now();
    let result = (ident(arr1, arr2));
    // let tF2 = performance.now();

    // console.log(color, 'result run time: ', tF2 - tF1)

    if (result.ident) {

        let sum = arr1.reduce((prev, cur) => {
            return Number(prev) + Number(cur);
        })

        console.log("Arrays are identical. Sum:", sum);
    } else {
        console.log("Arrays are not identical. Found difference at", result.index, "index")
    }

}
const t0 = performance.now();
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

const t3 = performance.now();
solve(['10', '20', '30'], ['10', '20', '30'])
const t4 = performance.now();
console.log(`Call to doSomething took ${t4 - t3} milliseconds.`);

