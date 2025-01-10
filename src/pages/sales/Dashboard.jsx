import React from 'react'
import WelcomeUser from '../../components/sales/WelcomeUser'
import CardDisplay from '../../components/sales/CardDisplay'
import RecentProspectsTable from '../../components/sales/RecentProspectsTable'
import Workbench1 from '../../components/sales/Workbench1'

const Dashboard = () => {
  return (
    <div>
      <main className='min-h-full px-3'>
        <WelcomeUser />
        <CardDisplay />
        <RecentProspectsTable />
        <Workbench1 />
      </main>
    </div>
  )
}

export default Dashboard
