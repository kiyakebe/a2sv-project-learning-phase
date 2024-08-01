import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import RightSidebar from "./rightSidebar/RightSidebar";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  return (
    <div className="flex h-[100vh]">
      <ToastContainer position="top-center" theme="colored" />
      <Sidebar />
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
