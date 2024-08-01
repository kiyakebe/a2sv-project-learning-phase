import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useReducer } from "react";

import Dashboard from "./components/Dashboard";
import ToDo from "./components/todos/ToDo";
import AddTask from "./components/addTask/AddTask";
import EditTask from "./components/editTask/EditTask";
import TodoContext from "./context/context";
import todoReducer from "./reducer/todoReducer";
import { Todo } from "./types";

function App() {

  const initialTasks: Todo[] = [];

  const [tasks, dispatch] = useReducer(todoReducer, initialTasks);

  return (
    <TodoContext.Provider value={{tasks, dispatch}}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<ToDo />} />
            <Route path="add-task" element={<AddTask />} />
            <Route path="edit-task/:task" element={<EditTask />} />
          </Route>
        </Routes>
      </Router>
    </TodoContext.Provider>
  );
}

export default App;
