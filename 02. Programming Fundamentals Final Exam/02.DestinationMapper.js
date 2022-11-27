function solve(input) {
    let placesPattern = /(=|\/)(?<place>[A-Z][A-Za-z]{2,})\1/gm;
    let validLocationsArr = [];
    let matchs = input.matchAll(placesPattern);
    for (let match of matchs) {
        let place = match.groups.place;
        validLocationsArr.push(place);
    }

    let travelPoints = 0;

    for (let location of validLocationsArr) {
        travelPoints += location.length;
    }

    // console.log("Destinations:", validLocationsArr.join(", "));
    console.log(`Destinations: ${validLocationsArr.length > 0 ? validLocationsArr.join(", ") : ""}`);
    console.log("Travel Points:", travelPoints);
}


let input = ("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")

solve(input); 