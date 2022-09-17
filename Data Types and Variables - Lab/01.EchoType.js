function solve(par1) {
    if (typeof (par1) === "string" || typeof (par1) === "number") {
        console.log(typeof (par1));
        console.log(par1);
    } else {
        console.log("object");
        console.log("Parameter is not suitable for printing");
    }
}

solve(5)