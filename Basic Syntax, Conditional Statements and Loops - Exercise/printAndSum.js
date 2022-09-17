function printAndSum(start, end) {
  // Using gauss formula to calculate the sum of the numbers
  // between start and end
  let sum = ((end - start + 1) * (start + end)) / 2;
  let line = "";
  for (let i = start; i <= end; i++) {
    line += i + " ";
  }
  console.log(line);
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
