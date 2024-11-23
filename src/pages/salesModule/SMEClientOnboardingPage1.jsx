import SMEClientOnboarding1 from './salesComponents/SMEClientOnboarding1'
import SalesSidebar from './salesComponents/Landing/SalesSidebar'
import SalesNav from './salesComponents/Landing/SalesNav'


const SMEClientOnboardingPage1 = () => {
  return (
    <div className="flex h-screen">
      <SalesSidebar className="" />
      <div className="flex flex-col w-3/4">
        <SalesNav />
        <main className="w-[1150px] p-4 flex-1">
          
          <SMEClientOnboarding1 />
        </main>
      </div>
    </div>
  )
}

export default SMEClientOnboardingPage1
