function ages(input){
    if (input >= 0 && input <= 2) {
        console.log("baby");
    } else if (input >= 3 && input <= 13) {
        console.log("child");
    } else if (input >= 14 && input <= 19) {
        console.log("teenager");
    } else if (input >= 20 && input <= 65) {
        console.log("adult");
    } else if (input >= 66) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    } 
}


