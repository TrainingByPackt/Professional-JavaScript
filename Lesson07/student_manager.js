class School {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    findByGrade(gradeLevel) {
        return this.students.filter((s) => s.gradeLevel === gradeLevel);
    }
    findByAge(age) {
        return this.students.filter((s) => s.age === age);
    }
    findByName(name) {
        return this.students.filter((s) => s.name === name);
    }
}

class Student {
    constructor(name, age, gradeLevel) {
        this.name = name;
        this.age = age;
        this.gradeLevel = gradeLevel;
        this.courses = [];
    }
    calculateAverageGrade() {
        const totalGrades = this.courses.reduce((prev, curr) => prev + curr.grade, 0);
        return (totalGrades / this.courses.length).toFixed(2);
    }
    assignGrade(name, grade) {
        this.courses.push(new Course(name, grade))
    }
}

class Course {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    } 
}

function test() {
    const testSchool = new School();
    const testStudent = new Student('Miku', 16, 10);
    testStudent.assignGrade('music', 90);
    testStudent.assignGrade('math', 80);
    assert(testStudent.calculateAverageGrade() == 85.00);
    const testStudent2 = new Student('Rin', 14, 8);
    const testStudent3 = new Student('Len', 14, 8);
    testSchool.addStudent(testStudent);
    testSchool.addStudent(testStudent2);
    testSchool.addStudent(testStudent3);
    assert(testSchool.findByAge(14)[0].name === 'Rin');
    assert(testSchool.findByGrade(10)[0].name === 'Miku');
    assert(testSchool.findByGrade(8).length === 2);
    assert(testSchool.findByName('Rin')[0].name === 'Rin');
    console.log('TEST PASSED');
}

test();