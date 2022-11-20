function solve(words, string) {

    words = words.split(', ');

    for (let i = 0; i < words.length; i++) {
        let temp = "*".repeat(words[i].length);
        string = string.replace(temp, words[i]);
    }

    return string;

}

