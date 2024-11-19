import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/caseManagement/Login";
import Sidebar from "./components/Landing/Sidebar";
import CsSideBar from "./components/cs/csSideBar";
import "./index.css";
import CsDashboardLayoutPage from "./pages/csPages/DashboardLayoutPage";
import EnrolleesPage from "./pages/csPages/EnrolleesPage";
import CreateNewTicketPage from "./pages/csPages/CreateNewTicketPage";
import TicketPage from "./pages/csPages/TicketPage";
import EnrolleeInformations from "./pages/csPages/EnrolleInformationsPage";
import Reject from "./pages/csPages/RejectPage";
import Approve from "./pages/csPages/ApprovePage";
import History from "./pages/csPages/PA-HistoryPage";
import Success from "./pages/csPages/SuccessPaCodePage";
import ManagePA from "./pages/csPages/ManagePaPage";
import GeneratePaCode from "./pages/csPages/GeneratePaCodePage";
import EnrolleePaCode from "./pages/csPages/EnrolleePaCodePage";
import ApprovePaCode from "./pages/csPages/ApprovePaCodePage";
import SalesLogin from "./pages/salesModule/SalesLogin"
import StaffDashboard from "./pages/salesModule/StaffDashboard"
import WorkbenchPages from "./pages/salesModule/WorkbenchPages";
import CreateProspectPage from "./pages/salesModule/CreateProspectPage";
import ClientOnboardingPage from './pages/salesModule/ClientOnboardingPage';
import SMEClientOnboardingPage1 from "./pages/salesModule/SMEClientOnboardingPage1";
import CompanyDetailsForm from "./pages/salesModule/CompanyDetailsForm";
import ContactPersonPage from "./pages/salesModule/ContactPersonPage";
import BillingSchemePage from "./pages/salesModule/BillingSchemePage";
import DependantsPage from "./pages/salesModule/DependantsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/CsSideBar" element={<CsSideBar />} />
        <Route path="/CsDashboard" element={<CsDashboardLayoutPage />} />
        <Route path="/Enrollees" element={<EnrolleesPage />} />
        <Route path="/create-ticket" element={<CreateNewTicketPage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/enrolleeInformations" element={<EnrolleeInformations />} />
        <Route path="/approve" element={<Approve />} />
        <Route path="/reject" element={<Reject />} />
        <Route path="/history" element={<History />} />
        <Route path="/success" element={<Success />} />
        <Route path="/managePa" element={<ManagePA />} />
        <Route path="/generatePaCode" element={<GeneratePaCode />} />
        <Route path="/enrolleePaCode" element={<EnrolleePaCode />} />
        <Route path="/approvePaCode" element={<ApprovePaCode />} />
        <Route path="/SalesLogin" element={<SalesLogin />} />
        <Route path="/StaffDashboard" element={<StaffDashboard />} />
        <Route path="/Workbench2" element={<WorkbenchPages />} />
        <Route path="/CreateProspectPage" element={<CreateProspectPage />} />
        <Route path="/ClientOnboardingPage" element={<ClientOnboardingPage />} />
        <Route path="/SMEClientOnboardingPage1" element={<SMEClientOnboardingPage1 />} />
        <Route path="/CompanyDetailsForm" element={<CompanyDetailsForm />} />
        <Route path="/ContactPersonPage" element={<ContactPersonPage />} />
        <Route path="/BillingSchemePage" element={<BillingSchemePage />} />
        <Route path="/DependantsPage" element={<DependantsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
