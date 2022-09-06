
// This storage type save values for session (if you close the tab, datas will be gone)

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItem);

function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value);
}

function clearItem(e) {
    sessionStorage.clear();
}