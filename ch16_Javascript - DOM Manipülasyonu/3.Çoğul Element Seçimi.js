

// Çoklu elemnt seçimi
//document.getElementsByClassName();


// let veri;

// veri = document.getElementsByClassName("list-group-item");
// // veri = document.getElementsByClassName("list-group-item")[0];
// // veri = document.getElementsByClassName("list-group-item")[2];

// //veri = veri[2]

// // veri[1].style.fontSize = "30px";
// // veri[1].style.color = "red";
// // veri[2].textContent = "New item";

// for(let i=0;i<veri.length;i++) {
//     console.log(veri[i].style.color = "orange");
//     console.log(veri[i].textContent = "New item");
// }

// console.log(veri)



// Çoklu elemnt seçimi
//document.getElementsByTagName();

//let veri;

// veri = document.getElementsByTagName("li");
// veri = document.getElementsByTagName("a");

//veri = document.getElementById("task-list").getElementsByTagName("a");

//console.log(veri)



//document.querySelectorAll();

let veri;

veri = document.querySelectorAll("li");

veri.forEach(function(item, index){
    item.textContent = `${index} - item`;
})


console.log(veri);
