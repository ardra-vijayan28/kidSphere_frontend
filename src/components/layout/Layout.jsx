import { Outlet } from "react-router";
import Sidebar from '../sidebar/Sidebar';

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Outlet /> {/* This will render the active page */}
      </div>
    </div>
  );
};

export default Layout;
