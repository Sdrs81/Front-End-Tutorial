
// let kaan = {
//     name: "kaan",
//     yearOfBirth: 2008,
//     job: "student"
// }

// val = kaan

// console.log(val)
// console.log(typeof val)


// function Student(name, yearOfBirth, job){  // method 1
//     this.name = name
//     this.yearOfBirth = yearOfBirth
//     this.job = job

//     //console.log(this)   // Showing object in console

//     this.calculateAge = function(){
//         return 2021 -this.yearOfBirth
//     }
    
// }

let Student = function(name,yearOfBirth,job){    // method 2
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job

    //console.log(this)   // Showing object in console

    this.calculateAge = function(){
        return 2021 -this.yearOfBirth
    }
}

let kaan = new Student("kaan", 2008, "student")

let aylin = new Student("aylin", 2006, "student")

console.log(kaan.name)
console.log(kaan.job)
console.log(kaan.yearOfBirth)

console.log("-----------------")

console.log(kaan.calculateAge())

