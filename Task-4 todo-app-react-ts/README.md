


## Advanced Todo List

This project is an **Advanced Todo List** application built with **React** and **TypeScript**. The app provides functionality for managing tasks, filtering tasks by category and time, and searching for specific todos. The app is styled with **Tailwind CSS** and includes routing for a seamless user experience.

### Features

- **Task Management**
  - Add, edit, delete, and update tasks.
  - Mark tasks as completed or incomplete.

- **Filtering - yet to be implemented**
  - Filter tasks based on categories: All, Personal, Work.
  - Filter tasks based on time: All, Today, This Week.

- **Search - yet to be implemented**
  - Search for tasks by title or content.

### Project Structure

- **State Management**: The app uses `useReducer` for managing the state of tasks with the `todoReducer`.
- **Routing**: Implemented using `react-router-dom` for navigating between the Dashboard, Add Task, Edit Task, and Todo list components.
- **Styling**: Tailwind CSS is used for styling the components.

### Installation

#### Prerequisites

- Node.js (v14 or later)
- npm or yarn

#### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/advanced-todo-list.git
   cd advanced-todo-list
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

### Dependencies

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: For handling routing in React.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: A typed superset of JavaScript for type safety and enhanced development experience.
- **React Datepicker**: A date picker component for React.
- **React Toastify**: For displaying notifications and alerts.


### Usage

#### Adding a Task

1. Navigate to the "Add Task" page via the Dashboard.
2. Enter the task details such as name, category, and due date.
3. Click "Add Task" to save the task.

#### Editing a Task

1. Navigate to the "Todo List" on the Dashboard.
2. Click on the task you want to edit.
3. Update the details and click "Update Task" to save the changes.

#### Deleting a Task

1. Navigate to the "Todo List" on the Dashboard.
2. Click on the delete button next to the task you want to remove.


### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Demo



This README provides a comprehensive overview of the Advanced Todo List application, including its features, installation instructions, and project structure.
## Screenshots

1. Landing screed for new user
![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-4%20todo-app-react-ts/demo/demo-1.png)

2. A page to add our tasks
![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-4%20todo-app-react-ts/demo/demo-2.png)

3. Todo List after adding some Tasks
![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-4%20todo-app-react-ts/demo/demo-3.png)

4. A page to edit our todo
![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-4%20todo-app-react-ts/demo/demo-4.png)

5. Todo list after being updated
![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-4%20todo-app-react-ts/demo/demo-5.png)

6. Todo List after removing some tasks
![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-4%20todo-app-react-ts/demo/demo-6.png)