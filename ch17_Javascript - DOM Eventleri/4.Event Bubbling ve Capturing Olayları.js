
// event Bubbling

// const form = document.querySelector("form");
// const cardBody = document.querySelector(".card-body");
// const card = document.querySelector(".card");
// const container = document.querySelector(".container");

// form.addEventListener("click", function(e){
//     console.log("form");
//     e.stopPropagation();
//     e.stopImmediatePropagation();   // this one is useful, upper one don't work for me
// });

// form.addEventListener("click", function(e){
//     console.log("card body");
//     e.stopPropagation();
//     e.stopImmediatePropagation();        // not working for event capturing
// });

// form.addEventListener("click", function(e){
//     console.log("card");
//     e.stopPropagation();
//     e.stopImmediatePropagation();
// });

// form.addEventListener("click", function(e){
//     console.log("container");
//     e.stopPropagation();
//     e.stopImmediatePropagation();
// });


// Event capturing

// const form = document.querySelector("form");
// const cardBody = document.querySelector(".card-body");
// const card = document.querySelector(".card");
// const container = document.querySelector(".container");

// form.addEventListener("click", function(e){
//     console.log("form");

// },true);  // whit this, capturing event is take a place. 
//     //false or no boolean means to false      
//     //false is for bubbling  

// form.addEventListener("click", function(e){
//     console.log("card body");
// }, true);

// form.addEventListener("click", function(e){
//     console.log("card");
// }, true);

// form.addEventListener("click", function(e){
//     console.log("container");
// }, true);



// const deleteItems = document.querySelectorAll(".fa-times");

// deleteItems.forEach(function(item){
//     item.addEventListener("click", function(e){
//         console.log(e.target);
//     });
// });



const ul = document.querySelector("ul");

ul.addEventListener("click", function(e){
    if(e.target.className == "fas fa-times"){
        e.target.parentElement.parentElement.remove();
    }
});

