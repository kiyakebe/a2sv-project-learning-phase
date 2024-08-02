import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import UserData from "./components/UserData";
import Groups from "./components/Groups";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route index element={<UserData />} />
            <Route path="groups" element={<Groups />} />
            
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
