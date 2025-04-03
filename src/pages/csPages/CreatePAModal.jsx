import React from "react";

const CreatePAModal = ({ isOpen, onClose, response }) => {
    if (!isOpen) return null; // Hide modal when not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-red-600 p-5 rounded-md shadow-lg max-w-md w-full text-white">
                <h2 className="text-lg font-semibold mb-3 border-b-2">
                    API Responses
                </h2>

                <p>
                    <strong>Status:</strong> {response?.status}
                </p>
                <p>
                    <strong>VisitId:</strong>{" "}
                    {response?.VisitID || "No message available"}
                </p>
                <p>
                    <strong>Message:</strong>{" "}
                    {response.Message || "No message available"}
                </p>

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

export default CreatePAModal;
