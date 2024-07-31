import AddTaskBtn from "./AddTaskBtn"
import Profile from "./Profile"

const Sidebar = () => {
  return (
    <div className="w-[20rem] bg-slate-800 h-full p-4 ">
      <Profile />
      <div></div>
      <AddTaskBtn />
    </div>
  )
}

export default Sidebar
