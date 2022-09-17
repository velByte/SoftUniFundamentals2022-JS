thePyramidOfKingDjoser = (base, increment) => {
  let stones = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let height = 0;
  let step = 0;
  let currentBase = Number(base);
  let currentIncrement = Number(increment);

  for (let i = currentBase; i > 0; i -= 2) {
    step++;
    if (i - 2 <= 0) {
      gold = i * increment * currentIncrement;
      break;
    }
    stones += (i - 2) * (i - 2) * currentIncrement;
    if (step % 5 === 0) {
      lapisLazuli += (i * i - (i - 2) * (i - 2)) * currentIncrement;
    } else {
      marble += (i * i - (i - 2) * (i - 2)) * currentIncrement;
    }
  }

  height = Math.floor(step * currentIncrement);
  console.log("Stone required:", Math.ceil(stones));
  console.log("Marble required:", Math.ceil(marble));
  console.log("Lapis Lazuli required:", Math.ceil(lapisLazuli));
  console.log("Gold required:", Math.ceil(gold));
  console.log("Final pyramid height:", Math.floor(height));
};

thePyramidOfKingDjoser(11, 1);
