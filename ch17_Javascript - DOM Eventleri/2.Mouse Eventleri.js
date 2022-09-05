

const btn = document.querySelector("#btnAddNewTask");
const ul = document.querySelector("#task-list");

// click
// btn.addEventListener("click", run);
// ul.addEventListener("click", run);

// double click
//btn.addEventListener("dblclick", run);

// mouse down event
//btn.addEventListener("mousedown",run);

// mouse up event
//btn.addEventListener("mouseup",run);

// mouse enter
// btn.addEventListener("mouseenter", run)

// mouse leave
// btn.addEventListener("mouseleave", run)

// mouse over
// btn.addEventListener("mouseover",run);

// mouse out
// btn.addEventListener("mouseout",run);

// mouse move
btn.addEventListener("mousemove", run)

function run(event){
    console.log(`even type: ${event.type}`);
}
