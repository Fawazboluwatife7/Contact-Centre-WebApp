import React, { useState } from "react";

function CreateNewTicket() {
  const [ticketName, setTicketName] = useState("");
  const [callerClass, setCallerClass] = useState("");
  const [channel, setChannel] = useState("");
  const [callerName, setCallerName] = useState("");
  const [enrolleeId, setEnrolleeId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [workflow, setWorkflow] = useState("");
  const [recentlyUsed, setRecentlyUsed] = useState([
    "Ticket 1",
    "Ticket 2",
    "Ticket 3",
    "Ticket 4",
    "Ticket 5",
  ]);

  const handleCreateTicket = () => {
    // Handle the ticket creation logic here
    alert("Ticket Created!");
  };

  const handleLoadWorkflow = () => {
    // Handle loading workflow logic here
    alert("Workflow Loaded!");
  };

  return (
    <div className="p-8 bg-lightblue">
      {/* Create New Ticket Title */}
      <div className="text-3xl font-semibold mb-6">Create New Ticket</div>
      <div className="text-lg text-gray-600 mb-10">
        Create and assign a new ticket
      </div>

      {/* Main Section (2 divs side by side) */}
      <div className="w-full flex gap-8">
        {/* Left Side */}
        <div className="space-y-5 bg-white w-[70%]">
          {/* First Row: Caller Class and Channel */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">
                Select Caller Class
              </label>
              <select
                value={callerClass}
                onChange={(e) => setCallerClass(e.target.value)}
                className="px-4 py-2 border rounded-md"
              >
                <option value="">Select Class</option>
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">
                Choose a Channel
              </label>
              <select
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                className="px-4 py-2 border rounded-md"
              >
                <option value="">Select Channel</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>
          </div>

          {/* Second Row: Ticket Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Ticket Name</label>
            <input
              type="text"
              value={ticketName}
              onChange={(e) => setTicketName(e.target.value)}
              placeholder="Enter Ticket Name"
              className="px-4 py-2 border rounded-md"
            />
          </div>

          {/* Third Row: Caller Name and Enrollee ID */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Caller Name</label>
              <input
                type="text"
                value={callerName}
                onChange={(e) => setCallerName(e.target.value)}
                placeholder="Enter Caller Name"
                className="px-4 py-2 border rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Enrollee ID</label>
              <div className="flex">
                <input
                  type="text"
                  value={enrolleeId}
                  onChange={(e) => setEnrolleeId(e.target.value)}
                  placeholder="Search for an Enrollee"
                  className="px-4 py-2 border rounded-md w-full"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-400">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Fourth Row: Phone Number and Location */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter Phone Number"
                className="px-4 py-2 border rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter Location"
                className="px-4 py-2 border rounded-md"
              />
            </div>
          </div>

          {/* Fifth Row: Select Team, Deadline, and Priority */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">
                Assign a Team
              </label>
              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="px-4 py-2 border rounded-md"
              >
                <option value="">Select Team</option>
                <option value="team1">Team 1</option>
                <option value="team2">Team 2</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Add Deadline</label>
              <div className="flex items-center">
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="px-4 py-2 border rounded-md w-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="px-4 py-2 border rounded-md"
              >
                <option value="">Select Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          {/* Sixth Row: Description */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
              className="px-4 py-2 border rounded-md h-32"
            />
          </div>

          {/* Create Ticket Button (Red Button) */}
          <div className="mt-6">
            <button
              onClick={handleCreateTicket}
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-400"
            >
              Create New Ticket
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-8 bg-white w-[30%]">
          {/* Workflow */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Workflow</label>
            <select
              value={workflow}
              onChange={(e) => setWorkflow(e.target.value)}
              className="px-4 py-2 border rounded-md"
            >
              <option value="">Select Workflow</option>
              <option value="workflow1">Workflow 1</option>
              <option value="workflow2">Workflow 2</option>
            </select>
          </div>

          {/* Recently Used */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Recently Used</label>
            <div className="space-y-2">
              {recentlyUsed.map((item, index) => (
                <div key={index} className="px-4 py-2 bg-gray-100 rounded-md">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Call Lines and Email */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">
              Call Lines and Email
            </label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <span className="mr-2">Phone:</span>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="px-4 py-2 border rounded-md"
                />
              </div>
              <div className="flex items-center">
                <span className="mr-2">Email:</span>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="px-4 py-2 border rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Load Workflow Button (Red Button) */}
          <div className="mt-6">
            <button
              onClick={handleLoadWorkflow}
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-400"
            >
              Load Workflow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewTicket;
