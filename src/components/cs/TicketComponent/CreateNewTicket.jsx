import React, { useState } from "react";
import vangle from "../../../assets/CSIMAGES/vangle.svg";
import recentticket from "../../../assets/CSIMAGES/recentticket.svg";
import searchenrolleeimg from "../../../assets/CSIMAGES/searchenrolleeimg.svg";

function CreateNewTicket() {
  const [ticketName, setTicketName] = useState("");
  const [category, setCategory] = useState("");
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
    "Create a new enrolle",
    "Assign a provider",
    "Update enrollee personal details",
    "Recurring pharmacy benefit",
    "Onboard new prospect",
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

      <div className="w-full flex gap-2 bg-lightblue">
        <div className="w-[70%] bg-white">
          {/* Left Side */}
          <div className="space-y-5 p-8 w-[85%]">
            {/* First Row: Caller Class and Channel */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">
                  Caller Class*
                </label>
                <div className="relative w-fit">
                  <select
                    value={callerClass}
                    onChange={(e) => setCallerClass(e.target.value)}
                    className="px-4 py-2 pr-10 border rounded-md appearance-none"
                  >
                    <option value="">Select Caller Class</option>
                    <option value="class1">Class 1</option>
                    <option value="class2">Class 2</option>
                  </select>
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                    <img src={vangle} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">Channel</label>
                <div className="relative w-fit">
                  <select
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                    className="px-4 py-2 pr-10 border rounded-md appearance-none"
                  >
                    <option value="">Choose a Channel</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                    <img src={vangle} alt="Dropdown arrow" />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row: Ticket Name */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Ticket Name</label>
              <input
                type="text"
                value={ticketName}
                onChange={(e) => setTicketName(e.target.value)}
                placeholder="Enter a ticket name.."
                className="px-4 py-2 border rounded-md"
              />
            </div>

            {/* Second Row: Category  */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Category</label>

              <div className="relative w-full">
                <select
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Choose a Category"
                  className="px-4 py-2 pr-10 border w-full rounded-md appearance-none"
                >
                  <option value="">Choose a category</option>
                  <option value="class1">Class 1</option>
                  <option value="class2">Class 2</option>
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <img
                  // src={vangle}
                  />
                </div>
              </div>
            </div>

            {/* Third Row: Caller Name and Enrollee ID */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">
                  Caller name
                </label>
                <input
                  type="text"
                  value={callerName}
                  onChange={(e) => setCallerName(e.target.value)}
                  placeholder=""
                  className="px-4 py-2 border rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">
                  Enrollee ID
                </label>
                <div className="flex">
                  <div className="relative">
                    <input
                      type="text"
                      value={enrolleeId}
                      onChange={(e) => setEnrolleeId(e.target.value)}
                      className="pl-10 border rounded-md w-64 h-10 focus:outline-none"
                      placeholder="Search for an Enrollee"
                    />
                    <div className="absolute inset-y-0 left-2  flex items-center">
                      <img
                        src={searchenrolleeimg}
                        className="h-[13px] w-[13px]"
                      />
                    </div>
                  </div>

                  <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-400">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Fourth Row: Phone Number and Location */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">
                  Phone Number
                </label>
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
                <label className="text-sm font-semibold mb-2">
                  Add Deadline
                </label>
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
                placeholder="The Enrollee will like to update the details of his active HMO plan."
                className="px-4 py-2 border rounded-md h-32"
              />
            </div>

            {/* Create Ticket Button (Red Button) */}
            <div className="mt-6">
              <button
                onClick={handleCreateTicket}
                className="w-[150px] bg-red-500 text-white py-3 text-center text-[12px] rounded-md hover:bg-red-400"
              >
                Create New Ticket
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className=" flex flex-col gap-5 bg-white w-[30%] pt-8 pl-5">
          <div className="flex flex-col gap-5 w-[90%]">
            {/* Workflow */}
            <div className="flex flex-col">
              <label className="text-[18px] font-semibold mb-2">Workflow</label>
              <div className="text-[10px]">
                {" "}
                Select a workflow that applies to your ticket
              </div>
              <div className="relative w-full">
                <select
                  value={workflow}
                  onChange={(e) => setWorkflow(e.target.value)}
                  className="px-4 py-2 border w-full  appearance-none rounded-md"
                >
                  <option value="">---</option>

                  <option value="workflow1">Workflow 1</option>
                  <option value="workflow2">Workflow 2</option>
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <img
                  // src={vangle}
                  />
                </div>
              </div>
            </div>

            {/* Recently Used */}
            <div className="flex flex-col">
              <label className="text-sm font-bold mb-2">Recently Used</label>
              <div className="space-y-2">
                {recentlyUsed.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md bg-transparent"
                  >
                    <img
                      src={recentticket}
                      alt="Recent Ticket Icon"
                      className="w-4 h-4"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Call Lines and Email */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col justify-left">
                <span className="mr-2 text-lg font-bold">Call Lines</span>
                <span>01-22100290</span>
                <span> 01-22100290</span>
              </div>
              <div className="flex flex-col justify-left">
                <span className="mr-2 text-lg font-bold">E-mail</span>
                Leadwayhealth@gmail.com
              </div>
            </div>

            {/* Load Workflow Button (Red Button) */}
            <div className="mt-6">
              <button
                onClick={handleLoadWorkflow}
                className="w-full bg-red-500 text-white py-3 text-center text-[12px] rounded-md hover:bg-red-400"
              >
                Load Workflow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewTicket;
