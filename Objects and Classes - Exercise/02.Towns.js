function solve(input) {

    class Towns {
        town;
        latitude;
        longitude;

        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);
        }

        toString() {
            return {
                "town": this.town,
                "latitude": this.latitude,
                "longitude": this.longitude
            }
        }
    }

    let townsArr = [];

    for (let item of input) {
        let [town, lat, lon] = item.split(" | ");
        townsArr.push(new Towns(town, lat, lon));
    }

    townsArr.forEach(item => {
        console.log(item.toString());
    })

}

let input = ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'];

solve(input);
