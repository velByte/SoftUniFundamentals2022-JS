
function solve(input) {


    class Movie {

        constructor(name) {
            this.name = name;
        }

        setDirector(directorName) {
            this.director = directorName;
        }
        setDate(date) {
            this.date = date;
        }
    }

    let movieArray = [];

    input.forEach(item => {
        let buff = item.split(" ");

        if (buff.includes("addMovie")) {
            buff.shift();
            addMovie(buff.join(" "))
        } else if (buff.includes("directedBy")) {
            let indexOfCmd = buff.indexOf("directedBy");
            let movieName = buff.slice(0, indexOfCmd).join(" ");
            let directedBy = buff.slice(indexOfCmd + 1, buff.length).join(" ");
            addDirector(movieName, directedBy);
        } else if (buff.includes("onDate")) {
            let indexOfCmd = buff.indexOf("onDate");
            let movieName = buff.slice(0, indexOfCmd).join(" ");
            let date = buff.slice(indexOfCmd + 1, buff.length).join(" ");
            addDate(movieName, date);
        }
    })

    movieArray.forEach(item => {
        if (item.name != undefined && item.director != undefined && item.date != undefined) {
            console.log(JSON.stringify(item));
        }
    })


    //Utility
    function addDirector(movieName, directedBy) {
        let temp = movieArray.find(obj => obj.name === movieName);

        if (!(temp === undefined)) {
            temp.setDirector(directedBy);
        }
    }

    function addMovie(movieName) {
        movieArray.push(new Movie(movieName));
    }

    function addDate(movieName, date) {
        let temp = movieArray.find(obj => obj.name === movieName);

        if (!(temp === undefined)) {
            temp.setDate(date);
        }
    }

}


let input = [
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]


solve(input)
