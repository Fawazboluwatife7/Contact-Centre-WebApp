import SalesNav from './salesComponents/Landing/SalesNav';
import SalesSidebar from './salesComponents/Landing/SalesSidebar';
import SaleAgentForm from './salesComponents/SaleAgentForm';

const SaleAgentPage = () => {
  return (
    <div className="flex h-screen">
      <SalesSidebar className="" />
      <div className="flex flex-col w-full">
        <SalesNav className="" />
        <main className="w-full p-4 flex-1 ">
          
          <SaleAgentForm />
        </main>
      </div>
    </div>
  )
}

export default SaleAgentPage;
