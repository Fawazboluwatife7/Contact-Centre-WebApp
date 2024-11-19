import SalesSidebar from './salesComponents/Landing/SalesSidebar'
import SalesNav from './salesComponents/Landing/SalesNav'
import SMEClientForm from './salesComponents/SMEClientForm'


const SMEClientOnboarding = () => {
  return (
    <div className="flex h-screen">
      <SalesSidebar className="" />
      <div className="flex flex-col w-3/4">
        <SalesNav />
        <main className="w-[1150px] p-4 flex-1"> 
          <SMEClientForm />
        </main>
      </div>
    </div>
  )
}

export default SMEClientOnboarding
