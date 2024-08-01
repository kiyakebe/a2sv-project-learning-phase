import categoryOption from "../../assets/category.json";
import { Link, useParams, useNavigate } from "react-router-dom";
import useTodoContext from "../../hooks/useTodoContext";
import { FormEvent, useState } from "react";
import { Todo } from "../../types";
import { extractEditableValue } from "../../utils/utils";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditTask = () => {
  const { taskId } = useParams();
  const { tasks, dispatch } = useTodoContext();
  const navigate = useNavigate()

  const currTask = extractEditableValue(tasks, parseInt(taskId as string));

  const [taskName, setTaskName] = useState(currTask.taskName);
  const [category, setCategory] = useState(currTask.category);
  const [date, setDate] = useState(currTask.date);
  const [completed, setCompleted] = useState(currTask.completed);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const toast_alert = (message: string) =>
      toast.success(message, { theme: "light", autoClose: 2000 });

    const newTodo: Todo = {
      id: parseInt(taskId as string),
      taskName: taskName,
      completed: completed,
      date: date,
      category: category,
    };

    dispatch({ type: "UPDATE_TASK", payload: newTodo });
    toast_alert("Updated task!")
    navigate('/')
  };

  return (
    <div className="w-[1000%] px-10 py-5">
      <Link to={"../"}>Back</Link>
      <h1 className="mb-5 text-4xl font-medium">Edit Task</h1>

      <form className="mx-auto mt-10 w-100" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-5">
          <label
            htmlFor="task"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Update Task
          </label>
          <input
            type="text"
            id="task"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="New Task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Category
          </label>
          <select
            id="countries"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {categoryOption.map((data) => (
              <option value={data.name} key={data.id}>
                {data.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Due Date
          </label>

          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <button
          type="submit"
          className="bg-slate-700 p-2 rounded-md block w-[100%] text-slate-200"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditTask;
