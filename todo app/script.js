

window.addEventListener("load", () => {
    todos = JSON.parse(localStorage.getItem("todos")) || [];
    let form = document.querySelector("#new-task-form")
    let input = document.querySelector("#new-task-input")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let todo = {
            content: input.value,
            // createdAt: new Date().getTime()
        }

        todos.push(todo)
        console.log(todos)
        localStorage.setItem("todos", JSON.stringify(todos));

        e.target.reset();

        Display();

    });

      Display();
});


function Display() {
    let list_el = document.querySelector("#tasks");

    list_el.innerHTML = "";

    todos.forEach(todo => {
        let task_el = document.createElement("div");
        task_el.classList.add("task");

        let task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        let task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text"
        task_input_el.value = todo.content;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        let task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        let task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerText = "edit"

        let task_delete_el = document.createElement("button")
        let insi = document.createElement("i");
        insi.classList.add("fa-solid", "fa-trash");

        task_delete_el.appendChild(insi);

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);


        task_edit_el.addEventListener("click", () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                localStorage.setItem("todos", JSON.stringify(todos));
                task_input_el.focus();
                task_input_el.addEventListener("blur",(e)=>{
                    task_input_el.setAttribute("readonly",true);
                    todo.content=e.target.value
                    localStorage.setItem("todos", JSON.stringify(todos));
                })
                task_edit_el.innerText = "Save"
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
                localStorage.setItem("todos", JSON.stringify(todos));
            }
            // Display();
        })

        task_delete_el.addEventListener("click", () => {
            todos=todos.filter(t=>t!=todo);
            localStorage.setItem("todos", JSON.stringify(todos));
            Display();
        });
    })
}

