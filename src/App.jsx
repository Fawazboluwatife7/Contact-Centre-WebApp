import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import Login from "./pages/caseManagement/Login";
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
import SuccessGen from "./pages/csPages/SuccessGeneratePaPage";
import TicketInformationPage from "./pages/csPages/TicketInformationPage";
import CsLoginPage from "./pages/csPages/CsLoginPage";
import Provider from "./pages/csPages/ProviderPage";
import Providerdetails from "./pages/csPages/ProviderDetailsPage";
import Dashboard from "./pages/caseManagement/Dashboard";
import Enrollee from "./pages/caseManagement/Enrollee";
import SearchEnrollee from "./pages/caseManagement/SearchEnrollee";
import EnrolleeDetails from "./pages/caseManagement/EnrolleeDetails";
import Admission from "./pages/caseManagement/Admission";
import PatientAdmissionHistory from "./pages/caseManagement/PatientAdmissionHistory";
import PatientInformation from "./pages/caseManagement/PatientInformation";
import UpdateProfile from "./pages/caseManagement/UpdateProfile";
import Ticket from "./pages/caseManagement/Ticket";
import AllTicket from "./pages/caseManagement/AllTicket";
import CreateTicket from "./pages/caseManagement/CreateTicket";
import ViewTicket from "./pages/caseManagement/ViewTicket";
import TicketInfoTab from "./pages/caseManagement/TicketInfoTab";
import CommentTab from "./pages/caseManagement/CommentTab";
import HistoryTab from "./pages/caseManagement/HistoryTab";
import CustomerModal from "./pages/caseManagement/customerModal";
import EnrolleeCustomerPage from "./pages/caseManagement/EnrolleeCustomerPage";
import Notification from "./pages/caseManagement/Notification";
import Workbench from "./pages/caseManagement/Workbench";

import SSDashboard from "./pages/caseManagement/SSDashboard";
import ClaimsDashboard from "./pages/caseManagement/ClaimsDashboard";
import ClaimDashboard from "./pages/caseManagement/ClaimDashboard";
import Login from "./pages/caseManagement/Login";
import SalesLogin from "./pages/sales/SalesLogin";
import DashboardCarousels from "./pages/caseManagement/DashboardCarousels";
import ClaimSideDashboard from "./pages/caseManagement/ClaimSideDashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Sidebar" element={<Sidebar />} />
                <Route path="/CsSideBar" element={<CsSideBar />} />
                <Route
                    path="/CsDashboard"
                    element={<CsDashboardLayoutPage />}
                />
                <Route path="/Enrollees" element={<EnrolleesPage />} />
                <Route
                    path="/create-ticket"
                    element={<CreateNewTicketPage />}
                />
                <Route path="/ticket" element={<TicketPage />} />
                <Route
                    path="/enrolleeInformations"
                    element={<EnrolleeInformations />}
                />
                <Route path="/approve" element={<Approve />} />
                <Route path="/reject" element={<Reject />} />
                <Route path="/history" element={<History />} />
                <Route path="/success" element={<Success />} />
                <Route path="/managePa" element={<ManagePA />} />
                <Route path="/generatePaCode" element={<GeneratePaCode />} />
                <Route path="/enrolleePaCode" element={<EnrolleePaCode />} />
                <Route path="/approvePaCode" element={<ApprovePaCode />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/enrollee" element={<Enrollee />} />
                <Route path="/searchenrollee" element={<SearchEnrollee />} />
                <Route path="/enrolleedetails" element={<EnrolleeDetails />} />
                <Route path="/admission" element={<Admission />} />
                <Route
                    path="/patienthistory"
                    element={<PatientAdmissionHistory />}
                />
                <Route path="/phistorymodal" element={<PatientInformation />} />
                <Route path="/updateprofile" element={<UpdateProfile />} />
                <Route path="/cmticket" element={<Ticket />} />
                <Route path="/allticket" element={<AllTicket />} />
                <Route path="/createticket" element={<CreateTicket />} />
                <Route path="/viewticket" element={<ViewTicket />} />
                <Route path="/ticketinfo" element={<TicketInfoTab />} />
                <Route path="/commenttab" element={<CommentTab />} />
                <Route path="/historytab" element={<HistoryTab />} />
                <Route path="/enrolleeinfo" element={<CustomerModal />} />
                <Route
                    path="/enrolleeCustomerinfo"
                    element={<EnrolleeCustomerPage />}
                />
                <Route path="/notification" element={<Notification />} />
                <Route path="/workbench" element={<Workbench />} />
                <Route path="/ssdashboard" element={<SSDashboard />} />
                <Route path="/claimsdashboard" element={<ClaimsDashboard />} />
                <Route path="/claimdashboard" element={<ClaimDashboard />} />
                {/* Sales */}
                <Route path="/salesLogin" element={<SalesLogin />} />
                {/* <Route
                    path="/salesDashboard/*"
                    element={<SalesDashboardRoutes />}
                /> */}
                <Route path="/login-caseManagement" element={<Login />} />
                <Route path="/sidedash" element={<ClaimSideDashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
