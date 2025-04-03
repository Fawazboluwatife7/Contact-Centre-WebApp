import React, { useEffect, useState } from "react";
import Sidebar from "../../components/cs/csSideBar";
import Navbar from "../../components/cs/Header";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { dateCalendarClasses } from "@mui/x-date-pickers";

const CSUpdateEnrolleProfile = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [allData, setAllResponse] = useState([]);

    // State to store the selected person's details
    const [selectedPerson, setSelectedPerson] = useState({
        name: "",
        id: "",
    });

    const location = useLocation();
    const enrollee = location.state?.enrollee;
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    const person = {
        id: "0123456789",
        name: "Tunde Bakare",
    };

    const enrolleeId = enrollee.MembernUmber
        ? enrollee.MembernUmber
        : enrollee.Member_EnrolleeID;
    console.log(
        "xxx",
        fetch(
            `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByEnrolleeID?enrolleeid=${enrolleeId}`,
            {
                method: "GET",
            },
        ),
    );

    const [formData, setFormData] = useState({
        FirstName: "",
        Surname: "",
        MemberShipNo: "",
        expiryDate: "",
        Sex_ID: "",
        MaritalStatus: "",
        DateOfBirth: "",
        age: "",
        Mobile: "",
        EmailAdress: "",
        Physical_Add1: "",
        groupid: "",
        scheme: "",
        schemeid: "",
        nok: "",
        nokPhone: "",
        Parent_Cif: "",
        Cif_number: "",
        EnrolleePictureType: "",
        EnrolleePicture: "",
    });

    useEffect(() => {
        async function GetEnrolleeBioData() {
            try {
                const response = await fetch(
                    `${apiUrl}api/EnrolleeProfile/GetEnrolleeBioDataByEnrolleeID?enrolleeid=${enrolleeId}`,
                    { method: "GET" },
                );

                const data = await response.json();

                console.log("bbbb", dateCalendarClasses.result);
                setAllResponse(data.result);
                if (data.result && data.result.length > 0) {
                    const member = data.result[0];
                    setFormData({
                        FirstName: member.Member_FirstName || "",
                        Surname: member.Member_Surname || "",
                        MemberShipNo: member.Member_EnrolleeID || "",
                        expiryDate: member.Member_ExpiryDate || "",
                        Sex_ID: member.Member_Gender === "Female" ? "2" : "1",
                        MaritalStatus: member.Member_MaritalStatusID || "",
                        DateOfBirth: member.Member_DateOfBirth || "",
                        age: member.Member_Age || "",
                        Mobile: member.Member_Phone_One || "",
                        EmailAdress: member.Member_EmailAddress_One || "",
                        Physical_Add1: member.Client_PostalAddress || "",
                        groupid: member.Client_UniqueClientID || "",
                        scheme: member.Member_Plan || "",
                        schemeid: member.Member_PlanID || "",
                        nok: member.Client_ContactPerson || "",
                        nokPhone: member.Client_ContactPhone1 || "",
                        Parent_Cif: member.Member_ParentMemberUniqueID || "",
                        Cif_number: member.Member_MemberUniqueID || "",
                        EnrolleePictureType: member.picturetype || "jpeg",
                        EnrolleePicture:
                            member.profilepic ||
                            "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",
                    });
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        GetEnrolleeBioData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // // Function to handle "Update" button click
    // const handleUpdateClick = () => {
    //     // Set the selected person's details
    //     setSelectedPerson(person);
    //     // Open the modal
    //     setIsModalOpen(true);
    // };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdateClick = async (e) => {
        e.preventDefault();
        setIsModalOpen(true);

        console.log("Sending to backend:", formData);
        console.log("Captured Payload:", JSON.stringify(formData, null, 2));
        try {
            const response = await fetch(
                `${apiUrl}api/EnrolleeProfile/UpdateBiodata`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                },
            );

            if (response == 200) {
                const result = await response.json();
                console.log("Update successful:", result);
                setIsModalOpen(true);
            } else {
                console.error("Update failed:", response.statusText);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-auto">
                <Navbar />
                <div className="mx-3 mt-2">
                    <div className=" flex justify-between">
                        <span className=" text-[2.1rem]"> Update profile</span>{" "}
                        <h1
                            className=" text-[1.9rem] text-red-600 flex"
                            onClick={() => navigate(-1)}
                        >
                            <IoArrowBack className=" text-red-600 mt-2" /> Back
                        </h1>
                    </div>
                    <div className=" bg-white h-full  mt-2 rounded-md">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 py-4 overflow-hidden">
                            {/* First Name */}
                            <div className=" ">
                                <label className=" text-[1rem] font-medium text-black ">
                                    First Name*
                                </label>
                                <input
                                    type="text"
                                    name="FirstName"
                                    value={formData.FirstName}
                                    onChange={handleChange}
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 px-4"
                                />
                            </div>
                            <div>
                                <label className=" text-[1rem] font-medium text-black">
                                    Last Name*
                                </label>
                                <input
                                    type="text"
                                    name="Surname"
                                    value={formData.Surname}
                                    onChange={handleChange}
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 px-4"
                                />
                            </div>{" "}
                            <div>
                                <label className=" text-[1rem] font-medium text-black">
                                    Enrollee ID
                                </label>
                                <input
                                    type="text"
                                    name="MemberShipNo"
                                    value={formData.MemberShipNo}
                                    disabled
                                    onChange={handleChange}
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 px-4"
                                />
                            </div>{" "}
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Policy Date
                                </label>

                                <input
                                    type="text"
                                    name="expiryDate"
                                    value={
                                        new Date(
                                            formData.expiryDate,
                                        ).toLocaleDateString("en-GB") // Formats the date as day/month/year
                                    }
                                    disabled
                                    onChange={handleChange}
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 px-4"
                                />
                            </div>
                            {/* Gender */}
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Gender*
                                </label>
                                <input
                                    type="text"
                                    name="Sex_ID"
                                    value={formData.Sex_ID}
                                    onChange={handleChange}
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 px-4"
                                />
                            </div>
                            {/* Marital Status */}
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Marital Status*
                                </label>
                                <input
                                    type="text"
                                    name="MaritalStatus"
                                    value={formData.MaritalStatus}
                                    onChange={handleChange}
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 px-4"
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Date of Birth*
                                </label>
                                <input
                                    type="text"
                                    name="DateOfBirth"
                                    value={
                                        new Date(
                                            formData.DateOfBirth,
                                        ).toLocaleDateString("en-GB") // Formats the date as day/month/year
                                    }
                                    onChange={handleChange}
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 px-4"
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Age*
                                </label>
                                <input
                                    type="text"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="mt-1 w-full rounded-md border border-[#CCCCCC] outline-none py-2 px-4"
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Phone Number*
                                </label>
                                <div className="flex items-center">
                                    <span className="bg-gray-200 px-4 py-2 rounded-l-md border border-r-0 border-gray-300">
                                        +
                                    </span>
                                    <input
                                        type="text"
                                        name="Mobile"
                                        value={formData.Mobile}
                                        onChange={handleChange}
                                        className="mmt-1 w-full rounded-s-sm border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-black  pl-3"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Email Address*
                                </label>
                                <input
                                    type="text"
                                    name="EmailAdress"
                                    value={formData.EmailAdress}
                                    onChange={handleChange}
                                    className="mmt-1 w-full rounded-s-sm border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-black  pl-3"
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Address*
                                </label>
                                <input
                                    type="text"
                                    name="Physical_Add1"
                                    value={formData.Physical_Add1}
                                    onChange={handleChange}
                                    className="mmt-1 w-full rounded-s-sm border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-black  pl-3"
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Company/Client*
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    disabled
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="mmt-1 w-full rounded-s-sm border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-black  pl-3"
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    Plan Type*
                                </label>
                                <input
                                    type="text"
                                    name="planType"
                                    disabled
                                    value={formData.scheme}
                                    onChange={handleChange}
                                    className="mmt-1 w-full rounded-s-sm border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-black  pl-3"
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    NOK*
                                </label>

                                <input
                                    type="text"
                                    name="nok"
                                    disabled
                                    value={formData.nok}
                                    onChange={handleChange}
                                    className="mmt-1 w-full rounded-s-sm border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-black  pl-3"
                                />
                            </div>
                            <div>
                                <label className="text-[1rem] font-medium text-black">
                                    NOK Phone Number*
                                </label>
                                <div className="flex items-center">
                                    <span className="bg-gray-200 px-4 py-2 rounded-l-md border border-r-0 border-gray-300">
                                        +
                                    </span>
                                    <input
                                        type="text"
                                        name="nokPhone"
                                        disabled
                                        value={formData.nokPhone}
                                        onChange={handleChange}
                                        className="mmt-1 w-full rounded-s-sm border border-[#CCCCCC] outline-none py-2 placeholder:pl-7 placeholder:text-black  pl-3"
                                    />
                                </div>
                            </div>{" "}
                            <div className="flex justify-end pt-6">
                                <button
                                    className="bg-[#C61531] text-white rounded-md py-2 px-4 w-[8rem] h-[3rem] "
                                    onClick={handleUpdateClick}
                                >
                                    Update
                                </button>
                            </div>
                        </form>

                        {isModalOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <div className="bg-white w-[90%] md:w-[25%] rounded-lg  shadow-lg p-6 h-[24rem]">
                                    <div className="text-center">
                                        <p className="text-lg font-bold text-[1.7rem] mt-4">
                                            {formData.FirstName}{" "}
                                            {formData.Surname}
                                            profile has been updated
                                            successfully
                                        </p>
                                        <p className="text-lg font-bold text-[1.7rem] mt-3">
                                            ID Number: {formData.MemberShipNo}
                                        </p>

                                        <img
                                            src="checked.gif"
                                            alt="Success Icon"
                                            className="h-24 mx-auto mt-3"
                                        />
                                    </div>

                                    <div className="flex justify-center mt-6">
                                        <button
                                            onClick={closeModal}
                                            className="bg-[#C61531] text-white rounded-md  h-[2.4rem] w-[10rem] mt-3 cursor-pointer"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CSUpdateEnrolleProfile;
