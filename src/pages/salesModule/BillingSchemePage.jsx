import BillingSchemeForm from './salesComponents/BillingSchemeForm';
import SalesNav from './salesComponents/Landing/SalesNav';
import SalesSidebar from './salesComponents/Landing/SalesSidebar';

const BillingSchemePage = () => {
  return (
    <div className="flex h-screen">
      <SalesSidebar className="" />
      <div className="flex flex-col w-3/4">
        <SalesNav />
        <main className="w-[1150px] p-4 flex-1 ">
          
          <BillingSchemeForm />
        </main>
      </div>
    </div>
  )
}

export default BillingSchemePage;
