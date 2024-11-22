import React, { useState } from "react";

const TicketInformation = () => {
  const [selectedEnrollee, setSelectedEnrollee] = useState("");
  const [ticketCategory, setTicketCategory] = useState("");
  const [enrolleeId, setEnrolleeId] = useState("");
  const [enrolleeName, setEnrolleeName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [callLocation, setCallLocation] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [deadline, setDeadline] = useState("");

  return (
    <div className="p-6 space-y-6">
      {/* Edit Button */}
      <div className="flex justify-end mb-4">
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Edit Ticket
        </button>
      </div>

      {/* Row 1: Enrollee and Phone Call Select */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">Enrollee</label>
          <select
            value={selectedEnrollee}
            onChange={(e) => setSelectedEnrollee(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Enrollee</option>
            {/* Add your options here */}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-gray-700">Phone Call</label>
          <select
            value={ticketCategory}
            onChange={(e) => setTicketCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Type</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>

      {/* Row 2: Ticket Name and Ticket Category */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">Ticket Name</label>
          <div className="p-2 border rounded-md bg-gray-100">
            Request for HMO plan
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-gray-700">Ticket Category</label>
          <select
            value={ticketCategory}
            onChange={(e) => setTicketCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Category</option>
            {/* Add your options here */}
          </select>
        </div>
      </div>

      {/* Row 3: Enrollee ID and Enrollee Name */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">Enrollee ID</label>
          <input
            type="text"
            value={enrolleeId}
            onChange={(e) => setEnrolleeId(e.target.value)}
            placeholder="Search Enrollee"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="flex-1">
          <label className="block text-gray-700">Enrollee Name</label>
          <input
            type="text"
            value={enrolleeName}
            onChange={(e) => setEnrolleeName(e.target.value)}
            placeholder="Enter phone number"
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Row 4: Phone Number and Call Location */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700">Call Location</label>
          <input
            type="text"
            value={callLocation}
            onChange={(e) => setCallLocation(e.target.value)}
            placeholder="Enter call location"
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Row 5: Select Team and Add Deadline */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-gray-700">Select Team</label>
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Team</option>
            <option value="sales">Sales</option>
            {/* Add more team options here */}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-gray-700">Add Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Divider line after each row */}
      <div className="h-px bg-gray-300 my-4"></div>
    </div>
  );
};

export default TicketInformation;
