import { Link, useNavigate } from "react-router-dom";
import backIcon from "../../assets/csImages/eva_arrow-back-outline.svg";
import avatar from "../../assets/csImages/Rectangle 896.svg";
import svg from "../../assets/csImages/Ellipse 75.svg";
import dropdown from "../../assets/csImages/Group 2398.svg";
import { useState, useEffect } from "react";
import search from "../../assets/csImages/Search.svg";
import plusiconred from "../../assets/csImages/Group 2356.svg";

const EnrollePaCode = () => {
    const [enrolleeData, setEnrolleeData] = useState(null);
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const [dropdownStates, setDropdownStates] = useState({
        visitType: false,
        benefits: false,
    });
    const [selectedItems, setSelectedItems] = useState({
        visitType: "",
        benefits: "",
    });
    const dropdownItemsVisitType = [
        "Visit Type 1",
        "Visit Type 2",
        "Visit Type 3",
    ];
    const dropdownItemsBenefits = ["Benefit 1", "Benefit 2", "Benefit 3"];

    useEffect(() => {
        setEnrolleeData({
            name: "John Doe",
            dateOfBirth: "01/01/1990",
            enrolleeId: "LH221121/0",
            contactNumber: "123-456-7890",
            group: "A",
            emailAddress: "johndoe@example.com",
            scheme: "Basic Plan",
            primaryProvider: "Provider A",
            age: 34,
            memberType: "Individual",
            policyDate: "2022-01-01",
            amountSpent: "$200",
        });
    }, []);

    const toggleDropdown = (dropdownKey) => {
        setDropdownStates((prev) => ({
            ...prev,
            [dropdownKey]: !prev[dropdownKey],
        }));
    };

    const selectDropdownItem = (dropdownKey, item) => {
        setSelectedItems((prev) => ({
            ...prev,
            [dropdownKey]: item,
        }));
        setDropdownStates((prev) => ({
            ...prev,
            [dropdownKey]: false,
        }));
    };

    if (!enrolleeData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-lightblue  w-full p-3">
            <div className="">
                <h3 className="font-bold text-[23px] font-sans ml-4 mt-1">
                    Generate PA Code
                </h3>
                <div className="flex justify-end items-center space-x-2 mr-3 mb-3">
                    <Link to="/generatePaCode">
                        <button className="flex items-center">
                            <img
                                src={backIcon}
                                alt="Back Icon"
                                className="w-6 h-6"
                            />
                        </button>
                    </Link>

                    <h4 className="text-[#C61531] font-normal text-[16px] text-left">
                        Back to enrollee Search
                    </h4>
                </div>

                <div className=" rounded-md bg-white">
                    <h1 className=" font-bold bg-white pl-5 py-3 text-[20px] text-gray-500 rounded-md">
                        Enrollee Information
                    </h1>
                    <div className="flex gap-6  w-full ">
                        {/* Profile Image */}
                        <div className="flex flex-col items-center ml-6">
                            <img
                                src="Avataraang.svg"
                                alt="Avatar"
                                className="w-20 h-20 rounded-full"
                            />
                            <div className=" items-center mt-2 rounded-full flex gap-2">
                                <span className=" h-2 w-2 rounded-full bg-green-600 flex"></span>
                                Active
                            </div>
                        </div>

                        <div className=" w-full">
                            <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4  ">
                                <div>
                                    <span className="block text-gray-500">
                                        Name
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.name}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">
                                        Date of Birth
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.dateOfBirth}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">
                                        Enrollee ID
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.enrolleeId}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">
                                        Phone Number
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.contactNumber}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">
                                        Group
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.group}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">
                                        Email Address
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.emailAddress}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">
                                        Scheme
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.scheme}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">
                                        Primary Provider
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.primaryProvider}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">
                                        Age
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.age}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">
                                        Member Type
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.memberType}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">
                                        Policy Date
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.policyDate}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">
                                        Amount Spent
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.amountSpent}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">
                                        Next of Kin
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.nextOfKin}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-gray-500">
                                        NOK Phone Number
                                    </span>
                                    <span className="block font-medium">
                                        {enrolleeData.NOKPhoneNumber}
                                    </span>
                                </div>
                                <div></div>
                                <div></div>
                                <div></div>

                                <button
                                    className=" text-[#C61531] border border-[#C61531] bg-[#C615311A] rounded-md flex gap-3 px-3 py-2 justify-items-end items-end mb-3 "
                                    onClick={() =>
                                        handleNavigate("/updateprofile")
                                    }
                                >
                                    <img
                                        src="handpen.svg"
                                        alt=""
                                        className=" h-7"
                                    />
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-white p-6 shadow-md rounded-lg mt-3 w-full">
                <h2 className="ml-6 text-[22px] text-red-700 font-bold mb-6">
                    Procedure Information
                </h2>

                {/* First Row of Input Divs */}
                <div className="flex ml-6 space-x-4">
                    <div className="relative w-[320px]">
                        <label className="block mb-2 text-gray-700 font-medium">
                            Visit Type
                        </label>
                        <div className="relative w-full h-[44px] border border-black rounded-lg">
                            <button
                                onClick={() => toggleDropdown("visitType")}
                                className="flex items-center justify-between w-full h-full px-3 text-gray-600 bg-white rounded-lg"
                            >
                                <span>
                                    {selectedItems.visitType || "- Select -"}
                                </span>
                                <img
                                    src={dropdown}
                                    alt="Dropdown"
                                    className={`w-4 h-4 ${
                                        dropdownStates.visitType
                                            ? "transform rotate-180"
                                            : ""
                                    }`}
                                />
                            </button>

                            {dropdownStates.visitType && (
                                <ul className="absolute left-0 w-full bg-white border border-black rounded-lg shadow-md mt-1 z-10">
                                    {dropdownItemsVisitType.map(
                                        (item, index) => (
                                            <li
                                                key={index}
                                                className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() =>
                                                    selectDropdownItem(
                                                        "visitType",
                                                        item,
                                                    )
                                                }
                                            >
                                                {item}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Date Picker */}
                    <div className="relative w-[320px]">
                        <label className="block mb-2 text-gray-700 font-medium">
                            Encounter Start Date
                        </label>
                        <div className="relative w-full h-[44px] border border-black rounded-lg">
                            <input
                                type="date"
                                className="w-full h-full px-3 py-2 text-gray-600 bg-white rounded-lg placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Benefits Dropdown */}
                    <div className="relative w-[320px]">
                        <label className="block mb-2 text-gray-700 font-medium">
                            Benefits
                        </label>
                        <div className="relative w-full h-[44px] border border-black rounded-lg">
                            <button
                                onClick={() => toggleDropdown("benefits")}
                                className="flex items-center justify-between w-full h-full px-3 text-gray-600 bg-white rounded-lg"
                            >
                                <span>
                                    {selectedItems.benefits || "- Select -"}
                                </span>
                                <img
                                    src={dropdown}
                                    alt="Dropdown"
                                    className={`w-4 h-4 ${
                                        dropdownStates.benefits
                                            ? "transform rotate-180"
                                            : ""
                                    }`}
                                />
                            </button>

                            {dropdownStates.benefits && (
                                <ul className="absolute left-0 w-full bg-white border border-black rounded-lg shadow-md mt-1 z-10">
                                    {dropdownItemsBenefits.map(
                                        (item, index) => (
                                            <li
                                                key={index}
                                                className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() =>
                                                    selectDropdownItem(
                                                        "benefits",
                                                        item,
                                                    )
                                                }
                                            >
                                                {item}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                {/* Second Row of Input Divs */}
                <div className="flex ml-6 space-x-4 mt-4">
                    {/* Requesting Provider Dropdown */}
                    <div className="relative w-[320px]">
                        <label className="block mb-2 text-gray-700 font-medium">
                            Requesting Provider
                        </label>
                        <div className="relative w-full h-[44px] border border-black rounded-lg">
                            <button
                                onClick={() => toggleDropdown("firstDropdown")}
                                className="flex items-center justify-between w-full h-full px-3 text-gray-600 bg-white rounded-lg"
                            >
                                <span>
                                    {selectedItems.firstDropdown ||
                                        "- Select Another -"}
                                </span>
                                <img
                                    src={dropdown}
                                    alt="Dropdown"
                                    className={`w-4 h-4 ${
                                        dropdownStates.firstDropdown
                                            ? "transform rotate-180"
                                            : ""
                                    }`}
                                />
                            </button>

                            {dropdownStates.firstDropdown && (
                                <ul className="absolute left-0 w-full bg-white border border-black rounded-lg shadow-md mt-1 z-10">
                                    {["Option 1", "Option 2", "Option 3"].map(
                                        (item, index) => (
                                            <li
                                                key={index}
                                                className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() =>
                                                    selectDropdownItem(
                                                        "firstDropdown",
                                                        item,
                                                    )
                                                }
                                            >
                                                {item}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Provider Email Input */}
                    <div className="relative w-[320px]">
                        <label className="block mb-2 text-gray-700 font-medium">
                            Provider Email
                        </label>
                        <div className="relative w-full h-[44px] border border-black rounded-lg">
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="w-full h-full px-3 py-2 text-gray-600 bg-white rounded-lg placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <div className="relative w-[320px]">
                        <label className="block mb-2 text-gray-700 font-medium">
                            Referral Provider
                        </label>
                        <div className="relative w-full h-[44px] border border-black rounded-lg">
                            <button
                                onClick={() => toggleDropdown("secondDropdown")}
                                className="flex items-center justify-between w-full h-full px-3 text-gray-600 bg-white rounded-lg"
                            >
                                <span>
                                    {selectedItems.secondDropdown ||
                                        "- Select Another -"}
                                </span>
                                <img
                                    src={dropdown}
                                    alt="Dropdown"
                                    className={`w-4 h-4 ${
                                        dropdownStates.secondDropdown
                                            ? "transform rotate-180"
                                            : ""
                                    }`}
                                />
                            </button>
                            {dropdownStates.secondDropdown && (
                                <ul className="absolute left-0 w-full bg-white border border-black rounded-lg shadow-md mt-1 z-10">
                                    {["Option 1", "Option 2", "Option 3"].map(
                                        (item, index) => (
                                            <li
                                                key={index}
                                                className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                                                onClick={() =>
                                                    selectDropdownItem(
                                                        "secondDropdown",
                                                        item,
                                                    )
                                                }
                                            >
                                                {item}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                <div className="ml-6 mt-6 mb-6">
                    <h3 className="text-[23px] text-red-700 mt-6 font-bold">
                        Services
                    </h3>

                    <h3 className="text-gray-700 flex items-center">
                        Diagnosis
                        <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
                    </h3>

                    <div className="flex space-x-4 mt-4">
                        <div className="flex flex-col mr-10">
                            <label
                                htmlFor="diagnosis-code"
                                className="font-semibold"
                            >
                                Diagnosis Code
                            </label>
                            <div className="relative w-[240px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                <img
                                    src={search}
                                    alt="Search Icon"
                                    className="h-6 w-6 absolute left-2"
                                />
                                <input
                                    type="text"
                                    id="diagnosis-code"
                                    placeholder="Enter diag code"
                                    className="w-full h-full outline-none border-none pl-10"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="diagnostic-description"
                                className="font-semibold"
                            >
                                Diagnostic Description
                            </label>
                            <div className="w-[765px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                <input
                                    type="text"
                                    id="diagnostic-description"
                                    placeholder="Enter description"
                                    className="w-full h-full outline-none border-none px-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex ml-6 justify-end">
                    {" "}
                    <img src={plusiconred} alt="" className="mr-2" /> Add
                    Another Dianosis
                </div>

                <div className="ml-6 mt-6 mb-6">
                    <h3 className="text-[23px] text-red-700 mt-6 font-bold">
                        Services
                    </h3>

                    <h3 className="text-gray-700 flex items-center">
                        Procedure
                        <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
                    </h3>

                    <div className="flex space-x-4 mt-4">
                        <div className="flex flex-col mr-10">
                            <label
                                htmlFor="diagnosis-code"
                                className="font-semibold"
                            >
                                Diagnosis Code
                            </label>
                            <div className="relative w-[240px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                <img
                                    src={search}
                                    alt="Search Icon"
                                    className="h-6 w-6 absolute left-2"
                                />
                                <input
                                    type="text"
                                    id="diagnosis-code"
                                    placeholder="Enter diag code"
                                    className="w-full h-full outline-none border-none pl-10"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mr-10">
                            <label
                                htmlFor="diagnosis-code"
                                className="font-semibold"
                            >
                                Price
                            </label>
                            <div className="relative w-[240px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                <input
                                    type="text"
                                    id="diagnosis-code"
                                    placeholder="Enter Price"
                                    className="w-full h-full outline-none border-none pl-10"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="diagnostic-description"
                                className="font-semibold"
                            >
                                Procedure Description
                            </label>
                            <div className="w-[502px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                                <input
                                    type="text"
                                    id="diagnostic-description"
                                    placeholder="Enter description"
                                    className="w-full h-full outline-none border-none px-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex ml-6 justify-end">
                    {" "}
                    <img src={plusiconred} alt="" className="mr-2" /> Add
                    Another Procedure
                </div>

                <div className="ml-6">
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="escalation-checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4"
                        />
                        <div>Escalation</div>
                    </div>

                    {isChecked && (
                        <div className="flex flex-col mt-4">
                            <label
                                htmlFor="diagnostic-description"
                                className="font-semibold"
                            >
                                Exclusion Reason
                            </label>
                            <div className="w-[1060px] h-[44px] border-2 border-black rounded-md flex items-center px-2 mt-2">
                                <input
                                    type="text"
                                    id="diagnostic-description"
                                    placeholder="Enter Exclusion Reason"
                                    className="w-full h-full outline-none border-none px-2"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="ml-6 mt-10">
                    <h3 className="text-gray-700 flex items-center">
                        Notes
                        <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
                    </h3>
                    <div className="flex flex-col mt-4">
                        <div className="w-[1060px] h-[167px] border-2 border-black rounded-md mt-2">
                            <textarea
                                id="diagnostic-description"
                                placeholder="Enter Text"
                                className="w-full h-full outline-none border-none px-2 pt-4 resize-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <div>
                        <button
                            className="w-[131.78px] h-[37.65px] text-center text-red-700 border border-red-700 rounded-md"
                            onClick={() => navigate("/enrolleeInformations")}
                        >
                            Back
                        </button>
                    </div>
                    <div>
                        <button
                            className="w-[131.78px] h-[37.65px] text-center text-white bg-red-700 rounded-md"
                            onClick={() => navigate("/approvePaCode")}
                        >
                            Proceed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollePaCode;
