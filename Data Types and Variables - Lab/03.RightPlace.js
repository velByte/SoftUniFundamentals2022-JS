function solve(str1, char1, str2) {
    // Replace _ 
    let result = str1.replace("_", char1);

    let isMatch = result === str2;
    let output = {
        true: "Matched",
        false: "Not Matched"
    }
    console.log(output[isMatch])
}

solve("Str_ng", "I", "Strong")