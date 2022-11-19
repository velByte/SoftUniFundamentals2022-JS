function solve(input) {

    class Student {
        constructor(userName, grade, course, email, id) {
            this.userName = userName;
            this.grade = grade;
            this.course = course;
            this.email = email;
            this.id = id;
        }
    }

    class Course {

        constructor(courseName, courceCapacity) {
            this.courseName = courseName;
            this.courceCapacity = courceCapacity;
            this.studentsCount = 0;
            this.studentsList = new Map();
        }

        addStudent(userName, grade, course, email) {
            let id = Math.floor((Math.random() * 9999999) + 999999);
            if (this.courceCapacity > 0) {
                this.studentsList.set(id, new Student(userName, grade, course, email, id));
                this.studentsCount++;
                this.courceCapacity--;
            }
        }

        addCapacity(value) {
            this.courceCapacity += value;
            return this.courceCapacity;
        }

        sortStudents() {
            this.studentsList = new Map([...this.studentsList.entries()].sort((a, b) => {
                return b[1].grade - a[1].grade;
            }))
        }

        // getAvailableCapacity() {
        //     return this.courceCapacity;
        // }
    }

    function getDataFromString(str) {
        //user1[25] with email user1@user.com joins JSCore
        let userName = str.split("[")[0];
        let grade = Number(str.split("[")[1].split("]")[0]);
        let course = str.split(" joins ")[1];
        let email = str.split("email ")[1].split(" joins")[0];
        return [userName, grade, course, email];
    }

    let courseList = new Map();

    input.forEach(item => {
        if (item.includes(": ")) {
            let [courseName, courceCapacity] = item.split(": ");
            courceCapacity = Number(courceCapacity);
            if (!courseList.has(courseName)) {
                courseList.set(courseName, new Course(courseName, courceCapacity));
            } else {
                courseList.get(courseName).addCapacity(courceCapacity);
            }
        } else {
            let [userName, grade, course, email] = getDataFromString(item);
            if (courseList.has(course)) {
                courseList.get(course).addStudent(userName, grade, course, email);
            }
        }
    })

    courseList = new Map([...courseList.entries()].sort((a, b) => {
        return b[1].studentsCount - a[1].studentsCount;
    }))


    courseList.forEach((value, key) => {
        value.sortStudents();
        console.log(`${key}: ${value.courceCapacity} places left`);
        value.studentsList.forEach((v, k) => {
            console.log(`--- ${v.grade}: ${v.userName}, ${v.email}`);
        })
    })

}


let input = [
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore']

solve(input);