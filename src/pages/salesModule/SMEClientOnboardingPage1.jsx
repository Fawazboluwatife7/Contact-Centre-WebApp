import React from 'react'
import CsSidebar from '../../components/cs/csSideBar'
import Header from '../../components/cs/Header'
import SMEClientOnboarding1 from './salesComponents/SMEClientOnboarding1'


const SMEClientOnboardingPage1 = () => {
  return (
    <div className="flex h-screen">
      <CsSidebar className="" />
      <div className="flex flex-col w-3/4">
        <Header />
        <main className="w-[1150px] p-4 flex-1">
          
          <SMEClientOnboarding1 />
        </main>
      </div>
    </div>
  )
}

export default SMEClientOnboardingPage1
