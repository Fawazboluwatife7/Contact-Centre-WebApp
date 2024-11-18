import CsSidebar from '../../components/cs/csSideBar'
import Header from '../../components/cs/Header';
import Companydetails from './salesComponents/CompanyDetails'

const CompanyDetailsPage = () => {
  return (
    <div className="flex h-screen">
      <CsSidebar className="" />
      <div className="flex flex-col w-3/4">
        <Header />
        <main className="w-[1150px] p-4 flex-1 ">
          
          <Companydetails />
        </main>
      </div>
    </div>
  )
}

export default CompanyDetailsPage;
