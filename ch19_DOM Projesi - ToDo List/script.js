

// Todo Eleman ekleme

// Eleman seçimi
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask")
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const tasklist = document.querySelector("#task-list");

evenListeners();
function evenListeners() {
    //submit
    form.addEventListener("submit", addNewItem);
    //delete an item
    tasklist.addEventListener("click", deleteItem);
    //delete items with button
    btnDeleteAll.addEventListener("click", deleteAllItems);
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


// Todo silme
function deleteItem(e) {


    if (e.target.className === "fas fa-times") {
        if (confirm("Silmek istediğinize emin misiniz?")) {
            e.target.parentElement.parentElement.remove();
        }
    }

    e.preventDefault();
}

// Todo hepsini butonla silme 
function deleteAllItems(e) {

    // Yöntem 1
    if (confirm("Hepsini silmek istiyor musunuz?")) {
        tasklist.childNodes.forEach(function (item) {
            if (item.nodeType == 1) {
                item.remove();
            }
        });
    }

    //Yöntem 2
    //tasklist.innerHTML = "";

    e.preventDefault();
}


