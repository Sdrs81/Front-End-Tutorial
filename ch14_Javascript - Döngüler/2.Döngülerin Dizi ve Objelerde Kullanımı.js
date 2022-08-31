
let citys = ["ankara", "izmir", "istanbul", "eskişehir"]

for (let i = 0; i < citys.length; i++) {
    console.log("şehir: " + citys[i]);
}

console.log(" ")


// for-in metodu

for (let i in citys) {
    console.log(`index: ${i}, city: ${citys[i]}`); // we can use ${} structure with `` only 
}

console.log(" ")

// for-each metodu

citys.forEach(function (item) {
    console.log(item);
});

console.log(" ")

let users = [
    { firstName: "Aslı", lastName: "Yılmaz" },
    { firstName: "Kererm", lastName: "bilgin" },
    { firstName: "Tolga", lastName: "Mertoğlu" },
    { firstName: "Selin", lastName: "Şahin" },
]


for (let i = 0; i < users.length; i++){
    console.log(users[i].firstName);
}

console.log(" ")

// map: returns array

let veri = users.map(function(item){
    return item.firstName + " " + item.lastName;
});

console.log(veri);


console.log(" ")


let numbers = [1,2,3,4,5]

let numberVeri = numbers.map(function(n){
    return n*n;
});
console.log(numberVeri)

