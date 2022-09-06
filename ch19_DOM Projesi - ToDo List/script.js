

// Todo Eleman ekleme

// Eleman seçimi
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask")
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const tasklist = document.querySelector("#task-list");

evenListeners();
function evenListeners() {
    form.addEventListener("submit", addNewItem);
}

function addNewItem(e) {
    if (input.value == '') {
        alert("Add new item !")
    }

    // li oluşturma
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));

    // a oluşturma
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    tasklist.appendChild(li);

    input.value = "";

    e.preventDefault();
}


