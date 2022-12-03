
function solve(input){


    let barcodesCount = Number(input.shift());
    
    for (let i = 0; i < barcodesCount; i++){
        if(isValid(input[i])){
            console.log("Product group:", getProductGroup(input[i]));
        } else {
            console.log("Invalid barcode");
        };
    }


    function isValid(barcode){    
        //It is surrounded by a "@" followed by one or more "#"
        //It is at least 6 characters long (without the surrounding "@" or "#")
        //It starts with a capital letter
        //It contains only letters (lower and upper case) and digits
        //It ends with a capital letter
        let pattern = /(@[#]+)([A-Z][a-zA-Z0-9]{4,}[A-Z])(@[#]+)/gm
        return pattern.test(barcode);
        
    }

    function getProductGroup(barcode){
        let pattern = /\d+/gm; 
        let match = barcode.match(pattern); 
        if (match === null){
            return "00";
        } else {
            return match.join("");
        }
    }
}



let input = (["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])


solve(input);