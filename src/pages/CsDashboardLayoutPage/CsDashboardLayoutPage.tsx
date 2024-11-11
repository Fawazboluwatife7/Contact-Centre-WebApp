import React from 'react'
import CsSidebar from '../../components/cs/csSideBar'
import CsDashboard from '../../components/cs/csDashboard'


function CsDashboardLayoutPage() {
  return (
    <div className='flex  '>
        <CsSidebar/>

        <CsDashboard/>

    </div>
  )
}

export default CsDashboardLayoutPage