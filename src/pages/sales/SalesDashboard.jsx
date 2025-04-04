import { Outlet } from "react-router-dom";
import SalesSidebar from "../../components/sales/Landing/SalesSidebar";
import SalesNav from "../../components/sales/Landing/SalesNav";

const SalesDashboard = () => {
  return (
    <div className="flex h-100vh">
      <SalesSidebar className="" />
      <div className="flex flex-col w-full">
        <SalesNav />
        <main className="p-4 bg-gray-200 flex-1">
          <Outlet /> {/* This is where nested routes will be rendered */}
        </main>
      </div>
    </div>
  );
};

export default SalesDashboard;
