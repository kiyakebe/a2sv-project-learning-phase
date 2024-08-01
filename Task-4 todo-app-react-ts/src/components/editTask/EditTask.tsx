import categoryOption from "../../assets/category.json";
import { useParams } from "react-router-dom";
import useTodoContext from "../../hooks/useTodoContext";
import { FormEvent, useEffect, useState } from "react";
import { Todo } from "../../types";

const EditTask = () => {
  const { task } = useParams();
  console.log("this is me", task);

  
  const { dispatch } = useTodoContext();

  // const taskName = taskName ? taskName : ""
  
  const [taskName, setTaskName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(Boolean);

  // useEffect(() => {
  //   setTaskName(taskName as string);
  //   setCategory(category as string);
  //   setDate(date as string);
  //   setCompleted(completed);
  // }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const current = new Date();

    const newTodo: Todo = {
      id: parseInt(task as string),
      taskName: taskName,
      completed: completed,
      date: date,
      category: category,
    };

    dispatch({ type: "UPDATE_TASK", payload: newTodo });
  };

  return (
    <div className="w-[1000%] px-10 py-5">
      <h1 className="text-4xl mb-5 font-medium">Edit Task</h1>

      <form className="mx-auto w-100 mt-10" onSubmit={(e) => handleSubmit(e)}>
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
