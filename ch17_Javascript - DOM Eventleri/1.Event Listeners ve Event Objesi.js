
const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");


// btn.addEventListener("click", function(){
//     console.log("Butona tıklandı");
// });

// btn.addEventListener("click", btnClick);
// btn2.addEventListener("click", btnClick);

// function btnClick(){
//     console.log("Butona tıklanıldı");
// };

btn.addEventListener("click", function(a){

    let value;

    value = a;
    value = a.target;   // Which button that we clicked
    value = a.target.id;
    value = a.target.classList;
    value = a.type;

    console.log(value);

    a.preventDefault();
});





