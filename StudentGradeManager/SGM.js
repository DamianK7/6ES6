class Student{
    constructor({name,age,grades = []}){
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    addGrade(...grades){
        this.grades = [...this.grades, ...grades];
    }
    
}

const student = new Student({name : "Marian Kot", age : 20});

student.addGrade(2,3,5,6);

console.log(`${student.name} ma oceny: ${student.grades}`)