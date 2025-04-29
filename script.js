
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", () => {

    const taskText = taskInput.value.trim();

    
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

     
        const removeBtn = document.createElement("span");
        removeBtn.textContent = "Eliminar";
        removeBtn.classList.add("removeBtn");
        removeBtn.addEventListener("click", () => {
            li.remove();
        });

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        li.appendChild(removeBtn);

        taskList.appendChild(li);

        taskInput.value = "";
    }
});


