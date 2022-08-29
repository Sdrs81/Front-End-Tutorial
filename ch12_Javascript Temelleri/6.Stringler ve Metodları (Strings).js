
const firstName = "Serdar";
const LastName = "Demirtaş";
const age = 21;
let hobbies = "kitap spor yazılım";

let veri;

// String concatenations
veri = firstName + " " + LastName

veri = "Serdar ";
veri += LastName;

veri = 'Benim adım ' + firstName + ' ' + LastName + ' yaşım '+ age + ' istanbul\' da  yaşıyorum'
// we can use '' or ""  , there is no difference

veri = firstName.concat(" ", LastName);

veri = veri.toUpperCase();
veri = veri.toLowerCase();

//veri = veri.substring(6,9)   // taking some characters in defined range
//veri = veri.slice(1,8)         //  same wtih upper function

//veri = veri.indexOf("d");     
// which index are characters in string, if there isn't one, return -1

//veri = veri.replace("serdar" , "murat")  // replacing part of string

//veri = veri.length;

veri = hobbies.split(" ");  // split string to seperate strings with defined character


console.log(veri);
console.log(typeof veri);
