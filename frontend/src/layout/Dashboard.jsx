import { Outlet } from "react-router-dom";
import Sidebar from "../pages/admin/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 ">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
