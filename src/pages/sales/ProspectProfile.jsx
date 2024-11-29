import React from 'react';

const ProspectProfile = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <div className="absolute top-4 left-4 text-black font-bold text-3xl ml-2">
        Prospect Profile
      </div>

      <div className="flex items-center ml-[84%] mb-4 space-x-2 cursor-pointer">
        <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
          <path d="M18.75 7.5003H3.925l4.5375-5.45a1.2516 1.2516 0 0 0-1.925-1.6l-6.25 7.5a1.5 1.5 0 0 0-.1125.1875c0 .0625 0 .1-.0875.1625a1.25 1.25 0 0 0-.0875.45 1.25 1.25 0 0 0 .0875.45c0 .0625 0 .1.0875.1625q.0494.098.1125.1875l6.25 7.5a1.25 1.25 0 0 0 .9625.45 1.2496 1.2496 0 0 0 1.1959-1.6208 1.25 1.25 0 0 0-.2334-.4292l-4.5375-5.45H18.75a1.25 1.25 0 1 0 0-2.5" fill="#C61531"/>
        </svg>
        <a href="#" className="text-[#C61531] text-[19px] font-[Product Sans] font-bold">Back To Prospects</a>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex">
          <div className="w-1/4 flex flex-col border-r items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img src="https://via.placeholder.com/150" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Adisa Qudus</h3>
          </div>
          <div className="w-3/4 pl-6">
            <div className="grid grid-cols-4 gap-4 border-b pb-4">
              <div>
                <p className="text-gray-500 text-sm">Name</p>
                <p className="font-medium text-gray-800">Adisa Qudus</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Date of Birth</p>
                <p className="font-medium text-gray-800">23 February 1991</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Phone Number</p>
                <p className="font-medium text-gray-800">08035911412</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email address</p>
                <p className="font-medium text-gray-800">r.olutope@gmail.com</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 border-b pb-4 mt-4">
              <div>
                <p className="text-gray-500 text-sm">Home Address</p>
                <p className="font-medium text-gray-800">39 Adisa Bashua, Surulere, Lagos, Nigeria.</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Marital Status</p>
                <p className="font-medium text-gray-800">Single</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Gender</p>
                <p className="font-medium text-gray-800">Male</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-start space-x-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600">Send Proposal</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600">Create Invoice</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600">Send E-Card</button>
      </div>

      <div className="mt-6 md:grid md:grid-cols-2 grid grid-cols-1 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Enrollee Overall Status</h4>
          <div className="flex justify-center items-end space-x-6">
            <div className="flex flex-col items-center" style={{ width: '155.56px', height: '185.53px', gap: '0px' }}>
              <div className="bg-green-500 w-full rounded-b-xl" style={{ height: '100%' }}>
                <p className="ml-14 mt-14 text-white">100%</p>
              </div>
              <p className="mt-2 text-sm font-medium text-gray-800">Onboarding</p>
            </div>
            <div className="flex flex-col items-center" style={{ width: '155.56px', height: '185.53px', gap: '0px' }}>
              <div className="bg-orange-500 w-full rounded-b-xl" style={{ height: '100%' }}>
                <p className="ml-14 mt-14 text-white">100%</p>
              </div>
              <p className="mt-2 text-sm font-medium text-gray-800">Proposal</p>
            </div>
            <div className="flex flex-col items-center" style={{ width: '155.56px', height: '185.53px', gap: '0px' }}>
              <div className="bg-blue-500 w-full mt-3 rounded-b-xl" style={{ height: '80%' }}>
                <p className="ml-14 mt-14 text-white">80%</p>
              </div>
              <p className="mt-2 text-sm font-medium text-gray-800">Invoice</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Activity Summary Today</h4>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <p className="text-gray-700 text-sm">Sent E-Card</p>
              <span className="ml-auto text-gray-500 text-xs">9:35 am</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <p className="text-gray-700 text-sm">Sent Proposal</p>
              <span className="ml-auto text-gray-500 text-xs">9:35 am</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <p className="text-gray-700 text-sm">Adisa Qudus made payments</p>
              <span className="ml-auto text-gray-500 text-xs">9:35 am</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProspectProfile;
