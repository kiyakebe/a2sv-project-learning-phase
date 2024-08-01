import TodoList from "./TodoList";

const ToDo = () => {
  return (
    <div className="w-[1000%] px-10 py-5">
      <h1 className="text-4xl mb-5 font-medium">Todos</h1>

      <input
        type="search"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border
         border-slate-300 rounded-lg bg-gray-50 focus:ring-blue-700
          focus:border-blue-500 outline-none"
        placeholder="Search Todo"
        required
      />

      <TodoList />
    </div>
  );
};

export default ToDo;
