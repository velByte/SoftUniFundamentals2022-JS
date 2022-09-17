function division(number) {
  if (number % 10 === 0) {
    return "The number is divisible by 10";
  } else if (number % 7 === 0) {
    return "The number is divisible by 7";
  } else if (number % 6 === 0) {
    return "The number is divisible by 6";
  } else if (number % 3 === 0) {
    return "The number is divisible by 3";
  } else if (number % 2 === 0) {
    return "The number is divisible by 2";
  } else {
    return "Not divisible";
  }
}

console.log(division(1643));
