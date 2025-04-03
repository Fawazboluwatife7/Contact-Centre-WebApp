import { useNavigate, useLocation } from "react-router-dom";

const CsSidebar = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const location = useLocation();
    // Function to handle navigation
    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="flex w-[18%] overflow-x-hidden top-0 left-0 fixed ">
            <div className="w-[4rem] bg-[#121638]  justify-items-center">
                <div className="cursor-pointer mt-8 group hover:bg-[#C61531] p-2">
                    <img src="Underwriting@3x.svg" alt="" />
                </div>
                <div className="cursor-pointer hover:bg-[#C61531] p-2">
                    <img src="Sales Menu@3x.svg" alt="" />
                </div>
                <div className="cursor-pointer hover:bg-[#C61531] p-2">
                    <img src="Enrollment Menu@3x.svg" alt="" />
                </div>
                <div className="cursor-pointer bg-red-500 hover:bg-[#C61531] p-2">
                    <img src="ri_customer-service-fill@3x.svg" alt="" />
                </div>
                <div className="cursor-pointer hover:bg-[#C61531] p-2">
                    <img src="Client Services@3x.svg" alt="" />
                </div>
                <div className="cursor-pointer hover:bg-[#C61531] p-2">
                    <img src="Pharmacy Benefits@3x.svg" alt="" />
                </div>
                <div className="cursor-pointer hover:bg-[#C61531] p-2">
                    <img
                        src="icon-park-solid_category-management@3x.svg"
                        alt=""
                    />
                </div>
                <div className="cursor-pointer hover:bg-[#C61531] p-2">
                    <img src="Reporting Menu@3x.svg" alt="" />
                </div>
                <div className="cursor-pointer hover:bg-[#C61531] p-2">
                    <img src="Ticket Menu@3x.svg" alt="" />
                </div>
                <div className="cursor-pointer hover:bg-[#C61531] p-2">
                    <img src="Finance & Settlement@3x.svg" alt="" />
                </div>
                <div className="cursor-pointer hover:bg-[#C61531] p-2">
                    <img src="Admin@3x.svg" alt="" />
                </div>
                <div className="cursor-pointer hover:bg-[#C61531] p-2">
                    <img src="Agent & broker management@3x.svg" alt="" />
                </div>
                <div className="cursor-pointer hover:bg-[#C61531] p-2">
                    <img src="Group@3x.svg" alt="" />
                </div>
                <div className="cursor-pointer hover:bg-[#C61531] p-2">
                    <img src="Vector@3x.svg" alt="" />
                </div>
            </div>
            <div className="bg-white w-[14rem] border min-h-screen justify-center items-center ">
                <img
                    src="SmallLogo.svg"
                    alt=""
                    className="justify-items-center mt-8 ml-10"
                />
                <div
                    className={`mt-14 flex px-10 cursor-pointer p-2 
                        ${
                            location.pathname.includes("CsDashboard") ||
                            location.pathname.includes("managePa") ||
                            location.pathname.includes("pendingpa") ||
                            location.pathname.includes("csenrolleepage") ||
                            location.pathname.includes("paapprovalpage")
                                ? "bg-[#C61531] text-white"
                                : "hover:bg-[#C61531] hover:text-white"
                        }`}
                    onClick={() => handleNavigate("/CsDashboard")}
                >
                    <img src="Dashboard.svg" alt="" />
                    <p className="ml-2">Dashboard</p>
                </div>
                <div
                    className={`mt-2 flex px-10 cursor-pointer p-2 
                        ${
                            location.pathname.includes("history") ||
                            location.pathname.includes("createpacode")
                                ? "bg-[#C61531] text-white"
                                : "hover:bg-[#C61531] hover:text-white"
                        }`}
                    onClick={() => handleNavigate("/history")}
                >
                    <img src="carbon_hospital-bed@3x.svg" alt="" />
                    <p className="ml-2">PA Requests</p>
                </div>
                <div
                    className={`mt-2 flex px-10 cursor-pointer p-2 
                        ${
                            location.pathname.includes("enrollees") ||
                            location.pathname.includes("cspatienthistory")
                                ? "bg-[#C61531] text-white"
                                : "hover:bg-[#C61531] hover:text-white"
                        }`}
                    onClick={() => handleNavigate("/enrollees")}
                >
                    <img src="people-group@3x.svg" alt="" />
                    <p className="ml-2">Enrollees</p>
                </div>
                <div
                    className={`mt-2 flex px-10 cursor-pointer p-2 
                        ${
                            location.pathname.includes("providers") ||
                            location.pathname.includes("xx")
                                ? "bg-[#C61531] text-white"
                                : "hover:bg-[#C61531] hover:text-white"
                        }`}
                    onClick={() => handleNavigate("/providers")}
                >
                    <img src="uil_invoice@3x.svg" alt="" />
                    <p className="ml-2">Providers</p>
                </div>
            </div>
        </div>
    );
};

export default CsSidebar;
