function vacation(groutOfPeople, type, weekDay) {
  let priceTable = {
    Students: {
      Friday: 8.45,
      Saturday: 9.8,
      Sunday: 10.46,
    },
    Business: {
      Friday: 10.9,
      Saturday: 15.6,
      Sunday: 16,
    },
    Regular: {
      Friday: 15,
      Saturday: 20,
      Sunday: 22.5,
    },
  };

  let priceProPercon = priceTable[type][weekDay];

  let discount = 0;

  if (type === "Students" && groutOfPeople >= 30) {
    discount = 0.15;
  } else if (type === "Business" && groutOfPeople >= 100) {
    groutOfPeople -= 10;
  } else if (type === "Regular" && groutOfPeople >= 10 && groutOfPeople <= 20) {
    discount = 0.05;
  }

  let totalPrice = groutOfPeople * priceProPercon * (1 - discount);

  return `Total price: ${totalPrice.toFixed(2)}`;
}

console.log(vacation(30, "Students", "Sunday"));
