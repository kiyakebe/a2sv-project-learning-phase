
## Todo List Application

This is a simple command-line Todo List application written in JavaScript using Node.js. It allows you to add, remove, and display tasks.

### Requirements

- Node.js (version 12 or higher)

### Installation

1. **Install Node.js**:
   - Download and install Node.js from the [official website](https://nodejs.org/).

2. **Clone the repository** (if using version control) or create a new project directory and copy the code into a file named `todo.js`.

```bash
https://github.com/kiyakebe/a2sv-project-learning-phase/tree/main/Task-2%20todo-app-ts-console
```

### Usage

1. **Compile the application to JS**:
   Open your terminal, navigate to the directory containing `todo.ts`, and run the following command:
   ```sh
   tsc
   ```
   This will automatically generate `todo.js` file in `./dist` directory

2. **Run the application**:
   Open your terminal, navigate to `./dist` directory containing `todo.js`, and run the following command:
   ```sh
   node todo.js
   ```
   This will automatically generate `todo.js` file in `./dist` directory

3. **Application Menu**:
   After running the script, you'll see the following menu options:
   ```
   Welcome - My Todo

   1. Add New Task
   2. Remove Task
   3. Display Tasks
   ```

4. **Adding a New Task**:
   - Select option `1` and type your task.
   - Example:
     ```
     Please select from the menu: 1
     Please type your task: Buy groceries
     Added task: Buy groceries
     ```

5. **Removing a Task**:
   - Select option `2` and enter the ID of the task you want to remove.
   - Example:
     ```
     Please select from the menu: 2
     Please enter the id You want to remove: 0
     Removed task with id: 0
     ```

6. **Displaying Tasks**:
   - Select option `3` to display all the current tasks.
   - Example:
     ```
     Please select from the menu: 3

     0. Buy groceries
     ------
     ```

### Code Explanation

- **Modules**:
  - `readline`: This module is used to create an interface for reading input from the command line.


### License

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.


## Demo

- This is the screen we see when we open the app first

![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-2%20todo-app-ts-console/demo-image/demo-1.png)

- This is the screen we seen after adding our todos

![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-2%20todo-app-ts-console/demo-image/demo-2.png)

- This the screen we see when we update our todos

![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-2%20todo-app-ts-console/demo-image/demo-3.png)

- This is the screen we see when we disply our todos

![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-2%20todo-app-ts-console/demo-image/demo-4.png)

- This is the screen we see after deleting some of our tasks

![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-2%20todo-app-ts-console/demo-image/demo-5.png)

The Ui implementation can be found [here](https://github.com/kiyakebe/a2sv-project-learning-phase/tree/main/Task-2%20todo-app-with-ts)