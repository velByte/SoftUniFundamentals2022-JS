function solve(input) {

    let leadersMap = new Map();

    class Leader {
        constructor(leaderName) {
            this.leaderName = leaderName;
            this.totalTrups = 0;
            this.armys = new Map();
        }
        add(armyName, armyCount) {
            if (!this.armys.has(armyName)) {
                this.armys.set(armyName, 0)
            }
            let count = this.armys.get(armyName) + Number(armyCount);
            this.totalTrups += Number(armyCount);
            this.armys.set(armyName, count)

            this.armys = new Map([...this.armys.entries()].sort((a, b) => {
                return b[1] - a[1]
            }))

        }

        hasArmy(armyName) {
            return this.armys.has(armyName);
        }
    }

    input.forEach(item => {
        if (item.includes("arrives")) {
            let name = item.split(" ")[0]
            addLeader(name);
        } else if (item.includes("defeated")) {
            let name = item.split(" ")[0]
            defeated(name);
        } else if (item.includes(":")) {
            let [leaderName, armyInfo] = item.split(": ");
            addArmy(leaderName, armyInfo);
        } else if (item.includes("+")) {
            let [armyName, armyCount] = item.split(" + ");
            addCount2Army(armyName, armyCount);
        }
    })


    function addLeader(name) {
        leadersMap.set(name, new Leader(name))
    }

    function defeated(name) {
        if (leadersMap.has(name)) {
            leadersMap.delete(name)
        }
    }

    function addArmy(leaderName, armyInfo) {
        let [armyName, armyCount] = armyInfo.split(", ");
        if (leadersMap.has(leaderName)) {
            leadersMap.get(leaderName).add(armyName, armyCount);
        }
    }

    function addCount2Army(armyName, armyCount) {

        leadersMap.forEach((value, key) => {
            if (value.hasArmy(armyName)) {
                value.add(armyName, armyCount)
            }
        })

    }

    leadersMap = new Map([...leadersMap.entries()].sort((a, b) => {
        return b[1].totalTrups - a[1].totalTrups;
    }))

    leadersMap.forEach((value, key) => {
        console.log(key + ": " + value.totalTrups);
        value.armys.forEach((v, k) => {
            console.log(`>>> ${k} - ${v}`);
        })
    });

}

let input = ['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205']

solve(input);