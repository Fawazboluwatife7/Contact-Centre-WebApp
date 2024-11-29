import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SalesDashboard from '../../pages/sales/SalesDashboard';
import Workbench1 from '../../components/sales/Workbench1';
import CardDisplay from '../../components/sales/CardDisplay';
import PendingTask from '../../pages/sales/PendingTask';
import CreateProspect1 from '../../pages/sales/CreateProspect1';
import CorporateClientOnboarding5 from '../../pages/sales/CorporateClientOnboarding6';
import CorporateClientOnboarding6 from '../../pages/sales/CorporateClientOnboarding5';
import SMEClientOnboarding1 from '../../pages/sales/SMEClientOnboarding1'
import CorporateClientOnboarding1 from '../../pages/sales/CorporateClientOnboarding1';
import CorporateClientOnboarding2 from '../../pages/sales/CorporateClientOnboarding2';
import CorporateClientOnboarding3 from '../../pages/sales/CorporateClientOnboarding3';
import CorporateClientOnboarding4 from '../../pages/sales/CorporateClientOnboarding4';
import SaleAgentPage from '../../pages/sales/SaleAgentPage';
import SMEClientOnboarding2 from '../../pages/sales/SMEClientOnboarding2';
import RecentProspectsTable from '../../components/sales/RecentProspectsTable';
import WelcomeUser from '../../components/sales/WelcomeUser';
import UpdateProfile from '../../pages/sales/UpdateProfile'
import ClientsProfile from '../../pages/sales/ClientsProfile';
import ClientsProfilePage from '../../pages/sales/ClientsProfilePage';
import ProspectProfile from '../../pages/sales/ProspectProfile';
import CoveragePlan from '../../pages/sales/CoveragePlan';

function SalesDashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SalesDashboard />}>
        <Route index element={
          <>
            <WelcomeUser />
            <CardDisplay />
            <RecentProspectsTable />
            <Workbench1 />
          </>
        } />
        <Route path="pending-task" element={<PendingTask />} />
        <Route path="create-prospect1" element={<CreateProspect1 />} />
        <Route path="corporate-client-onboarding5" element={<CorporateClientOnboarding5 />} />
        <Route path="corporate-client-onboarding6" element={<CorporateClientOnboarding6 />} />
        <Route path="sme-client-onboarding1" element={<SMEClientOnboarding1 />} />
        <Route path="corporate-client-onboarding1" element={<CorporateClientOnboarding1 />} />
        <Route path="corporate-client-onboarding2" element={<CorporateClientOnboarding2 />} />
        <Route path="corporate-client-onboarding3" element={<CorporateClientOnboarding3 />} />
        <Route path="corporate-client-onboarding4" element={<CorporateClientOnboarding4 />} />
        <Route path="sales-agent" element={<SaleAgentPage />} />
        <Route path="sme-client-onboarding2" element={<SMEClientOnboarding2 />} />
        <Route path="update-profile" element={<UpdateProfile />} />
        <Route path="clients-profile" element={<ClientsProfile />} />
        <Route path="clients-profile-page" element={<ClientsProfilePage />} />
        <Route path="prospect-profile" element={<ProspectProfile />} /> 
        <Route path="coverage-plan" element={<CoveragePlan />} />
      </Route>
    </Routes>
  );
}

export default SalesDashboardRoutes;
