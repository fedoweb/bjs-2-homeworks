function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = []
}

let student1 = new Student('Anastasia', 'female', 19);
let student2 = new Student('Denis', 'male', 21);
let student3 = new Student('Anna', 'female', 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    this.hasOwnProperty('marks') ? this.marks.push(...marks) : undefined;
}

Student.prototype.getAverage = function () {
    if (this.hasOwnProperty('marks') && this.marks.length !== 0) {
        return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length; 
        }    
    return 0;   
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}


