const taskInput = document.getElementById("taskInput");
const taskAddBtn = document.getElementById("taskAddBtn");
const taskList = document.getElementById("taskList");

taskAddBtn.addEventListener("click",addTask);
taskInput.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter'){
        addTask();

        // console.log(event)

        // taskAddBtn.focus();
    }
})

function addTask(){
    let taskString = taskInput.value;

    if (taskString != 0) {
        //removing the input value from the input field
        taskInput.value = "";
        
        //creating a div with a checkbox followed by the entered task
        let newTaskContainer = document.createElement("div");
        newTaskContainer.classList.add("task");
        // newTaskContainer.addEventListener("click", taskToggle)

        let newTaskCheckbox = document.createElement("input")
        newTaskCheckbox.type = "checkbox"
        newTaskCheckbox.addEventListener('change', taskToggle);/* */

        let newTaskText = document.createElement('span');/* */
        newTaskText.textContent= taskString;

        newTaskContainer.appendChild(newTaskCheckbox);
        // newTaskContainer.append(" ");
        newTaskContainer.appendChild(newTaskText);

        // adding the created div to the tasklist
        taskList.appendChild(newTaskContainer);

        addTaskClickEffect();
    }

}


function taskToggle(event){
    let completedheckbox = event.target;
    let completedTaskContainer = completedheckbox.parentElement;
    completedTaskContainer.classList.toggle("completed");
}

function addTaskClickEffect(){

            taskAddBtn.classList.add("taskAddBtnActive"); 

            setTimeout(function() {
                taskAddBtn.classList.remove("taskAddBtnActive");
            }, 100);
}


// const individualTask = document.querySelector('.task')

// console.log(taskList.clientWidth)
// // console.log(taskList.get("padding-left") + "px")
// console.log(window.getComputedStyle(taskList).getPropertyValue('padding'))

// individualTask.style.setProperty("width", 200)

// console.log(window.getComputedStyle(individualTask).getPropertyValue('width'))


// individualTask.style.width = taskList.width 