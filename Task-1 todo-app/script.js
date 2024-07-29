let tasks = [];
let task_id = 0;

const no_task = document.getElementById("no_task");
const submit_btn = document.getElementById("submit_btn");
const task_container = document.getElementById("todos");

submit_btn.addEventListener("click", (event) => {
  event.preventDefault();
  addTask();
});

function toggleTodoStatus() {
  if (tasks.length < 1) {
    no_task.style.display = "block";
  } else {
    no_task.style.display = "none";
  }
}

function toggleButton(curr_task_id, state) {
  const task_to_edit = document.getElementById(curr_task_id);
  edit = task_to_edit.children[1];
  update = task_to_edit.children[2];

  if (state) {
    update.style.display = "block";
    edit.style.display = "none";
  } else {
    edit.style.display = "block";
    update.style.display = "none";
  }
}

function addTask() {
  task_input = document.getElementById("task_input");
  const curr_task = task_input.value;
  if (!curr_task) {
    alert("Empty Fiels");
  } else {
    tasks.push([task_id, curr_task]);
    renderTodos(tasks);
    task_id += 1;
  }
}

function deleteTask(task_id_to_delete) {
  const task_to_delete = document.getElementById(task_id_to_delete);
  task_to_delete.remove();
  tasks = tasks.filter((task) => task[0] != task_id_to_delete);
  toggleTodoStatus();
}

function editTask(task_id_to_edit) {
  const task_to_edit = document.getElementById(task_id_to_edit);
  editable_field = task_to_edit.children[0];
  editable_field.contentEditable = true;
  editable_field.focus();

  toggleButton(task_id_to_edit, true);
}

function saveUpdate(task_id_to_update) {
  const task_to_edit = document.getElementById(task_id_to_update);
  editable_field = task_to_edit.children[0];
  new_data = editable_field.textContent;
  editable_field.contentEditable = false;

  if (!new_data) {
    alert("You can't update it to empty task");
  } else {
    tasks = tasks.map((task) =>
      task[0] == task_id_to_update ? [task[0], new_data] : task
    );
  }

  toggleButton(task_id_to_update, false);
  renderTodos(tasks);
}

function cancelUpdate(task_id_to_cancel_update) {
  const task_to_edit = document.getElementById(task_id_to_cancel_update);
  editable_field = task_to_edit.children[0];
  editable_field.contentEditable = false;
  toggleButton(task_id_to_cancel_update, false);

  renderTodos(tasks);
}

function renderTodos(tasks) {
  task_container.innerHTML = "";
  tasks.forEach((task) => {
    renderNewTask(task[1], task[0]);
  });
}

function renderNewTask(curr_task, curr_task_id) {
  // creating the task
  const new_task = document.createElement("div");
  new_task.className = "task";
  new_task.id = curr_task_id;

  const task_text = document.createElement("h3");
  task_text.textContent = curr_task;

  const button_group_edit = document.createElement("div");
  const edit_btn = document.createElement("button");
  edit_btn.className = "blue__btn";
  edit_btn.textContent = "Edit";
  edit_btn.value = curr_task_id;
  edit_btn.addEventListener("click", (event) => {
    editTask(event.target.value);
  });

  const delete_btn = document.createElement("button");
  delete_btn.className = "red__btn";
  delete_btn.textContent = "Delete";
  delete_btn.value = curr_task_id;
  delete_btn.addEventListener("click", (event) => {
    deleteTask(event.target.value);
    console.log(typeof event.target.value);
  });

  button_group_edit.appendChild(edit_btn);
  button_group_edit.appendChild(delete_btn);

  const button_group_update = document.createElement("div");
  button_group_update.id = "update_group";

  const update_btn = document.createElement("button");
  button_group_update.appendChild(update_btn);
  update_btn.className = "blue__btn";
  update_btn.textContent = "Update";
  update_btn.value = curr_task_id;
  update_btn.addEventListener("click", (event) => {
    saveUpdate(event.target.value);
  });

  const cancel_btn = document.createElement("button");
  button_group_update.appendChild(cancel_btn);
  cancel_btn.className = "red__btn";
  cancel_btn.textContent = "Cancel";
  cancel_btn.value = curr_task_id;
  cancel_btn.addEventListener("click", (event) => {
    cancelUpdate(event.target.value);
  });

  new_task.appendChild(task_text);
  new_task.appendChild(button_group_edit);
  new_task.appendChild(button_group_update);

  task_container.appendChild(new_task);

  toggleTodoStatus();
}
