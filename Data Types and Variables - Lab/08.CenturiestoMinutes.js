solve = (centuriesCount) => {
    let years = centuriesCount * 100;
    let days = Math.floor(years * 365.2422);
    let hours = days * 24;
    let minuts = hours * 60;
    // let result = `${centuriesCount} centuries = ${years} years = ${days} days = ${hours} hours = ${minuts} minutes`
    console.log(`${centuriesCount} centuries = ${years} years = ${days} days = ${hours} hours = ${minuts} minutes`)
}

solve(5)