import React, { useState } from "react";
import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";
import { GoDotFill } from "react-icons/go";

const CreateTicket = () => {
    const [status, setStatus] = useState("Open");
    const [priority, setPriority] = useState("Low");
    const [comments, setComments] = useState([
        {
            author: "Dino Melaye",
            content:
                "“I’m having troubles locating the customer on our search engine, did he/she happen to provide an email address? Thanks.”",
            time: "5 hours ago",
            reply: "Yes he did, his email is tundebakare@gmail.com",
        },
    ]);
    const [newComment, setNewComment] = useState("");
    const handleStatusChange = (e) => setStatus(e.target.value);
    const handlePriorityChange = (e) => setPriority(e.target.value);

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([
                ...comments,
                {
                    author: "You",
                    content: newComment,
                    time: "Just now",
                    reply: null,
                },
            ]);
            setNewComment("");
        }
    };

    return (
        <div>
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-auto">
                <Navbar />
                <div className="p-6 bg-gray-100 min-h-screen">
                    {/* Header Section */}
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl font-bold">
                                Request for HMO - Ticket#376512
                            </h1>
                            <button className="text-red-600 font-medium">
                                All tickets &gt;
                            </button>
                        </div>

                        {/* Second Line of Buttons */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <button className="p-2 rounded-md bg-gray-200 flex items-center justify-center">
                                    <span className="text-lg">◀</span>
                                </button>
                                <button className="p-2 rounded-md bg-gray-200 flex items-center justify-center">
                                    <span className="text-lg">▶</span>
                                </button>
                                <button className="font-medium text-gray-600  border border-gray-600">
                                    Show activities
                                </button>
                                <button className="font-medium text-gray-600  border border-gray-600">
                                    Show comments ✓
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 border border-gray-600">
                                    <label>Status:</label>
                                    <select
                                        value={status}
                                        onChange={handleStatusChange}
                                        className="border  p-2 bg-gray-100"
                                    >
                                        <option value="Open">Open</option>
                                        <option value="In Progress">
                                            In Progress
                                        </option>
                                        <option value="Closed">Closed</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-2 border border-gray-600">
                                    <label>Priority:</label>
                                    <select
                                        value={priority}
                                        onChange={handlePriorityChange}
                                        className="border p-2 bg-gray-100"
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <button className="bg-gray-200 text-sm px-4 py-2  font-medium">
                                    Reassign
                                </button>
                                <button className="bg-gray-200 text-sm px-4 py-2 r font-medium">
                                    Escalate
                                </button>
                                <button className="bg-gray-200  text-sm px-4 py-2  font-medium">
                                    Create new ticket
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-3 gap-6 mt-4">
                        {/* Comments Section */}
                        <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
                            {/* Comments */}
                            <div className="mt-4">
                                {comments.map((comment, index) => (
                                    <div key={index} className="mb-6">
                                        <p className="font-medium">
                                            {comment.author}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {comment.time}
                                        </p>
                                        <p className="mt-2">
                                            {comment.content}
                                        </p>
                                        {comment.reply && (
                                            <div className="ml-4 mt-2 bg-gray-100 p-2 rounded-md">
                                                <p className="text-sm font-medium">
                                                    You replied:
                                                </p>
                                                <p>{comment.reply}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Add Comment */}
                            <div className="mt-4">
                                <textarea
                                    className="w-full border rounded-md p-2"
                                    placeholder="Type something here so others would see"
                                    value={newComment}
                                    onChange={(e) =>
                                        setNewComment(e.target.value)
                                    }
                                ></textarea>
                                <div className="mt-2 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 bg-gray-200 rounded-full">
                                            📎
                                        </button>
                                        <button className="p-2 bg-gray-200 rounded-full">
                                            A
                                        </button>
                                    </div>
                                    <button
                                        className="bg-red-600 text-white px-4 py-2 rounded-md"
                                        onClick={handleAddComment}
                                    >
                                        Send comment
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Properties Section */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-bold">Open</h2>
                            <p className="text-sm  mt-2 flex text-gray-600">
                                <GoDotFill
                                    className=" text-red-600 mt-1
                                "
                                />
                                FIRST RESPONSE DUE
                            </p>
                            <p className="text-sm text-gray-600">
                                Wed, 13 July 2022, 09:30 AM
                            </p>
                            <p className="text-sm text-gray-600 mt-2 flex">
                                <GoDotFill
                                    className=" text-red-600 mt-1
                                "
                                />
                                TICKET DEADLINE
                            </p>
                            <p className="text-sm text-gray-600">
                                Wed, 13 July 2022, 12:30 PM
                            </p>

                            {/* Properties */}
                            <div className="mt-4 space-y-4">
                                <div>
                                    <label className="text-sm font-medium">
                                        Caller class
                                    </label>
                                    <input
                                        type="text"
                                        value="Enrollee"
                                        className="w-full border rounded-md p-2 mt-1"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">
                                        Type
                                    </label>
                                    <select className="w-full border rounded-md p-2 mt-1">
                                        <option>Workflow</option>
                                        <option>Issue</option>
                                        <option>Complaint</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium">
                                        Category
                                    </label>
                                    <select className="w-full border rounded-md p-2 mt-1">
                                        <option>Enquiry</option>
                                        <option>Request</option>
                                        <option>Support</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium">
                                        Priority
                                    </label>
                                    <select
                                        value={priority}
                                        onChange={(e) =>
                                            setPriority(e.target.value)
                                        }
                                        className="w-full border rounded-md p-2 mt-1"
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium">
                                        Team assigned
                                    </label>
                                    <select className="w-full border rounded-md p-2 mt-1">
                                        <option>Pharmacy Benefits</option>
                                        <option>Technical Support</option>
                                        <option>Customer Service</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium">
                                        Agent
                                    </label>
                                    <select className="w-full border rounded-md p-2 mt-1">
                                        <option>--</option>
                                        <option>Agent A</option>
                                        <option>Agent B</option>
                                    </select>
                                </div>
                            </div>

                            <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md mt-4">
                                Expand details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTicket;
