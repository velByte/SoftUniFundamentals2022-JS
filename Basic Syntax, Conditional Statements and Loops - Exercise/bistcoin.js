btcMining = (input) => {
  let btcPrice = 11949.16;
  let goldPrice = 67.51;
  let firstDay = 0;
  let totalBtc = 0;
  let totalMoney = 0;
  let daysSpent = 0;
  for (let i = 0; i < input.length; i++) {
    daysSpent++;
    let dayMoney = 0;

    if (daysSpent % 3 === 0 && i !== 0) {
      dayMoney = input[i] * goldPrice;
      dayMoney = dayMoney - dayMoney * 0.3;
    } else {
      dayMoney = input[i] * goldPrice;
    }
    totalMoney += dayMoney;
    if (totalMoney >= btcPrice) {
      let btc = Math.floor(totalMoney / btcPrice);
      totalBtc += btc;
      totalMoney -= btc * btcPrice;
      if (firstDay === 0) {
        firstDay = daysSpent;
      }
    }
  }
  console.log(`Bought bitcoins: ${totalBtc}`);
    if (firstDay !== 0) {
      console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
};

let input = [3124.15, 504.212, 2511.124];
// let input = [100, 200, 300];

btcMining(input);

// Bought bitcoins: 30
// Day of the first purchased bitcoin: 1
// Left money: 5144.11 lv.
