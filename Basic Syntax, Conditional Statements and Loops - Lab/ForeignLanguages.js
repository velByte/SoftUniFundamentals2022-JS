function foreignLanguages(countryName) {
    let undefined = "unknown";

    let englischResponse = "English"
    let spanishResponse = "Spanish"
    let respone = {
        "USA": englischResponse,
        "England": englischResponse,
        "Spain": spanishResponse,
        "Argentina": spanishResponse,
        "Mexico": spanishResponse
    }
    return respone[countryName];
}


console.log(foreignLanguages("UsSA"))