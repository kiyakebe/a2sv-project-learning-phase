import useTodoContext from "../../hooks/useTodoContext";
import AddTaskBtn from "../sidebar/AddTaskBtn";
import { Todo } from "../../types";
import { Link } from "react-router-dom";

const Task = (todos: Todo) => {
  const { dispatch } = useTodoContext();

  return (
    <tr key={todos.id} className="bg-white border my-2 hover:bg-gray-50">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {todos.taskName}
      </th>
      <td className="px-6 py-4"> {todos.date} </td>
      <td className="px-6 py-4"> {todos.category} </td>
      <td className="flex items-center px-6 py-4">
        <Link
          to={`edit-task/${todos}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </Link>

        <button
          onClick={() => dispatch({ type: "DELETE_TASK", payload: todos.id })}
          className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

const NotTask = () => {
  return (
    <div className="w-100 h-[30vh] my-3 bg-gray-50 border flex items-center justify-center">
      <h1 className="text-slate-700 text-xl">No Task Found Yet!</h1>
    </div>
  );
};

const TodoList = () => {
  const { tasks } = useTodoContext();
  console.log(tasks);

  return (
    <div className="relative overflow-x-auto  my-5">
      {tasks && tasks?.length > 0 ? (
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="border">
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Task
              </th>
              <th scope="col" className="px-6 py-3">
                Due Date
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="border-separate">
            {tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                taskName={task.taskName}
                completed={task.completed}
                date={task.date}
                category={task.category}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <NotTask />
          <AddTaskBtn />
        </div>
      )}
    </div>
  );
};

export default TodoList;
