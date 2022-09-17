function rounding(value, precision) {
  precision = precision > 15 ? 15 : precision;
  return parseFloat(value.toFixed(precision));
}

//3.1415926535897932384626433832795,2

let input = [3.1415926535897932384626433832795, 2];
let a = input[0];
let b = input[1];
let expected = 3.14;

console.log(rounding(a, b));
