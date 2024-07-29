type taskList = [number, string];

let tasks: taskList[] = [];
let task_id: number = 0;

const no_task = document.getElementById("no_task") as HTMLElement;
const submit_btn = document.getElementById("submit_btn") as HTMLButtonElement;
const task_container = document.getElementById("todos") as HTMLElement;

submit_btn.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask();
});

const toggleTodoStatus = (): void => {
  if (tasks.length < 1) {
    no_task.style.display = "block";
  } else {
    no_task.style.display = "none";
  }
}

const toggleButton = (curr_task_id: string, state: boolean): void => {
  const task_to_edit = document.getElementById(curr_task_id) as HTMLElement;
  const children = task_to_edit.children;
  const edit = children[1] as HTMLElement;
  const update = children[2] as HTMLElement;

  if (state) {
    update.style.display = "block";
    edit.style.display = "none";
  } else {
    edit.style.display = "block";
    update.style.display = "none";
  }
}

const addTask = (): void => {
  const task_input = document.getElementById("task_input") as HTMLInputElement;
  const curr_task = task_input.value as string;
  if (!curr_task) {
    alert("Empty Fiels");
  } else {
    tasks.unshift([task_id, curr_task]);
    renderTodos(tasks);
    task_id += 1;
  }
}

const deleteTask = (task_id_to_delete: number): void => {
  const task_to_delete = document.getElementById(task_id_to_delete.toString()) as HTMLElement;
  task_to_delete.remove();
  tasks = tasks.filter((task) => task[0] != task_id_to_delete);
  toggleTodoStatus();
}

const editTask = (task_id_to_edit: string) :void => {
  const task_to_edit = document.getElementById(task_id_to_edit) as HTMLElement;
  let editable_field = task_to_edit.children[0] as HTMLElement;
  editable_field.contentEditable = "true";
  editable_field.focus();

  toggleButton(task_id_to_edit, true);
}

const saveUpdate = (task_id_to_update: number) :void => {
  const task_to_edit = document.getElementById(task_id_to_update.toString()) as HTMLElement;
  const editable_field = task_to_edit.children[0] as HTMLElement;
  const new_data = editable_field.textContent;
  editable_field.contentEditable = "false";

  if (!new_data) {
    alert("You can't update it to empty task");
  } else {
    tasks = tasks.map((task) =>
      task[0] == task_id_to_update ? [task[0], new_data] : task
    );
  }

  toggleButton(task_id_to_update.toString(), false);
  renderTodos(tasks);
}

const cancelUpdate = (task_id_to_cancel_update: number): void => {
  const task_to_edit = document.getElementById(task_id_to_cancel_update.toString()) as HTMLElement;
  const editable_field = task_to_edit.children[0] as HTMLElement;
  editable_field.contentEditable = "false";
  toggleButton(task_id_to_cancel_update.toString(), false);

  renderTodos(tasks);
}

const renderTodos = (tasks: taskList[]): void => {
  task_container.innerHTML = "";
  tasks.forEach((task) => {
    renderNewTask(task[1], task[0]);
  });
}

const renderNewTask = (curr_task: string, curr_task_id: number): void => {
  const new_task = document.createElement("div") as HTMLElement;
  new_task.className = "task";
  new_task.id = curr_task_id.toString();

  const task_text = document.createElement("h3");
  task_text.textContent = curr_task;

  const button_group_edit = document.createElement("div");
  const edit_btn = document.createElement("button");
  edit_btn.className = "blue__btn";
  edit_btn.textContent = "Edit";
  edit_btn.value = curr_task_id.toString();

  edit_btn.addEventListener("click", (event: MouseEvent): void => {
    editTask((event.target as HTMLButtonElement).value);
  });

  const delete_btn = document.createElement("button");
  delete_btn.className = "red__btn";
  delete_btn.textContent = "Delete";
  delete_btn.value = curr_task_id.toString();
  delete_btn.addEventListener("click", (event: MouseEvent): void => {
    deleteTask(parseInt((event.target as HTMLButtonElement).value));
  });

  button_group_edit.appendChild(edit_btn);
  button_group_edit.appendChild(delete_btn);

  const button_group_update = document.createElement("div");
  button_group_update.id = "update_group";

  const update_btn = document.createElement("button");
  button_group_update.appendChild(update_btn);
  update_btn.className = "blue__btn";
  update_btn.textContent = "Update";
  update_btn.value = curr_task_id.toString();
  update_btn.addEventListener("click", (event: MouseEvent): void => {
    saveUpdate(parseInt((event.target as HTMLButtonElement).value));
  });

  const cancel_btn = document.createElement("button");
  button_group_update.appendChild(cancel_btn);
  cancel_btn.className = "red__btn";
  cancel_btn.textContent = "Cancel";
  cancel_btn.value = curr_task_id.toString();
  cancel_btn.addEventListener("click", (event: MouseEvent): void => {
    cancelUpdate(parseInt((event.target as HTMLButtonElement).value));
  });

  new_task.appendChild(task_text);
  new_task.appendChild(button_group_edit);
  new_task.appendChild(button_group_update);

  task_container.appendChild(new_task);

  toggleTodoStatus();
}
