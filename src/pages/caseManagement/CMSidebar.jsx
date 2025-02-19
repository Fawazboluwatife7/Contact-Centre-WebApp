import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
    const [outerSideBar, setouterSideBar] = useState(null);
    const [innerSideBar, setinnerSideBar] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (path) => {
        navigate(path);
    };
    return (
        <div className=" w-[18%]  bg-black overflow-x-hidden top-0 left-0 fixed flex">
            <div className=" w-[22%] bg-[#121638] h-[100vh] col-auto justify-items-center ">
                <div
                    className=" cursor-pointer mt-8 group hover:bg-[#C61531] p-2 "
                    onClick={setouterSideBar}
                >
                    <img src="Underwriting@3x.svg" alt="" />
                </div>
                <div className=" cursor-pointer  hover:bg-[#C61531] p-2">
                    <img src="Sales Menu@3x.svg" alt="" />
                </div>
                <div className=" cursor-pointer hover:bg-[#C61531] p-2">
                    <img src="Enrollment Menu@3x.svg" alt="" />
                </div>
                <div className=" cursor-pointer  hover:bg-[#C61531] p-2">
                    <img src="ri_customer-service-fill@3x.svg" alt="" />
                </div>
                <div className=" cursor-pointer  hover:bg-[#C61531] p-2">
                    <img src="Client Services@3x.svg" alt="" />
                </div>
                <div className=" cursor-pointer  hover:bg-[#C61531] p-2">
                    <img src="Pharmacy Benefits@3x.svg" alt="" />
                </div>
                <div className=" cursor-pointer   hover:bg-[#C61531]  bg-[#C61531] p-2">
                    <img
                        src="icon-park-solid_category-management@3x.svg"
                        alt=""
                    />
                </div>
                <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
                    <img src="Reporting Menu@3x.svg" alt="" />
                </div>
                <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
                    <img src="Ticket Menu@3x.svg" alt="" />
                </div>
                <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
                    <img src="Finance & Settlement@3x.svg" alt="" />
                </div>
                <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
                    <img src="Admin@3x.svg" alt="" />
                </div>
                <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
                    <img src="Agent & broker management@3x.svg" alt="" />
                </div>
                <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
                    <img src="Group@3x.svg" alt="" />
                </div>
                <div className=" cursor-pointer   hover:bg-[#C61531] p-2">
                    <img src="Vector@3x.svg" alt="" />
                </div>
            </div>
            <div className=" bg-white border w-full  h-[100vh] justify-center items-center">
                <img
                    src="SmallLogo.svg"
                    alt=""
                    className=" justify-items-center mt-8 ml-10"
                />
                <div
                    className={
                        location.pathname.includes("dashboard") ||
                        location.pathname.includes("workbench")
                            ? "mt-14 flex px-10 cursor-pointer bg-[#C61531] p-2 text-white"
                            : `mt-14 flex px-10 cursor-pointer hover:bg-[#C61531] hover:text-white p-2 `
                    }
                    onClick={() => {
                        navigate("/dashboard");
                        console.log(location.pathname);
                    }}
                >
                    <img src="Dashboard.svg" alt="" />
                    <p className=" ml-2">Dashboard</p>
                </div>
                <div
                    className={
                        location.pathname.includes("admission") ||
                        location.pathname.includes("patienthistory") ||
                        location.pathname.includes("updateprofile")
                            ? " mt-2 flex px-10 cursor-pointer bg-[#C61531] p-2 text-white"
                            : ` mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] hover:text-white p-2 `
                    }
                    onClick={() => {
                        navigate("/admission");
                        console.log(location.pathname);
                    }}
                >
                    <img src="carbon_hospital-bed@3x.svg" alt="" />
                    <p className=" ml-2">Admissions</p>
                </div>
                <div
                    className={
                        location.pathname.includes("enrollee")
                            ? " mt-2 flex px-10 cursor-pointer bg-[#C61531] p-2 text-white"
                            : ` mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] hover:text-white p-2 `
                    }
                    onClick={() => {
                        navigate("/enrollee");
                        console.log(location.pathname);
                    }}
                >
                    <img src="people-group@3x.svg" alt="" />
                    <p className="ml-2">Enrollees</p>
                </div>
                <div
                    className={
                        location.pathname.includes("ticket")
                            ? " mt-2 flex px-10 cursor-pointer bg-[#C61531] p-2 text-white"
                            : ` mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] hover:text-white p-2 `
                    }
                    onClick={() => {
                        navigate("/allticket");
                        console.log(location.pathname);
                    }}
                >
                    <img src="uil_invoice@3x.svg" alt="" />
                    <p className=" ml-2">Ticket</p>
                </div>
                <div className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2">
                    <img src="Report.svg" alt="" />
                    <p className=" ml-2">Report</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
