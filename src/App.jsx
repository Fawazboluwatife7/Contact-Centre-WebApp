import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/caseManagement/Login";
import Sidebar from "./components/Sidebar";
import CsSideBar from "./components/cs/csSideBar";
import "./index.css";
import CsDashboardLayoutPage from "./pages/csPages/DashboardLayoutPage";
import EnrolleesPage from "./pages/csPages/EnrolleesPage";
import CreateNewTicketPage from "./pages/csPages/CreateNewTicketPage";
import TicketPage from "./pages/csPages/TicketPage";
import EnrolleeInformations from "./pages/csPages/EnrolleInformationsPage";

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
        <Route path="/enrolleInformations" element={<EnrolleeInformations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
