
function start(input) {

    let vowels = ["a", "e", "i", "o", "u"];
    let [first, second, third] = input;

    let concat = first + second;
    let thirdLength = third.length;
    let replacedChar = 0;
    let result = [];
    for (let i = 0; i < concat.length; i++) {
        if (vowels.includes(concat[i])) {
            let p = third[replacedChar % thirdLength].toUpperCase();
            replacedChar++;
            result.push(p);
        } else {
            result.push(concat[i]);
        }
    }
    console.log("Your generated password is", result.reverse().join(""));

}




start([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
);
