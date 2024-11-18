import { Outlet } from 'react-router-dom';
import RecentProspectsTable from './salesComponents/RecentProspectsTable';
import Header from '../../components/cs/Header';
import CsSidebar from '../../components/cs/csSideBar';
import Workbench from './salesComponents/Workbench';
import CardDisplay from './salesComponents/CardDisplay';



const StaffDashboard = () => {
  return (
    <div className="flex h-screen">
      <CsSidebar className="" />
      <div className="flex flex-col w-3/4">
        <Header />
        <main className="w-[1150px] p-4 bg-gray-100 flex-1 ">
          <header className="mb-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">Hi, Temilade 👋</div>
              <div className="flex items-center">
              </div>
            </div>
          </header>
          <CardDisplay />
          <RecentProspectsTable />
          <Workbench />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StaffDashboard;