
function start(str) {

    //Regex: /(?<!\S)#([A-Za-z]+)(?!\S)/gi

    let regex = new RegExp(/(?<!\S)#([A-Za-z]+)(?!\S)/gi);
    let result = str.match(regex);

    result.forEach(item => {
        console.log(item.substring(1));
    })

}


start('The symbol # is known #variously in English-speaking #regions as the #number sign');
