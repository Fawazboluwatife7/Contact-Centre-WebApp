import CsSidebar from '../../components/cs/csSideBar'
import Header from '../../components/cs/Header';
import DependantsForm from './salesComponents/DependantsForm';

const CompanyDetailsPage = () => {
  return (
    <div className="flex h-screen">
      <CsSidebar className="" />
      <div className="flex flex-col w-3/4">
        <Header />
        <main className="w-[1150px] p-4 flex-1 ">
          
          <DependantsForm />
        </main>
      </div>
    </div>
  )
}

export default CompanyDetailsPage;
