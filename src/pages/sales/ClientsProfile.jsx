import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClientsProfileTable from '../../components/sales/ClientProfileTable';

const ClientsProfile = () => {

  return (
    <div className="bg-gray-200 min-h-screen p-2">
      <div className="relative mr-auto mb-5 text-black font-bold text-3xl">
        Clients Profile
      </div>
      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex">
          {/* Image Section */}
          <div className="flex flex-col items-center w-1/4 border-r-2">
          <img src="/Building.jpg" alt="Building" className="w-56 h-56 object-contain " />
            <h2 className="text-lg font-semibold text-gray-800">Leadway Assurance</h2>
          </div>

          {/* Details Section */}
          <div className="pl-6 w-3/4">
            {/* First Row */}
            <div className="grid grid-cols-4 gap-4 pb-4 border-b">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-semibold text-gray-800">Leadway Assurance</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Broker</p>
                <p className="font-semibold text-gray-800">Broker Name</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Policy Start Date</p>
                <p className="font-semibold text-gray-800">28/10/2022</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Business Sector</p>
                <p className="font-semibold text-gray-800">Financial</p>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-4 gap-4 pt-4 pb-4 border-b">
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-semibold text-gray-800">01 700 2002</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-semibold text-gray-800">info@leadway.com</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-semibold text-gray-800">121/123 Funsho Williams Avenue, Iponri</p>
              </div>
            </div>

            {/* Update Profile Button */}
            <div className="pt-4">
              <Link to='/SalesDashboard/update-profile'>
                <button className="bg-red-100 border border-red-600 text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 hover:text-white transition">
                  Update Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mb-6">
        <div className="flex space-x-4">
          <Link to='/SalesDashboard/manage-proposal'>
            <button className="bg-red-100 border border-red-600 text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 hover:text-white transition">
            Manage Proposal
            </button>
          </Link>
          <Link to='/SalesDashboard/invoice-review'>
            <button className="bg-red-100 border border-red-600 text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 hover:text-white transition">
              Create Invoice
            </button>
          </Link>
          <Link to='/SalesDashboard/coverage-plan'>
            <button className="bg-red-100 border border-red-600 text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 hover:text-white transition">
              See Plans
            </button>
          </Link>
          <Link to='/SalesDashboard/send-ecard'>
            <button className="bg-red-100 border border-red-600 text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 hover:text-white transition">
            Send E-Card
            </button>
          </Link>
        </div>
        <Link to='/SalesDashboard/add-enrollee'>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition">
            Add Enrollees
          </button>
        </Link>
      </div>
      <ClientsProfileTable />
    </div>
  );
};

export default ClientsProfile;
