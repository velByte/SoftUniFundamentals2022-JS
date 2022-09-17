function solve(n) {

    for (let i = 0; i < n; i++) {

        for (let k = 0; k < n; k++) {

            for (let m = 0; m < n; m++) {
                console.log(`${String.fromCharCode(97 + i)}${String.fromCharCode(97 + k)}${String.fromCharCode(97 + m)}`)
            }

        }

    }

}

solve(2);