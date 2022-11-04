function solve(input) {

    let studentsMap = new Map();

    input.forEach(item => {
        let raw = item.split(" ");
        let name = raw.shift()
        let grades = raw.map(Number);

        if (studentsMap.has(name)) {
            grades.map(grade => {
                studentsMap.get(name).push(grade)
            })
        } else {
            studentsMap.set(name, grades)
        }

    })

    let studentsMapSorted = new Map([...studentsMap.entries()].sort((a, b) => {
        return a[0].localeCompare(b[0])
    }))

    studentsMapSorted.forEach((value, key) => {
        console.log(key + ": " + (value.reduce((a, b) => a + b) / value.length).toFixed(2));
    })

}

let input = [
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']




solve(input)
