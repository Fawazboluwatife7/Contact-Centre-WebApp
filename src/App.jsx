import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/caseManagement/Login";
import Sidebar from "./components/Sidebar";

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Sidebar" element={<Sidebar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
