function solve(str, word) {

    let regex = new RegExp(`\\b${word}\\b`, 'gi');
    if (regex.test(str) && word.length > 0) {
        console.log(str.match(regex).length);
    } else {
        console.log(0);
    }
}

solve("adds asd", "")