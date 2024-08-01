import AddTaskBtn from "./AddTaskBtn";

const Filter = () => {
  return (
    <div className="my-5">
      <h2 className="text-slate-200 text-xl">Filter Todos</h2>
      <h3 className="text-slate-300 my-2">Category</h3>
      <button className="bg-slate-700 p-2 text-left rounded-md block text-sm w-[100%] text-slate-200 my-3">
        All
      </button>
      <button className="bg-slate-700 p-2 text-left rounded-md block text-sm w-[100%] text-slate-200 my-3">
        Personal
      </button>
      <button className="bg-slate-700 p-2 text-left rounded-md block text-sm w-[100%] text-slate-200 my-3">
        Work
      </button>
      <h3 className="text-slate-300 my-2">Due Date</h3>
      <button className="bg-slate-700 p-2 text-left rounded-md block text-sm w-[100%] text-slate-200 my-3">
        All
      </button>
      <button className="bg-slate-700 p-2 text-left rounded-md block text-sm w-[100%] text-slate-200 my-3">
        Today
      </button>
      <button className="bg-slate-700 p-2 text-left rounded-md block text-sm w-[100%] text-slate-200 my-3">
        This Week
      </button>
    </div>
  );
};

export default Filter;
