solve = (word) => {

    let input = String(word);
    let result = "";
    if (input === input.toUpperCase()) {
        result = "upper-case"
    } else { result = "lower-case"; }

    console.log(result);

}

solve("test")
