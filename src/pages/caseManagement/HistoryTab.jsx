import React from "react";
import { FaRegCommentDots, FaCheckCircle } from "react-icons/fa";

const HistoryTab = () => {
    // Sample timeline data
    const timelineData = [
        {
            id: 1,
            icon: <FaCheckCircle className="text-green-500 text-xl" />,
            name: "Niyi Okewowo",
            action: "Created a ticket",
            time: "5 hours ago",
            content: {
                title: "Created Ticket #376512 - Request for HMO",
                description: "Assigned to pharmacy benefits",
                linkText: "View",
            },
        },
        {
            id: 2,
            icon: <FaRegCommentDots className="text-blue-500 text-xl" />,
            name: "Dino Melaye",
            action: "Added a comment",
            time: "52 mins. ago",
            content: {
                title: `"I’m having troubles locating the customer on our search engine, did he/she happen to provide an email address? Thanks."`,
                linkText: "View",
            },
        },
    ];

    return (
        <div className="p-6 bg-white rounded-lg  max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Ticket timeline</h1>
            <div className="space-y-6">
                {timelineData.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4">
                        {/* Timeline icon */}
                        <div className="flex-shrink-0">{item.icon}</div>

                        {/* Timeline details */}
                        <div className="flex-grow">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="font-semibold">
                                        {item.name}
                                    </span>{" "}
                                    <span className="text-gray-500">
                                        {item.action}
                                    </span>
                                </div>
                                <span className="text-sm text-gray-400">
                                    {item.time}
                                </span>
                            </div>

                            {/* Main content */}
                            <div className="mt-2 p-4 bg-gray-100 rounded-md shadow-sm">
                                <div className="flex justify-between items-start">
                                    <p className="font-medium text-gray-700">
                                        {item.content.title}
                                    </p>
                                    <button className="text-blue-500 hover:underline">
                                        {item.content.linkText}
                                    </button>
                                </div>
                                {item.content.description && (
                                    <p className="text-sm text-gray-500 mt-1">
                                        {item.content.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryTab;
