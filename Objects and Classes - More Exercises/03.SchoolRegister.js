function solve(input) {

    let grades = new Map();
    let students = new Map();

    class Grade {
        studentsCount;
        gradeLevel;
        totalScore;
        students;
        constructor(gradeLevel) {
            this.studentsCount = 0;
            this.gradeLevel = gradeLevel;
            this.students = new Map();
            this.totalScore = 0;
        }

        addStudent(student) {
            let studenScore = student.score;
            this.students.set(student.name, student);
            this.studentsCount++;
            this.totalScore += studenScore;
        }

        getAverage() {
            return this.totalScore / this.studentsCount;
        }

        getParticipants() {
            let arr = [];
            this.students.forEach(item => {
                arr.push(item.name)
            })
            return arr;
        }
    }

    class Studen {
        name;
        grade;
        score;
        pass;
        constructor(name, grade, score) {
            this.name = name;
            this.grade = grade;
            this.score = score;
            if (score < 3) {
                this.pass = false;
                this.grade = grade;
            } else {
                this.pass = true;
                this.grade = grade + 1
            }
        }
    }

    input.forEach(item => {
        let raw = item.split(", ");

        let studentName = raw[0].split(": ")[1];
        let studentGrade = Number(raw[1].split(": ")[1]);
        let studentScore = Number(raw[2].split(": ")[1]);

        students.set(studentName, new Studen(studentName, studentGrade, studentScore))

        if (studentScore >= 3) {
            let nextGrade = ++studentGrade;
            if (!grades.has(nextGrade)) {
                grades.set(nextGrade, new Grade(nextGrade))
            }
            grades.get(nextGrade).addStudent(students.get(studentName));
        }
    })

    let gradesAsc = new Map([...grades.entries()].sort(
        (a, b) => {
            return a[0] - b[0];
        }

    ));

    gradesAsc.forEach(item => {
        console.log(item.gradeLevel + " Grade");
        console.log(`List of students:`, item.getParticipants().join(", "));
        console.log(`Average annual score from last year:`, item.getAverage().toFixed(2));
        console.log();
    })
}

let input1 = [
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
let input2 = [
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]




solve(input1); 