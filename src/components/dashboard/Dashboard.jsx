import MainContent from './MainContent';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
// import Sidebar from '../sidebar/Sidebar';
import { useLocation } from 'react-router';

function Dashboard() {
  const location = useLocation(); 
  const isDashboard = location.pathname.includes("dashboard/");

  return (
    <div>
      <Navbar/>
      {/* <Sidebar/> */}
      {isDashboard? <Outlet/>:<MainContent/>} 
      
    </div>
  );
}   
export default Dashboard;