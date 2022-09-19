function solve(num) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let result = days[num - 1] != undefined ? days[num - 1] : 'Invalid day!';
    console.log(result);
}


