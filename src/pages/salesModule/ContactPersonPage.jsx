import ContactPersonForm from './salesComponents/ContactPersonForm';
import SalesNav from './salesComponents/Landing/SalesNav';
import SalesSidebar from './salesComponents/Landing/SalesSidebar';

const ContactPersonPage = () => {
  return (
    <div className="flex h-screen">
      <SalesSidebar className="" />
      <div className="flex flex-col w-3/4">
        <SalesNav />
        <main className="w-[1150px] p-4 flex-1 ">
          
          <ContactPersonForm />
        </main>
      </div>
    </div>
  )
}

export default ContactPersonPage;
