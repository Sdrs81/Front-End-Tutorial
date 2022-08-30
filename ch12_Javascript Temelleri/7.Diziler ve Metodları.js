
let names = ["arda", "kerem", "aslı", "mert"];
let years = [2002, 2001, 1999, 2004];
let mix = ["arda", "yılmaz", 1990, null, undefined, ["programlama","futbol" ] ]

console.log(names)
console.log(names.length)
console.log(typeof names)

console.log(years)

console.log(mix)


// Get array item
console.log(names[2])


// Set array item
names[0] = "serdar"
console.log(names[0]);

names[4] = "mehmet"
console.log(names);

names[names.length] = "selim"
console.log(names);


// Add item

// names.push("eda;")
// console.log(names);    // add item to last place 

names.unshift("eda");
console.log(names);  // add item to first place


// Remove item

years.pop();            // remove last index
console.log(years); 

years.shift();          // remove first index
console.log(years); 


// indexOf

let index = names.indexOf("serdar")
console.log(" index: " + index); 

names.reverse();        
console.log(names);  // reversing list


years.sort();              
console.log(years); 

names.sort();
console.log(names); 

let veri = names.concat(years);  // join two arrays
console.log(veri); 

veri.splice(2,0,"ahmet")
console.log(veri); 

// first number for from which index, 
// second one is how many items will be deleted (that index included)
// last one ise for adding element at defined index position
veri.splice(2,2,"selin")        
console.log(veri); 


