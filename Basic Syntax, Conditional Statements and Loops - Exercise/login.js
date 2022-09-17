login = (input) => {
  let index = 0;
  let userName = input[index++];
  let password = userName.split("").reverse().join("");
  let trys = 0;

  while (index < input.length) {
    if (input[index] === password) {
      console.log(`User ${userName} logged in.`);
      break;
    } else {
      trys++;
      if (trys === 4) {
        console.log(`User ${userName} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    }
    index++;
  }
};

login(["Acer", "login", "go", "let me in", "recA"]);
