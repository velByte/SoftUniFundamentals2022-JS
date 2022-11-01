function solve(input) {
    class Employee {
        employeeName;
        employeeNumber;

        constructor(name) {
            this.employeeName = name;
            this.employeeNumber = name.length;
        }

    }

    let employeeArr = [];

    for (let employeeName of input) {
        employeeArr.push(new Employee(employeeName))
    }

    employeeArr.forEach(item => {
        console.log(`Name: ${item.employeeName} -- Personal Number: ${item.employeeNumber}`);
    })

}

let input = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];

solve(input);
