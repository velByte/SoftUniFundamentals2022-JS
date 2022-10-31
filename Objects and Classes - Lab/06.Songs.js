

function solve(input) {

    class Song {
        typeList;
        name;
        time;
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

    }

    let songs = [];
    let numberOfSongs = Number(input.shift());
    let typeSong = input.pop();

    for (let item of input) {
        let [typeList, name, time] = item.split("_");
        songs.push(new Song(typeList, name, time));
    }

    if (typeSong === "all") {
        songs.forEach(item => console.log(item.name));
    } else {
        let filteredArr = songs.filter(item => item.typeList === typeSong);
        filteredArr.forEach(i => console.log(i.name))
    }

}


let input = [3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'];

solve(input); 
