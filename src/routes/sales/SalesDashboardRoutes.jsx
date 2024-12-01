import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SalesDashboard from '../../pages/sales/SalesDashboard';
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
import UpdateProfile from '../../pages/sales/UpdateProfile'
import ClientsProfile from '../../pages/sales/ClientsProfile';
import ClientsProfilePage from '../../pages/sales/ClientsProfilePage';
import ProspectProfile from '../../pages/sales/ProspectProfile';
import CoveragePlan from '../../pages/sales/CoveragePlan';
import ClientEnrollees from '../../pages/sales/ClientEnrollees';
import AddEnrollee from '../../pages/sales/AddEnrollee';
import EnrolleeOnboard from '../../pages/sales/EnrolleeOnboard';
import ClientEnrolleeProfile from '../../pages/sales/ClientEnrolleeProfile';
import Invoice from "../../pages/sales/Invoice";
import Clients from "../../pages/sales/Clients";
import Proposals from "../../pages/sales/Proposals";
import AddEnrolleeMultiple from '../../pages/sales/AddEnrolleeMultiple';
import Prospects from '../../pages/sales/Prospects';
import SMEClientProfile from '../../pages/sales/SMEClientProfile';
import ManageProposal from '../../pages/sales/ManageProposal';
import InvoiceReview from '../../pages/sales/InvoiceReview';
import Dashboard from '../../pages/sales/Dashboard';

function SalesDashboardRoutes() {
  return (
    <Routes>

      // Dashboard
      <Route path="/" element={<SalesDashboard />}>
        <Route index element={
          <>
            <Dashboard />
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
        <Route path="client-enrollees" element={<ClientEnrollees />} />
        <Route path="client-enrollee-profile" element={<ClientEnrolleeProfile />} />
        <Route path="add-enrollee" element={<AddEnrollee />} />
        <Route path="enrollee-onboard" element={<EnrolleeOnboard />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/add-enrollee-multiple" element={<AddEnrolleeMultiple />} />
        <Route path="/prospects" element={<Prospects />} />
        <Route path="/sme-client-profile" element={<SMEClientProfile />} />
        <Route path="/manage-proposal" element={<ManageProposal />} />
        <Route path="/invoice-review" element={<InvoiceReview />} />
      </Route>
    </Routes>
  );
}

export default SalesDashboardRoutes;
