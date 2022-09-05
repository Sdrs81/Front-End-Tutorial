

let value;

const toDoList = document.querySelector(".list-group");
const toDo = document.querySelector(".list-group-item:nth-child(2)");
const card = document.querySelector(".card");

value = toDoList;
value = toDo;
value = card;



// Child Nodes

value = toDoList.childNodes;

value = toDoList.children;

value = toDoList.children[0];
value = toDoList.children[toDoList.children.length-1];
value = toDoList.children[1].textContent = "Değişen Madde";

value = card;
value = card.children;
value = card.children[1].children[0].textContent = "Selam";

value = toDoList;
//value = toDoList.children[0];
value = toDoList.firstElementChild;
value = toDoList.lastElementChild;

value = toDoList.children.length;
value = toDoList.childElementCount;

value = card;
value = card.parentElement;
value = card.parentElement.parentElement;

value = toDo;
value = toDo.previousElementSibling;
value = toDo.nextElementSibling.nextElementSibling;


console.log(value);



