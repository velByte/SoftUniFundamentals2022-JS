
function start(input) {

    let str = input[0];
    let word = input[1];
    let regex = /\b_+\b/gi;
    let templatate = str.match(regex);

    for (let i = 0; i < templatate.length; i++) {
        let regex = new RegExp(`\\b${"_".repeat(word[i].length)}\\b`, "gi");
        str = str.replace(regex, word[i]);
    }
    console.log(str);

}


start(
    ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
        ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);
