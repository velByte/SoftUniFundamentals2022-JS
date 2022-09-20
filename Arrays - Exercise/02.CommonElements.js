function solve(arr1, arr2) {

    let length = 0;
    let buff;

    let result = (a, b) => {
        let foundCommonWords = [];
        let foundCommonWordsCount = 0;

        for (let i = 0; i < a.length; i++) {
            if (b.includes(a[i])) {
                foundCommonWords.push(a[i]);
                foundCommonWordsCount++
            }
        }
        return {
            foundCommonWords: foundCommonWords,
            foundCommonWordsCount: foundCommonWordsCount
        }
    }

    let objRes = arr1.length >= arr2.length ? result(arr1, arr2) : result(arr2, arr1); 
    
    for (let match of objRes.foundCommonWords) {
        console.log(match);
    }

}

solve(["Hey", "hello", 2, 4, "Peter", "e"],
    ["Petar", 10, "hey", 4, "hello", "2"])