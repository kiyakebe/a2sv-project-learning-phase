import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ToDo from "./components/todos/ToDo";
import AddTask from "./components/addTask/AddTask";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<ToDo />} />
          <Route path="add-task" element={<AddTask />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;