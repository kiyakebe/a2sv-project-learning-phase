import { FormEvent, useRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import category from "../../assets/category.json";
import useTodoContext from "../../hooks/useTodoContext";
import { Todo } from "../../types";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTask = () => {
  const { dispatch } = useTodoContext();
  const navigate = useNavigate();

  const taskNameRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toast_alert = (message: string) =>
      toast.success(message, { theme: "light", autoClose: 2000 });

    const newTaskName = taskNameRef.current?.value
      ? taskNameRef.current.value
      : "";
    const selectedCategory = categoryRef.current?.value
      ? categoryRef.current.value
      : "";
    const dueDate = dueDateRef.current?.value ? dueDateRef.current.value : "";
    const completed = false;

    const current = new Date();

    const newTodo: Todo = {
      id: current.getTime(),
      taskName: newTaskName,
      completed: completed,
      date: dueDate,
      category: selectedCategory,
    };

    dispatch({ type: "ADD_TASK", payload: newTodo });
    toast_alert("Todo Created!");

    navigate("/");
  };

  return (
    <div className="w-[1000%] px-10 py-5">
      {/* <ToastContainer position="top-center" theme="colored" /> */}
      <Link to={"../"}>Back</Link>
      <h1 className="mb-5 text-4xl font-medium">Add Task</h1>

      <form className="mx-auto mt-10 w-100" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-5">
          <label
            htmlFor="task"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New Task
          </label>
          <input
            type="text"
            id="task"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="New Task"
            ref={taskNameRef}
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
            ref={categoryRef}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {category.map((data) => (
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
            ref={dueDateRef}
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <button
          type="submit"
          className="bg-slate-700 p-2 rounded-md block w-[100%] text-slate-200"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
