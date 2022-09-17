function leapYear(year) {
  let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  return isLeap ? "yes" : "no";
}

console.log(leapYear(4));
