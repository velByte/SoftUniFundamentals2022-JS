function solve(input) {
    input.sort((a, b) => {
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })
    input.map(x => console.log(x));
}