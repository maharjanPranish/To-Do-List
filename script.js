const taskInput = document.getElementById("taskInput");
const taskAddBtn = document.getElementById("taskAddBtn");
const taskList = document.getElementById("taskList");

taskAddBtn.addEventListener("click", addTask);
taskInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        addTask();
    }
})

function addTask() {
    let taskString = taskInput.value;

    if (taskString != 0) {
        //removing the input value from the input field
        taskInput.value = "";

        //creating a div with a checkbox followed by the entered task
        let newTaskContainer = document.createElement("div");
        newTaskContainer.classList.add("task");

        let newTaskCheckbox = document.createElement("input")
        newTaskCheckbox.type = "checkbox"
        newTaskCheckbox.addEventListener('change', taskToggle);

        let newTaskText = document.createElement('span');
        newTaskText.textContent = taskString;

        newTaskContainer.appendChild(newTaskCheckbox);
        newTaskContainer.appendChild(newTaskText);

        // adding the created div to the tasklist
        taskList.appendChild(newTaskContainer);

        addTaskClickEffect();
    }

}


function taskToggle(event) {
    let completedheckbox = event.target;
    let completedTaskContainer = completedheckbox.parentElement;
    completedTaskContainer.classList.toggle("completed");
}

function addTaskClickEffect() {
    taskAddBtn.classList.add("taskAddBtnActive");

    setTimeout(function () {
        taskAddBtn.classList.remove("taskAddBtnActive");
    }, 100);
}
