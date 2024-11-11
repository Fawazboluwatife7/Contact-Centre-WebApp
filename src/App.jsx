import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/caseManagement/Login";
import Sidebar from "./components/Sidebar";
import CsSideBar from "./components/cs/csSideBar";
import CsNavBar from "./components/cs/csNavBar"; 
import './index.css'; 


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Sidebar" element={<Sidebar />} />
                <Route path="/CsSideBar" element={<CsSideBar />} />
                <Route path="/CsNavBar" element={<CsNavBar/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
