import React from 'react'
import ClientOnboarding from './salesComponents/ClientOnboarding'
import SalesSidebar from './salesComponents/Landing/SalesSidebar'
import SalesNav from './salesComponents/Landing/SalesNav'

const ClientOnboardingPage = () => {
  return (
    <div className="flex h-screen">
      <SalesSidebar className="" />
      <div className="flex flex-col w-3/4">
        <SalesNav />
        <main className="w-[1150px] p-4 flex-1">
          
          <ClientOnboarding />
        </main>
      </div>
    </div>
  )
}

export default ClientOnboardingPage