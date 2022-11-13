function solve(input) {

    let gladiatorPool = new Map();

    class Gladiator {
        constructor(technique, skill) {
            this.technique = new Map();
            this.addSkils(technique, skill);
        };

        addSkils(technique, skill) {
            if (this.technique.has(technique)) {
                this.technique.set(technique, Math.max(this.technique.get(technique), skill));
            } else {
                this.technique.set(technique, skill);
            }

            this.getTotalSkill();

        }

        getTotalSkill() {
            let sum = 0;

            this.technique.forEach((value, key) => {
                sum += value;
            })
            this.sumSkill = sum;
            return sum;
        }

        orderTechnique() {


            let sortedResult = new Map([...this.technique.entries()].sort((a, b) => {
                if (a[1] > b[1]) {
                    return -1;
                } else if (a[1] < b[1]) {
                    return 1;
                } else if (a[1] === b[1]) {
                    return a[0].localeCompare(b[0])
                }
            }))
            this.technique = sortedResult;
        }
    }


    let index = 0;
    while (input[index] != 'Ave Cesar') {
        let item = input[index].split(" ");
        if (item.includes("vs")) {
            versus(input[index]);
        } else {
            technique(input[index]);
        }
        index++;
    }


    gladiatorPool.forEach(item => {
        item.orderTechnique();
    })

    let sortedPool = new Map([...gladiatorPool.entries()].sort((a, b) => {
        if (a[1].sumSkill > b[1].sumSkill) {
            return -1;
        } else if (a[1].sumSkill < b[1].sumSkill) {
            return 1;
        } else if (a[1].sumSkill === b[1].sumSkill) {
            return a[0].localeCompare(b[0]);
        };
    }))


    sortedPool.forEach((value, key) => {
        console.log(`${key}: ${value.sumSkill} skill`);
        value.technique.forEach((v, k) => {
            console.log(`- ${k} <!> ${v}`);
        })
    })


    function versus(item) {
        let [gladiator1, gladiator2] = item.split(" vs ")
        if (gladiatorPool.has(gladiator1) && gladiatorPool.has(gladiator2)) {
            let commonT = commonTechniques(gladiator1, gladiator2);
            if (commonT) {
                gladiatorPool.get(gladiator1).getTotalSkill();

                let totalSkillPoints1 = gladiatorPool.get(gladiator1).getTotalSkill();
                let totalSkillPoints2 = gladiatorPool.get(gladiator2).getTotalSkill();

                if (totalSkillPoints1 > totalSkillPoints2) {
                    gladiatorPool.delete(gladiator2);
                } else {
                    gladiatorPool.delete(gladiator1);
                }

            }
        }
    }

    function technique(item) {
        let [name, technique, skill] = item.split(" -> ")
        skill = Number(skill)
        if (gladiatorPool.has(name)) {
            gladiatorPool.get(name).addSkils(technique, skill)
        } else {
            gladiatorPool.set(name, new Gladiator(technique, skill));
        }

    }

    function commonTechniques(name1, name2) {
        let name1TechniqueArr = [...gladiatorPool.get(name1).technique.keys()]
        let name2TechniqueArr = [...gladiatorPool.get(name2).technique.keys()]

        let intersection = name1TechniqueArr.filter(x => name2TechniqueArr.includes(x));

        if (intersection.length === 0) {
            return false
        } else {
            return true;
        }
    }

}

let input = [
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
];

solve(input)
