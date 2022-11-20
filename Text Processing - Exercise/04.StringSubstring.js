
function start(word, str) {

    let regex = new RegExp(`\\b${word}\\b`, 'gi');
    console.log(regex.test(str) ? word : `${word} not found!`);
}


start('javascript',
    'JavaScript is the best programming language'
);
