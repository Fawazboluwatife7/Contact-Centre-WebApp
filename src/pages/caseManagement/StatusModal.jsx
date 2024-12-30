import React from "react";

const StatusModal = ({ isOpen, onClose, onSelectStatus }) => {
    const statuses = [
        { label: "Admission", color: "#FFD700" }, // Yellow
        { label: "Referred", color: "#FFA500" }, // Orange
        { label: "Discharged", color: "#00FF7F" }, // Green
        { label: "Demise", color: "#FF4500" }, // Red
        { label: "Expired", color: "#808080" }, // Gray
    ];

    // Handle status selection
    const handleStatusClick = (status) => {
        onSelectStatus(status); // Pass selected status to parent
    };

    if (!isOpen) return null; // Don't render if modal is closed

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] md:w-[30%] rounded-lg shadow-lg p-6 h-[24rem]">
                <h3>Select New Status</h3>
                <ul className="status-list">
                    {statuses.map((status, index) => (
                        <li
                            key={index}
                            style={{
                                cursor: "pointer",
                                backgroundColor: status.color,
                                padding: "10px",
                                margin: "5px",
                                borderRadius: "5px",
                                color: "white",
                                textAlign: "center",
                            }}
                            onClick={() => handleStatusClick(status)} // Handle click
                        >
                            {status.label}
                        </li>
                    ))}
                </ul>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default StatusModal;
