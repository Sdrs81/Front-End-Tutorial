
let veri

let user = { 
    userName: "leventert",
    firstName: "levent",
    lastName: "ertunalılar",
    age: 37,
    hobbies: ["spor", "kitap okumak","yazılım"],
    address: {
        city: "istanbul",
        country: "Turkey",
        phone: "054444444"
    }
}

veri = user;
veri = user.age
veri = user.address.city
veri = user.hobbies.length


console.log(veri)
console.log(typeof user)




