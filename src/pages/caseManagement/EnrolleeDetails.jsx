import React from "react";
import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";

const EnrolleeDetails = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto pt-[5.1rem]  ">
                <Navbar />
                <div className="mx-7 bg"></div>
            </div>
        </div>
    );
};

export default EnrolleeDetails;
