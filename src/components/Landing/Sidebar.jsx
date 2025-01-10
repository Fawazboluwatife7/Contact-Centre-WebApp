import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image
    const navigate = useNavigate();

    const handleClick = (index) => {
        setSelectedImage(index); // Set the clicked image index as selected
    };

    const handleNavigate = () => {
        navigate("/enrollee");
    };

    const images = [
        "Underwriting@3x.svg",
        "Sales Menu@3x.svg",
        "Enrollment Menu@3x.svg",
        "ri_customer-service-fill@3x.svg",
        "Client Services@3x.svg",
        "Pharmacy Benefits@3x.svg",
        "icon-park-solid_category-management@3x.svg",
        "Reporting Menu@3x.svg",
        "Ticket Menu@3x.svg",
        "Finance & Settlement@3x.svg",
        "Admin@3x.svg",
        "Agent & broker management@3x.svg",
        "Group@3x.svg",
        "Vector@3x.svg",
    ];

    return (
        <div className="w-[18%] bg-black overflow-x-hidden top-0 left-0 fixed flex">
            {/* Sidebar Menu */}
            <div className="w-[22%] bg-[#121638] h-[100vh] col-auto justify-items-center">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer p-2 ${
                            selectedImage === index
                                ? "bg-[#C61531]"
                                : "hover:bg-[#C61531]"
                        }`} // Apply red background if selected
                        onClick={() => handleClick(index)}
                    >
                        <img src={src} alt={`Menu ${index}`} />
                    </div>
                ))}
            </div>

            {/* Sidebar Content */}
            <div className="bg-white border w-full border-red-500 h-[100vh] justify-center items-center">
                <img
                    src="SmallLogo.svg"
                    alt=""
                    className="justify-items-center mt-8 ml-10"
                />
                <div
                    className="mt-14 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
                    onClick={() => console.log("Dashboard Clicked")}
                >
                    <img src="Dashboard.svg" alt="" />
                    <p className="ml-2">Dashboard</p>
                </div>
                <div
                    className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
                    onClick={() => console.log("Admissions Clicked")}
                >
                    <img src="carbon_hospital-bed@3x.svg" alt="" />
                    <p className="ml-2">Admissions</p>
                </div>
                <div
                    className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
                    onClick={handleNavigate}
                >
                    <img src="people-group@3x.svg" alt="" />
                    <p className="ml-2">Enrollees</p>
                </div>
                <div
                    className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
                    onClick={() => console.log("Ticket Clicked")}
                >
                    <img src="uil_invoice@3x.svg" alt="" />
                    <p className="ml-2">Ticket</p>
                </div>
                <div
                    className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2"
                    onClick={() => console.log("Report Clicked")}
                >
                    <img src="Report.svg" alt="" />
                    <p className="ml-2">Report</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
