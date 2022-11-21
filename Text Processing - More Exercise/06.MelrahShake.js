function solve(input) {


    //You are given a string of random characters and a pattern of random characters. 
    let text = input[0];
    let pattern = input[1];

    let end = false;
    //You need to “shake off” (remove) all of the border occurrences of that pattern, in other words, the very first match and the very last match of the pattern you find in the string.
    function shake(text, pattern) {
        let first = text.indexOf(pattern);
        let last = text.lastIndexOf(pattern);

        if (first > -1 && last > -1 && first !== last) {
            let firstPart = text.substring(0, first);
            let middelPart = text.substring(first + pattern.length, last);
            let lastPart = text.substring(last + pattern.length);
            text = firstPart + middelPart + lastPart;
            console.log('Shaked it.');
        } else {
            end = true;
        }
        return text;
    }

    //When you successfully shake off a match, you remove from the pattern the character which corresponds to the index equal to the pattern’s length / 2. 

    function removeChar(pattern) {
        let index = Math.floor(pattern.length / 2);
        let firstPart = pattern.substring(0, index);
        let lastPart = pattern.substring(index + 1);
        pattern = firstPart + lastPart;
        return pattern;
    }

    while (true) {
        text = shake(text, pattern);
        if (end) {
            break;
        }
        pattern = removeChar(pattern);
        if (pattern.length === 0) {
            break;
        }
    }
    console.log('No shake.');
    console.log(text);

}

solve(
    ['astalavista baby',
        'sta']


)