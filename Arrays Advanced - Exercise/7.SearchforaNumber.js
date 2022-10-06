
function solve(numArr, paramArr) {
    let arr = numArr;
    function getFirstNitems(n) {

        if (n < arr.length) {
            arr = arr.slice(0, n - 1);
        } else {
            arr = arr.slice(0, arr.length);
        }

    }

    function deleteFistNitems(n) {

        if (n < arr.length) {
            arr.splice(0, n);;
        } else {
            arr.splice(0, arr.length);
        }
    }

    let searchValue = paramArr[2];
    getFirstNitems(paramArr[0]);
    deleteFistNitems(paramArr[1]);


    let countSearchValueInArr = arr.filter(x => x == searchValue).length;

    console.log(`Number ${searchValue} occurs ${countSearchValueInArr} times.`);
}

solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)