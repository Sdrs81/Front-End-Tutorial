
let veri;

// veri = Number("5");
// veri = parseInt("5");
// veri = parseFloat("5.4");
// veri = parseInt("5c");    // cause of 5 is first, it will work (veri = 5).
// veri = parseInt("c5");    // that will not work
 
// veri = isNaN("c5")        // NaN = Not a Number 
// veri = isNaN("5")

var sayi = 15.21313465465456;
veri = sayi.toPrecision(5)  // How much digit that we want (total digit)
veri = sayi.toFixed(6)      // How much digit that we want after dot

veri = Math.PI;
veri = Math.round(3.2)      // just round the number to closest integer
veri = Math.ceil(3.4)       // round to upper integer
veri = Math.floor(3.9)      // round to lower integer
veri = Math.pow(3,2)        // 3^2
veri = Math.sqrt(81)        // 9*9 -> 9
veri = Math.abs(-5);        // |-5| -> 5
veri = Math.min(1,5,6)      // giving minimum number
veri = Math.max(1,2,3)      // giving maxmimum number
veri = Math.random();       // 0-1 random number (float number)
veri = Math.random()*10;    // if we want bigger numbers
veri = Math.floor(Math.random()*10) // throw the fractional (float) part of number







console.log(veri)
console.log(typeof veri)