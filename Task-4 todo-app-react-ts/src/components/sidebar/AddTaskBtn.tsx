import { Link } from "react-router-dom";

const AddTaskBtn = () => {
  return (
    <div className="mt-10">
      <Link to="/add-task" className="bg-slate-700 p-2 rounded-md block w-[100%] text-slate-200">
        Add Task
      </Link>
    </div>
  );
};

export default AddTaskBtn;
