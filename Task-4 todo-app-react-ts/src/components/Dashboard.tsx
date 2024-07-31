import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import RightSidebar from "./rightSidebar/RightSidebar";

const Dashboard = () => {
  return (
    <div className="flex h-[100vh]">
      <Sidebar />
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
