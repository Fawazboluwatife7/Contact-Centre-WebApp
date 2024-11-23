import SalesNav from './salesComponents/Landing/SalesNav';
import SalesSidebar from './salesComponents/Landing/SalesSidebar';
import Workbench2 from './salesComponents/WorkBench2';

const WorkbenchPages = () => {
  return (
    <div className="flex h-screen">
      <SalesSidebar className="" />
      <div className="flex flex-col w-3/4">
        <SalesNav />
        <main className="w-[1150px] p-4 flex-1 ">
          
          <Workbench2 />
        </main>
      </div>
    </div>
  )
}

export default WorkbenchPages;
