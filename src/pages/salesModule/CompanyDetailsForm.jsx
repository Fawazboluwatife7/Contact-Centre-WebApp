import Companydetails from './salesComponents/CompanyDetails'
import SalesNav from './salesComponents/Landing/SalesNav';
import SalesSidebar from './salesComponents/Landing/SalesSidebar';

const CompanyDetailsForm = () => {
  return (
    <div className="flex h-screen">
      <SalesSidebar className="" />
      <div className="flex flex-col w-3/4">
        <SalesNav />
        <main className="w-[1150px] p-4 flex-1 ">
          
          <Companydetails />
        </main>
      </div>
    </div>
  )
}

export default CompanyDetailsForm;
