
let Person = function(name, yearOfBirth, job){
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
}

Person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth
}


let Teacher = function(name, yearOfBirth, job, subject){
    Person.call(this,name,yearOfBirth,job)  // Inheritance usage
    this.subject = subject
}

// Inheriting Person's prototype methods
Teacher.prototype = Object.create(Person.prototype)
console.log(Teacher.prototype.constructor)   // In here, we just see Person's constructor

// set Teacher constructor
Teacher.prototype.constructor = Teacher;
console.log(Teacher.prototype.constructor)  // Now we see Teacher's constructor


let Aylin = new Teacher("Aylin", 1980, "Teacher", "English")
console.log(Aylin)
console.log(Aylin.calculateAge())