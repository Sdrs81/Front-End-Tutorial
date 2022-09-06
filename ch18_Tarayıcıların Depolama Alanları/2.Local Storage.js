
// In this storage type, datas will remanin even if close the tab.
// both of key and values are stored in string type


// setItem
//localStorage.setItem("programlama", "javascript");  // even if we comment this line,
//localStorage.setItem("bilgisayar", 7000);            // datas still reachable from console

// getItem
// console.log(value);
// console.log(typeof value);

// Clear all
//localStorage.clear();

// Remove item
//localStorage.removeItem("bilgisayar");

// Search for value
console.log(localStorage.getItem("bilgisayar"));
if(localStorage.getItem("klavye") == null){
    console.log("veri bulunamadı");
}else {
    console.log("veri bulundu");
}


