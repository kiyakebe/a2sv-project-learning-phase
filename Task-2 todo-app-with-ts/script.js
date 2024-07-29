var tasks = [];
var task_id = 0;
var no_task = document.getElementById("no_task");
var submit_btn = document.getElementById("submit_btn");
var task_container = document.getElementById("todos");
submit_btn.addEventListener("click", function (event) {
    event.preventDefault();
    addTask();
});
var toggleTodoStatus = function () {
    if (tasks.length < 1) {
        no_task.style.display = "block";
    }
    else {
        no_task.style.display = "none";
    }
};
var toggleButton = function (curr_task_id, state) {
    var task_to_edit = document.getElementById(curr_task_id);
    var children = task_to_edit.children;
    var edit = children[1];
    var update = children[2];
    if (state) {
        update.style.display = "block";
        edit.style.display = "none";
    }
    else {
        edit.style.display = "block";
        update.style.display = "none";
    }
};
var addTask = function () {
    var task_input = document.getElementById("task_input");
    var curr_task = task_input.value;
    if (!curr_task) {
        alert("Empty Fiels");
    }
    else {
        tasks.unshift([task_id, curr_task]);
        renderTodos(tasks);
        task_id += 1;
    }
};
var deleteTask = function (task_id_to_delete) {
    var task_to_delete = document.getElementById(task_id_to_delete.toString());
    task_to_delete.remove();
    tasks = tasks.filter(function (task) { return task[0] != task_id_to_delete; });
    toggleTodoStatus();
};
var editTask = function (task_id_to_edit) {
    var task_to_edit = document.getElementById(task_id_to_edit);
    var editable_field = task_to_edit.children[0];
    editable_field.contentEditable = "true";
    editable_field.focus();
    toggleButton(task_id_to_edit, true);
};
var saveUpdate = function (task_id_to_update) {
    var task_to_edit = document.getElementById(task_id_to_update.toString());
    var editable_field = task_to_edit.children[0];
    var new_data = editable_field.textContent;
    editable_field.contentEditable = "false";
    if (!new_data) {
        alert("You can't update it to empty task");
    }
    else {
        tasks = tasks.map(function (task) {
            return task[0] == task_id_to_update ? [task[0], new_data] : task;
        });
    }
    toggleButton(task_id_to_update.toString(), false);
    renderTodos(tasks);
};
var cancelUpdate = function (task_id_to_cancel_update) {
    var task_to_edit = document.getElementById(task_id_to_cancel_update.toString());
    var editable_field = task_to_edit.children[0];
    editable_field.contentEditable = "false";
    toggleButton(task_id_to_cancel_update.toString(), false);
    renderTodos(tasks);
};
var renderTodos = function (tasks) {
    task_container.innerHTML = "";
    tasks.forEach(function (task) {
        renderNewTask(task[1], task[0]);
    });
};
var renderNewTask = function (curr_task, curr_task_id) {
    // creating the task
    var new_task = document.createElement("div");
    new_task.className = "task";
    new_task.id = curr_task_id.toString();
    var task_text = document.createElement("h3");
    task_text.textContent = curr_task;
    var button_group_edit = document.createElement("div");
    var edit_btn = document.createElement("button");
    edit_btn.className = "blue__btn";
    edit_btn.textContent = "Edit";
    edit_btn.value = curr_task_id.toString();
    edit_btn.addEventListener("click", function (event) {
        editTask(event.target.value);
    });
    var delete_btn = document.createElement("button");
    delete_btn.className = "red__btn";
    delete_btn.textContent = "Delete";
    delete_btn.value = curr_task_id.toString();
    delete_btn.addEventListener("click", function (event) {
        deleteTask(parseInt(event.target.value));
    });
    button_group_edit.appendChild(edit_btn);
    button_group_edit.appendChild(delete_btn);
    var button_group_update = document.createElement("div");
    button_group_update.id = "update_group";
    var update_btn = document.createElement("button");
    button_group_update.appendChild(update_btn);
    update_btn.className = "blue__btn";
    update_btn.textContent = "Update";
    update_btn.value = curr_task_id.toString();
    update_btn.addEventListener("click", function (event) {
        saveUpdate(parseInt(event.target.value));
    });
    var cancel_btn = document.createElement("button");
    button_group_update.appendChild(cancel_btn);
    cancel_btn.className = "red__btn";
    cancel_btn.textContent = "Cancel";
    cancel_btn.value = curr_task_id.toString();
    cancel_btn.addEventListener("click", function (event) {
        cancelUpdate(parseInt(event.target.value));
    });
    new_task.appendChild(task_text);
    new_task.appendChild(button_group_edit);
    new_task.appendChild(button_group_update);
    task_container.appendChild(new_task);
    toggleTodoStatus();
};
