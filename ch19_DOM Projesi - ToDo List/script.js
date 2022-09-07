


// Eleman seçimi
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask")
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const tasklist = document.querySelector("#task-list");
let todos;

// load items
loadItems();

evenListeners();
function evenListeners() {
    //submit
    form.addEventListener("submit", addNewItem);
    //delete an item
    tasklist.addEventListener("click", deleteItem);
    //delete items with button
    btnDeleteAll.addEventListener("click", deleteAllItems);
}


// Diziden Todo Elemanlarını Aktarma
function loadItems() {
    todos = getItemsFromLS();
    todos.forEach(function (item) {
        createItem(item);
    });
}

// Todo'ları Storage'a Ekleme
function getItemsFromLS() {
    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
// Set item to local storage
function setItemToLS(newTodo) {
    todos = getItemsFromLS();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function createItem(newTodo) {
    // li oluşturma
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(newTodo));

    // a oluşturma
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    tasklist.appendChild(li);

}


// Todo Eleman ekleme
function addNewItem(e) {
    if (input.value == '') {
        alert("Add new item !")
    }

    createItem(input.value);
    setItemToLS(input.value);

    input.value = "";
    e.preventDefault();
}


// Todo silme
function deleteItem(e) {

    if (e.target.className === "fas fa-times") {
        if (confirm("Silmek istediğinize emin misiniz?")) {
            e.target.parentElement.parentElement.remove();
            deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        }
    }

    e.preventDefault();
}

// Todo hepsini butonla silme 
function deleteAllItems(e) {

    // Yöntem 1
    // if (confirm("Hepsini silmek istiyor musunuz?")) {
    //     tasklist.childNodes.forEach(function (item) {
    //         if (item.nodeType === 1) {
    //             item.remove();
    //         }
    //     });
    // }

    //Yöntem 2
    //tasklist.innerHTML = "";

    // Local storage ile birlikte silme yöntemi
    if (confirm("Hepsini silmek istiyor musunuz?")) {
        while(tasklist.firstChild){
            tasklist.removeChild(tasklist.firstChild);
        }
        localStorage.clear();
    }

    e.preventDefault();
}


// Todo'ları Storage'dan Silme
function deleteTodoFromStorage(deleteTodo) {
    let todos = getItemsFromLS();

    todos.forEach(function (todo, index) {
        if (todo == deleteTodo) {
            todos.splice(index, 1);
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos))
}



