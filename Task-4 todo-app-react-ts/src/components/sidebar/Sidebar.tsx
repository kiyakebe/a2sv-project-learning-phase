import AddTaskBtn from "./AddTaskBtn";
import Filter from "./Filter";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <div className="w-[20rem] bg-slate-800 h-full p-4 py-5 flex-shrink-0">
      <Profile />
      <div></div>
      <AddTaskBtn />
      <Filter />
    </div>
  );
};

export default Sidebar;
