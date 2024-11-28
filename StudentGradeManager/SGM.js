class Student{
    constructor({name,age,grades = []}){
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    addGrade(...grades){
        this.grades = [...this.grades, ...grades];
    }

    getAverage(){
        if(this.grades.length === 0){
            return 0;
        }
        
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return (sum / this.grades.length).toFixed(2);
    }
}

const student = new Student({name : "Marian Kot", age : 20});
const student2 = new Student({name: "Tomasz Kowal", age : 23});

student.addGrade(2,3,5,6,3);
student2.addGrade(5,3,6,4,5);

console.log(`${student.name} ma średnią ocen: ${student.getAverage()}`);
console.log(`${student2.name} ma średnią ocen: ${student2.getAverage()}`);