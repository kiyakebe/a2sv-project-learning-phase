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
    "2. Remove Task",
    "3. Disply Tasks",
  ];
  console.log(" ");
  for (let i = 0; i < commands.length; i++) {
    console.log(commands[i]);
  }
  console.log(" ");
};

const main = (): void => {
  displyMenu();
  readWrite.question("Please slect from the menu: ", (response: string) => {
    switch (parseInt(response)) {
      case 1:
        addTodo();
        break;
      case 2:
        removeTodo();
        break;
      case 3:
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
  console.log(" ");
  main();
})();
