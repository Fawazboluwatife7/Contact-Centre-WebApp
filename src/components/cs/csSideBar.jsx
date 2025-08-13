import { useNavigate, useLocation } from "react-router-dom";
import { FcCustomerSupport } from "react-icons/fc";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaPeoplePulling } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { FaUserDoctor } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";
import { TbDatabaseSearch } from "react-icons/tb";
import { GiCash } from "react-icons/gi";
import { SiLibreofficewriter } from "react-icons/si";

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
                    <RxDashboard className=" text-[25px]" />
                    <p className="ml-2">Dashboard</p>
                </div>
                <div
                    className={`mt-1 flex px-10 cursor-pointer p-2 
                        ${
                            location.pathname.includes(
                                "createpaenrolleesearch",
                            ) || location.pathname.includes("createpacode")
                                ? "bg-[#C61531] text-white"
                                : "hover:bg-[#C61531] hover:text-white"
                        }`}
                    onClick={() => handleNavigate("/createpaenrolleesearch")}
                >
                    <SiLibreofficewriter className=" text-[23px]" />
                    <p className="ml-2 whitespace-nowrap">Issue PA</p>
                </div>
                <div
                    className={`mt-1 flex px-10 cursor-pointer p-2 
                        ${
                            location.pathname.includes("history") ||
                            location.pathname.includes("createpacode")
                                ? "bg-[#C61531] text-white"
                                : "hover:bg-[#C61531] hover:text-white"
                        }`}
                    onClick={() => handleNavigate("/history")}
                >
                    <FaUserDoctor className=" text-[23px]" />
                    <p className="ml-2 whitespace-nowrap">PA Requests</p>
                </div>
                <div
                    className={`mt-1 flex px-10 cursor-pointer p-2 
                        ${
                            location.pathname.includes("enrollees") ||
                            location.pathname.includes(
                                "csenrolleeprofileupdate",
                            )
                                ? "bg-[#C61531] text-white"
                                : "hover:bg-[#C61531] hover:text-white"
                        }`}
                    onClick={() => handleNavigate("/enrollees")}
                >
                    <FaPeopleRobbery className=" text-[23px]" />
                    <p className="ml-2">Enrollees</p>
                </div>
                <div
                    className={`mt-1 flex px-10 cursor-pointer p-2 
                        ${
                            location.pathname.includes("providers") ||
                            location.pathname.includes("xx")
                                ? "bg-[#C61531] text-white"
                                : "hover:bg-[#C61531] hover:text-white"
                        }`}
                    onClick={() => handleNavigate("/providers")}
                >
                    <FaHospital className=" text-[23px]" />
                    <p className="ml-2">Providers</p>
                </div>
                <div
                    className={` mt-1 flex px-5  pl-10 cursor-pointer p-2 
                        ${
                            location.pathname.includes("claimsrefund")
                                ? "bg-[#C61531] text-white"
                                : "hover:bg-[#C61531] hover:text-white"
                        }`}
                    onClick={() => handleNavigate("/claimsrefund")}
                >
                    <FaHandHoldingDollar className=" text-[25px]" />
                    <p className="ml-2 whitespace-nowrap">Claims refund</p>
                </div>
                <div
                    className={` mt-1 flex px-5  pl-10 cursor-pointer p-2 
                        ${
                            location.pathname.includes("businessrm")
                                ? "bg-[#C61531] text-white"
                                : "hover:bg-[#C61531] hover:text-white"
                        }`}
                    onClick={() => handleNavigate("/businessrm")}
                >
                    <FaPeoplePulling className=" text-[25px]" />
                    <p className="ml-2 whitespace-nowrap">Business RM</p>
                </div>
                <div
                    className={`mt-1 flex px-5  pl-10 cursor-pointer p-2 
                        ${
                            location.pathname.includes("verifypa")
                                ? "bg-[#C61531] text-white"
                                : "hover:bg-[#C61531] hover:text-white"
                        }`}
                    onClick={() => handleNavigate("/verifypa")}
                >
                    <TbDatabaseSearch className=" text-[25px]" />
                    <p className="ml-2 whitespace-nowrap">Verify PA </p>
                </div>
                <div
                    className={`mt-1 flex px-5  pl-10 cursor-pointer p-2 
                        ${
                            location.pathname.includes("paymentadvise")
                                ? "bg-[#C61531] text-white"
                                : "hover:bg-[#C61531] hover:text-white"
                        }`}
                    onClick={() => handleNavigate("/paymentadvise")}
                >
                    <GiCash className=" text-[25px]" />
                    <p className="ml-2 whitespace-nowrap">Payment Advise </p>
                </div>

                {/* <div
                    className={`mt-2 flex px-10 cursor-pointer p-2 
                        ${
                            location.pathname.includes("providers") ||
                            location.pathname.includes("xx")
                                ? "bg-[#C61531] text-white"
                                : "hover:bg-[#C61531] hover:text-white"
                        }`}
                    onClick={() => handleNavigate("/providers")}
                >
                    <FcCustomerSupport className="text-gray-400 w-[1.5rem] h-[1.5rem]" />

                    <p className="ml-2">Logging</p>
                </div> */}
            </div>
        </div>
    );
};

export default CsSidebar;
