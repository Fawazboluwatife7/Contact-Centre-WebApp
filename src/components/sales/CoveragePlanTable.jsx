import React, { useState } from "react";

const CoveragePlanTable = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tableData = [
    {
      id: "7000062",
      region: "SOUTH EAST",
      state: "Abia",
      city: "UMUAHIA",
      hospital: "CHUKWUEBUKA HOSPITAL",
      address: "50 SCHOOL ROAD, UMUAHIA",
      grade: "D",
      plans: "All Plans",
      specialty: "GENERAL MEDICINE",
    },
    {
      id: "7000062",
      region: "SOUTH EAST",
      state: "Abia",
      city: "UMUAHIA",
      hospital: "CHUKWUEBUKA HOSPITAL",
      address: "50 SCHOOL ROAD, UMUAHIA",
      grade: "D",
      plans: "All Plans",
      specialty: "GENERAL MEDICINE",
    },
    {
      id: "7000062",
      region: "SOUTH EAST",
      state: "Abia",
      city: "UMUAHIA",
      hospital: "CHUKWUEBUKA HOSPITAL",
      address: "50 SCHOOL ROAD, UMUAHIA",
      grade: "D",
      plans: "All Plans",
      specialty: "GENERAL MEDICINE",
    },
    {
      id: "7000062",
      region: "SOUTH EAST",
      state: "Abia",
      city: "UMUAHIA",
      hospital: "CHUKWUEBUKA HOSPITAL",
      address: "50 SCHOOL ROAD, UMUAHIA",
      grade: "D",
      plans: "All Plans",
      specialty: "GENERAL MEDICINE",
    },
  ];

  return (
    <div className=" bg-gray-100">
      <div className="flex border-b border-gray-300">
        <div className="space-x-2">
          {["Overview", "Exclusions", "Principals", "Hospital List"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab
                  ? "bg-white border-b-2 border-green-500 text-green-500"
                  : "text-white bg-green-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button className="ml-auto px-4 py-2 bg-red-500 text-white font-semibold">Customize</button>
        <button className="px-4 py-2 bg-gray-400 text-white font-semibold">Pro Max</button>
      </div>

      <div className="mt-4 bg-white rounded-lg">
        {activeTab === "Overview" && (
          <div className="p-6">
            <div className="bg-white p-4">
              <h2 className="text-lg font-bold mb-2">Description</h2>
                <p>
                  This plan offers cover for medical care, inpatient or outpatient treatment, maternity, major medical cases and chronic diseases. It providers cover for emergency medical and hospitalization and dental expenses. Members on this plan can access care within our provider network within their benefit limit.
                </p>
            </div>
            <ul className="list-disc text-black">
              <li>Red icon bullet point 1</li>
              <li>Red icon bullet point 2</li>
            </ul>
          </div>
        )}
        {activeTab === "Exclusions" && (
          <div className="p-6">
            <ul className="list-disc text-red-500">
              <li>Red icon bullet point 1</li>
              <li>Red icon bullet point 2</li>
            </ul>
          </div>
        )}
        {activeTab === "Principals" && (
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="p-2 border border-gray-300">ID</th>
                <th className="p-2 border border-gray-300">Region</th>
                <th className="p-2 border border-gray-300">State</th>
                <th className="p-2 border border-gray-300">City</th>
                <th className="p-2 border border-gray-300">Hospital</th>
                <th className="p-2 border border-gray-300">Address</th>
                <th className="p-2 border border-gray-300">Grade</th>
                <th className="p-2 border border-gray-300">Plans</th>
                <th className="p-2 border border-gray-300">Specialty</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-2 border border-gray-300">{row.id}</td>
                  <td className="p-2 border border-gray-300">{row.region}</td>
                  <td className="p-2 border border-gray-300">{row.state}</td>
                  <td className="p-2 border border-gray-300">{row.city}</td>
                  <td className="p-2 border border-gray-300">{row.hospital}</td>
                  <td className="p-2 border border-gray-300">{row.address}</td>
                  <td className="p-2 border border-gray-300">{row.grade}</td>
                  <td className="p-2 border border-gray-300">{row.plans}</td>
                  <td className="p-2 border border-gray-300">{row.specialty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === "Hospital List" && (
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="p-2 border border-gray-300">ID</th>
                <th className="p-2 border border-gray-300">Region</th>
                <th className="p-2 border border-gray-300">State</th>
                <th className="p-2 border border-gray-300">City</th>
                <th className="p-2 border border-gray-300">Hospital</th>
                <th className="p-2 border border-gray-300">Address</th>
                <th className="p-2 border border-gray-300">Grade</th>
                <th className="p-2 border border-gray-300">Plans</th>
                <th className="p-2 border border-gray-300">Specialty</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-2 border border-gray-300">{row.id}</td>
                  <td className="p-2 border border-gray-300">{row.region}</td>
                  <td className="p-2 border border-gray-300">{row.state}</td>
                  <td className="p-2 border border-gray-300">{row.city}</td>
                  <td className="p-2 border border-gray-300">{row.hospital}</td>
                  <td className="p-2 border border-gray-300">{row.address}</td>
                  <td className="p-2 border border-gray-300">{row.grade}</td>
                  <td className="p-2 border border-gray-300">{row.plans}</td>
                  <td className="p-2 border border-gray-300">{row.specialty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CoveragePlanTable;
