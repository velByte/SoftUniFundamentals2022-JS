solve = (numOne, numTwo, numThree) => {

    let negCount = 0;

    if (numOne < 0) negCount++;
    if (numTwo < 0) negCount++;
    if (numThree < 0) negCount++;

    return negCount % 2 == 0 ? "Positive" : "Negative";

}
solve();