function solve(input) {

    class Flight {
        destination;
        state;
        number;
        statusChanged;

        constructor(number, destination) {
            this.destination = destination;
            this.number = number;
            this.state = "Planned";
            this.statusChanged = false;
        }

        cancelled(statu) {
            this.state = statu;
            this.statusChanged = true;
        }
        readyToFly() {
            this.state = "Ready to fly";
            this.statusChanged = true;
        }
        toString() {
            return {
                Destination: this.destination,
                Status: this.state
            }
        }


    }

    let flightMap = new Map();

    input[0].map(item => {
        let [number, destination] = item.split(" ");
        flightMap.set(number, new Flight(number, destination))
    })

    input[1].map(item => {
        let [number, newStatus] = item.split(" ");
        if (flightMap.has(number)) {
            flightMap.get(number).cancelled(newStatus);
        }
    })

    if (input[2][0] === "Ready to fly") {
        flightMap.forEach(item => {
            if (!item.statusChanged) {
                item.readyToFly();
                console.log(item.toString());
            }
        })
    } else {
        flightMap.forEach(item => {
            if (item.statusChanged) {
                console.log(item.toString());
            }
        })
    }
}

let input = [['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]


solve(input);
