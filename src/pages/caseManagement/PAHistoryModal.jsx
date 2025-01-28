import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const PAHistoryModal = ({ item, onClose }) => {
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
                                    Code
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Diagnosis
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Date
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Drugs
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Investigation
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Treatment
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-gray-700">
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.diagcode?.split(" ")[0] || "N/A"}
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.diagcode
                                        ?.split(",")[0]
                                        ?.split(" ")
                                        .slice(1)
                                        .join(" ") || "N/A"}
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.status}
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.drugs}
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.investigation}
                                </td>
                                <td className="px-4 py-2 border border-gray-200">
                                    {item.treatment}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className="text-xl font-bold mb-4 text-[#1F4173] mt-[3rem]">
                        Admission Information
                    </h2>

                    <table className="table-auto w-full border-collapse border border-gray-200 text-left">
                        <thead>
                            <tr className="bg-gray-100 text-[#1F4173]">
                                <th className="px-4 py-2 border border-gray-200">
                                    #Admission ID
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
                                    {item.id}

                                    <FaRegCopy
                                        className="w-4 h-4 ml-4 cursor-pointer"
                                        onClick={() => handleCopy(item.id)}
                                    />

                                    {showCopied && (
                                        <span className="absolute top-2  ml-[7rem] text-sm text-green-500">
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

export default PAHistoryModal;
