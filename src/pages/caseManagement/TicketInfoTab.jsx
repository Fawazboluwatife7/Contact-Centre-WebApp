import React from "react";
import { MdEdit } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

const TicketInfoTab = () => {
    return (
        <div>
            <div className=" flex  justify-between">
                <h2 className="text-xl font-semibold mb-4">
                    Ticket Information
                </h2>
                <button className=" bg-red-600 text-white flex gap-1 px-3 pt-2.5 rounded-md ">
                    <MdEdit className=" text-white h-5 w-5" />
                    Edit ticket
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-gray-600">Caller Class*</label>
                    <select className="border w-full rounded-md p-2">
                        <option>Provider</option>
                        <option>Member</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-600">Channel</label>
                    <select className="border w-full rounded-md p-2">
                        <option>Portal</option>
                        <option>Phone</option>
                    </select>
                </div>
                {/* Add more fields */}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-gray-600">Ticket name</label>
                    <input
                        type="text"
                        className=" outline-none  border  border-gray-200 w-full rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-600">
                        Ticket category
                    </label>
                    <select className="border w-full rounded-md p-2">
                        <option>call</option>
                        <option>Phone</option>
                    </select>
                </div>
                {/* Add more fields */}
            </div>
            <div className="flex items-center space-x-4 mt-4">
                <span className="text-gray-600 font-medium">Details</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-600">Phone number*</label>
                    <input
                        type="text"
                        className=" outline-none  border  border-gray-200 w-full rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block text-gray-600">Phone number*</label>
                    <input
                        type="text"
                        className=" outline-none  border  border-gray-200 w-full rounded-md p-2"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
                <span className="text-gray-600 font-medium">Assign</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-600">Assign team</label>
                    <select className="border w-full rounded-md p-2">
                        <option>Follow up enrollee's care</option>
                        <option>Update enrollee details</option>
                        <option>Asign a provider</option>
                        <option>Request reimbursement</option>
                        <option>Pharmacy benefits</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-600">
                        Assign Individual
                    </label>
                    <select className="border w-full rounded-md p-2">
                        <option> Individual A</option>
                        <option> Individual B</option>
                        <option> Individual C</option>
                        <option> Individual D</option>
                        <option> Individual E</option>
                    </select>
                </div>
            </div>
            <button className=" bg-red-600 text-white flex gap-1 px-7 py-2 rounded-md  mt-4">
                <GrDocumentUpdate className=" text-white h-5 w-5" />
                Update
            </button>
        </div>
    );
};

export default TicketInfoTab;
