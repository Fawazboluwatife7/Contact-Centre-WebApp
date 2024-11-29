import React from 'react';
import { Link } from 'react-router-dom';

const CoveragePlan = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-7xl mx-auto py-2 px-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Leadway Assurance - Coverage Plan</h1>
          <Link to="/SalesDashboard/clients-profile" className="text-red-500 font-bold">Back To Profile
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-14">
          <div className="bg-gray-500 p-4 rounded-lg">
            <h2 className="text-xl font-bold">Pro Max</h2>
            <p>Leadway Assurance</p>
            <p className="text-sm text-gray-600">Exp: Feb 28 2023</p>
            <p className="text-sm text-gray-600">75 Principals</p>
            <p className="text-sm text-gray-600">180 Dependents</p>
            <p className="text-sm text-gray-600">Policy No: 10001234</p>
            <button className="mt-4 bg-white text-gray-600 py-2 px-4 rounded">View</button>
          </div>
          <div className="bg-pink-400 p-4 rounded-lg">
            <h2 className="text-xl font-bold">Max</h2>
            <p>Leadway Assurance</p>
            <p className="text-sm text-gray-600">Exp: Feb 28 2023</p>
            <p className="text-sm text-gray-600">75 Principals</p>
            <p className="text-sm text-gray-600">180 Dependents</p>
            <p className="text-sm text-gray-600">Policy No: 10001234</p>
            <button className="mt-4 bg-white text-gray-600 py-2 px-4 rounded">View</button>
          </div>
          <div className="bg-orange-400 p-4 rounded-lg">
            <h2 className="text-xl font-bold">Pro</h2>
            <p>Leadway Assurance</p>
            <p className="text-sm text-gray-600">Exp: Feb 28 2023</p>
            <p className="text-sm text-gray-600">75 Principals</p>
            <p className="text-sm text-gray-600">180 Dependents</p>
            <p className="text-sm text-gray-600">Policy No: 10001234</p>
            <button className="mt-4 bg-white text-gray-600 py-2 px-4 rounded">View</button>
          </div>
        </div>
        <div className="flex space-x-0.5">
          <button className="bg-gray-400 text-black py-2 px-4 rounded">Overview</button>
          <button className="bg-white py-2 px-4 rounded">Exclusion</button>
          <button className="bg-pink-200 text-red-600 py-2 px-4 rounded">Principals</button>
          <button className="bg-green-400 text-white py-2 px-4 rounded">Hospital List</button>
          <button className="bg-red-500 text-white py-2 px-4 rounded ml-20">Customize</button>
        </div>
        <div className="bg-white p-4 rounded-lg h-72">
          <h3 className="text-lg font-bold mb-2">Exclusions</h3>
          <p className="text-sm text-gray-600 mb-4">Exclusions are the cases for which the insurance company does not provide coverage. These are the conditions excluded from the insured event that are not covered by the Health Insurance company.</p>
          <p className="text-sm text-gray-600">This plan does not have exclusions</p>
        </div>
      </div>
    </div>
  );
};

export default CoveragePlan;
