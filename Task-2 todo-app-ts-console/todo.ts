const readline = require("readline");

const readWrite = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface Todo {
  taskId: number;
  taskName: string;
}
let globalTaskId: number = 0;

let todos: Todo[] = [];

const addTodo = (): void => {
  readWrite.question("Please type your task: ", (response: string) => {
    if (response) {
      const new_task = { taskId: globalTaskId, taskName: response };

      todos.unshift(new_task);
      console.log(`Added task: ${response}`);
    } else {
      console.log("Can't add empty task!");
    }
    globalTaskId++;

    main();
  });
};

const removeTodo = (): void => {
  readWrite.question(
    "Pleade enter the id You want to remove: ",
    (response: number) => {
      todos = todos.filter((todo) => todo.taskId != response);
      console.log(`Removed task with id: ${response}`);

      main();
    }
  );
};

const editTask = (): void => {
  readWrite.question(
    "Pleade enter the id You want to update: ",
    (editId: number) => {
      let found: boolean = false;

      for (let i = 0; i < todos.length; i++) {
        if (todos[i].taskId == editId) {
          found = true;
          break;
        }
      }

      if (found) {
        readWrite.question("New value: ", (value: string) => {
          todos = todos.map((todo) => todo.taskId == editId ? { ...todo, taskName: value} : todo);
          console.log(`Updated task with id: ${editId}`);
          main();
        });
      } else {
        console.log(`There is no task with Id ${editId}!`);
        main();
      }
    }
  );
};

const displyTodos = (): void => {
  let max: number = 0;
  for (let i = 0; i < todos.length; i++) {
    let curr: number = todos[i].taskName.length;
    if (curr > max) {
      max = curr;
    }
  }

  console.log(" ");
  const devider = "-".repeat(max + 6);
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].taskId, ".", todos[i].taskName);
    console.log(devider);
  }
  console.log(" ");

  main();
};

const displyMenu = (): void => {
  let commands: string[] = [
    "1. Add New Task",
    "2. Edit Tasks",
    "3. Remove Task",
    "4. Disply Tasks",
  ];
  console.log(" ");
  for (let i = 0; i < commands.length; i++) {
    console.log(commands[i]);
  }
  console.log(" ");
};

const main = (): void => {
  displyMenu();
  readWrite.question("Please Select from the menu: ", (response: string) => {
    switch (parseInt(response)) {
      case 1:
        addTodo();
        break;
      case 2:
        editTask();
        break;
      case 3:
        removeTodo();
        break;
      case 4:
        displyTodos();
        break;

      default:
        console.log("Wrong Input, Please Try Again");
        main();
    }
  });
};

(() => {
  console.log("Welcome - My Todo");
  main();
})();
