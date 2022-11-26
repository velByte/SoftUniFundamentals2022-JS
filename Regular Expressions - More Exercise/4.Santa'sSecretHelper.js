function solve(input) {

    let key = Number(input.shift());

    input.forEach(line => {
        if (line === "end") {
            return;
        }
        let decodeMassage = line.split("").map(x => String.fromCharCode(x.charCodeAt(0) - key)).join("");
        let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<behaviour>[GN])!/g;
        let match = pattern.exec(decodeMassage);
        if (match) {
            if (match.groups.behaviour === "G") {
                console.log(match.groups.name);
            }
        }
    });

}




let test = [
    '3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
]
solve(test)
