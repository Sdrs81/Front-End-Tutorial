
let personProto = {
    calculateAge: function(){
        return 2021 - this.yearOfBirth
    }
}

let kaan = Object.create(personProto)  // method 1

kaan.name = "Kaan"
kaan.yearOfBirth = 2008
kaan.job = "student"

let Aylin = Object.create(personProto,{  // method 2
    name : {value: "aylin"},
    yearOfBirth : {value: 1998},
    job : {value: "teacher"}
})

console.log(kaan)
console.log(kaan.calculateAge())

console.log(Aylin)
console.log(Aylin.calculateAge())
