var formE1 =  document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task type'>" + taskTypeInput + "</span>";
    listItemE1.appendChild(taskInfoEl)

    tasksToDoE1.appendChild(listItemE1)
};

formE1.addEventListener("submit",createTaskHandler);
