import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from "./page/Jobs";
import JobsDetail from "./page/JobsDetail";
import NotFound from "./page/NotFound";
import Home from "./page/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobsDetail />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
