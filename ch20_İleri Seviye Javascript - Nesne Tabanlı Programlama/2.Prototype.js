// Prototype is same with Class structure

let Person = function(name, yearOfBirth, job){
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
}

Person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth
}

Person.prototype.getName = function(){
    return this.name
}

let Aylin = new Person("Aylin", 1998, "teacher")
let Kaan = new Person("Kaan", 2008, "student")


console.log(Aylin)
console.log(Aylin.calculateAge())
console.log(Aylin.getName())


console.log(Kaan)
console.log(Kaan.calculateAge())
console.log(Kaan.getName())


