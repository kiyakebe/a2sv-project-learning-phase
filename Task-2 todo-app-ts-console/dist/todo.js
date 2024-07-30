"use strict";
const readline = require("readline");
const readWrite = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let globalTaskId = 0;
let todos = [];
const addTodo = () => {
    readWrite.question("Please type your task: ", (response) => {
        if (response) {
            const new_task = { taskId: globalTaskId, taskName: response };
            todos.unshift(new_task);
            console.log(`Added task: ${response}`);
        }
        else {
            console.log("Can't add empty task!");
        }
        globalTaskId++;
        main();
    });
};
const removeTodo = () => {
    readWrite.question("Pleade enter the id You want to remove: ", (response) => {
        todos = todos.filter((todo) => todo.taskId != response);
        console.log(`Removed task with id: ${response}`);
        main();
    });
};
const editTask = () => {
    readWrite.question("Pleade enter the id You want to update: ", (editId) => {
        let found = false;
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].taskId == editId) {
                found = true;
                break;
            }
        }
        if (found) {
            readWrite.question("New value: ", (value) => {
                todos = todos.map((todo) => todo.taskId == editId ? Object.assign(Object.assign({}, todo), { taskName: value }) : todo);
                console.log(`Updated task with id: ${editId}`);
                main();
            });
        }
        else {
            console.log(`There is no task with Id ${editId}!`);
            main();
        }
    });
};
const displyTodos = () => {
    let max = 0;
    for (let i = 0; i < todos.length; i++) {
        let curr = todos[i].taskName.length;
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
const displyMenu = () => {
    let commands = [
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
const main = () => {
    displyMenu();
    readWrite.question("Please Select from the menu: ", (response) => {
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
