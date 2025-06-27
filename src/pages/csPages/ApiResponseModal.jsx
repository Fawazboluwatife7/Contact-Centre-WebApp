import React from "react";

const ApiResponseModal = ({ isOpen, onClose, response }) => {
    if (!isOpen) return null; // Hide modal when not open

    // Ensure response is always an array before mapping
    const responsesArray = Array.isArray(response) ? response : [];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-red-600 p-5 rounded-md shadow-lg max-w-md w-full text-white">
                <h2 className="text-lg font-semibold mb-3 border-b-2">
                    API Responses
                </h2>
                {responsesArray.length > 0 ? (
                    <ul>
                        {responsesArray.map((res, index) => (
                            <li key={index} className="border-b p-3">
                                <p>
                                    <strong>Visit Detail ID:</strong>{" "}
                                    {res.visitdetail_id}
                                </p>
                                <p>
                                    <strong>Status:</strong> {res.status}
                                </p>
                                <p>
                                    <strong>Message:</strong> {res.message}
                                </p>
                                <p>
                                    <strong>PA-Code:</strong>{" "}
                                    {res.pacode || "N/A"}
                                </p>
                                {/* <p>
                                    <strong>PreAutCode :</strong>{" "}
                                    {res.VisitDetails[0].visitdetails_id ||
                                        "N/A"}
                                </p> */}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-red-500">No responses received.</p>
                )}
                <button
                    onClick={onClose}
                    className="mt-3 px-4 py-2 bg-white text-red-500 rounded-md"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ApiResponseModal;
