
function start(str) {
    console.log(str.replace(/(.)\1+/g, "$1"));
}


start('aaaaabbbbbcdddeeeedssaa');
