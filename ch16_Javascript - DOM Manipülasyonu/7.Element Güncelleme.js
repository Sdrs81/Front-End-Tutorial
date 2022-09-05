
const cardHeader = document.querySelector(".card-header");

const h2 = document.createElement("h2");
h2.setAttribute("class", "card-header");
h2.appendChild(document.createTextNode("Yeni listeler"));

const parent = document.querySelector(".card");
parent.replaceChild(h2,cardHeader);


// Class'larda güncelleme
const taskList = document.querySelector("#task-list");

let value;

link = taskList.children[0].children[0];
value = link.className;
value = link.classList;
// value = link.classList[0];
// value = link.classList[1];

link.classList.add("new");
link.classList.remove("new");


// Attribute güncelleme
value = link.getAttribute("href");
value = link.setAttribute("href", "https://instagram.com");

value = link.hasAttribute("href");   // Check for is there that attribute



console.log(value);
