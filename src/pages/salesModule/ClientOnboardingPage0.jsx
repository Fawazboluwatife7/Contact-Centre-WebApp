import React from 'react'
import ClientOnboardingSlide0 from './salesComponents/ClientOnboardingSlide'
import SalesSidebar from './salesComponents/Landing/SalesSidebar'
import SalesNav from './salesComponents/Landing/SalesNav'

const ClientOnboardingPage0 = () => {
  return (
    <div className="flex">
      <SalesSidebar className="" />
      <div className="flex flex-col w-3/4">
        <SalesNav />
        <main className="w-[1150px] p-4 flex-1">
          
          <ClientOnboardingSlide0 />
        </main>
      </div>
    </div>
  )
}

export default ClientOnboardingPage0