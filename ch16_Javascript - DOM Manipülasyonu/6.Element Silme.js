


const taskList = document.querySelector("#task-list");

//taskList.remove();
//taskList.childNodes[5].remove();
//taskList.children[2].remove();
//taskList.removeChild(taskList.children[3]);

// attribute silme

//taskList.children[1].removeAttribute("class")

for (let i = 0; i < taskList.children.length; i++) {
    taskList.children[i].removeAttribute("class")
}

console.log(taskList);
