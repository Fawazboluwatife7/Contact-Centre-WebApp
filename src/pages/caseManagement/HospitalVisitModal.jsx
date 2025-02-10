import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const HospitalVisitModal = ({ item, onClose }) => {
    // State to track if "Copied!" message should be shown
    const [showCopied, setShowCopied] = useState(false);

    // Function to handle copying text to clipboard
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            // Show "Copied!" message
            setShowCopied(true);
            // Hide the message after 2 seconds
            setTimeout(() => setShowCopied(false), 2000);
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-md p-6 w-[66%] shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-[#1F4173]">
                    Procedure Information
                </h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200 text-left">
                        <thead>
                            <tr className="bg-gray-100 text-[#1F4173]">
                                <th className="px-4 py-2 border border-gray-200">
                                    Date
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Diagnosis
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Benefits
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Description
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Charge Amount
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Qty
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Visit Type
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-gray-700">
                                <td className="px-4 py-2 border border-gray-200">
                                    {
                                        new Date(item.ClaimLine_TreatmentDate)
                                            .toISOString()
                                            .split("T")[0]
                                    }
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.Claim_Diagnosis}
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.ClaimLine_BenefitDepartment}
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {/* {item.xx} */}
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.ClaimLine_TariffAmt}
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.ClaimLine_units}
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.Claim_Service_Type}
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.Claim_status}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className="text-xl font-bold mb-4 text-[#1F4173] mt-[3rem]">
                        PA Information
                    </h2>

                    <table className="table-auto w-full border-collapse border border-gray-200 text-left">
                        <thead>
                            <tr className="bg-gray-100 text-[#1F4173]">
                                <th className="px-4 py-2 border border-gray-200">
                                    Pre-auth code
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Provider
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-gray-700">
                                <td className="px-4 py-2 border border-gray-200 flex items-center gap-2 relative">
                                    {item.preauthcode}

                                    <FaRegCopy
                                        className="w-4 h-4 ml-4 cursor-pointer"
                                        onClick={() => handleCopy(item.id)}
                                    />

                                    {showCopied && (
                                        <span className="absolute top-2  ml-[10rem] text-sm text-green-500">
                                            Copied!
                                        </span>
                                    )}
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.provider}
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.status}
                                </td>
                            </tr>
                            <div className=" mt-3 ml-4">
                                <span className=" font-medium">
                                    Rejection Reasons
                                </span>
                                <h3 className=" text-gray-400 ">
                                    Enrollee not eligible for benefit
                                </h3>
                            </div>
                            <div className=" mt-3 ml-4 mb-3">
                                <span className=" font-medium ">Note</span>
                                <h3 className=" text-gray-400">
                                    I'm having difficulty searching for the
                                    customer on our search engine
                                </h3>
                            </div>
                        </tbody>
                    </table>
                </div>

                <div className="text-center mt-6">
                    <button
                        className="px-6 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition duration-200"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HospitalVisitModal;
