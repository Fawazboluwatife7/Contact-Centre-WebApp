import React from "react";

const SMEClientProfile = () => {
  return (
    <div className="px-20  min-h-full p-4">
      {/* Page Title */}
      <h1 className="relative mr-auto mb-5 text-black font-bold text-3xl">
        Prospect Profile
      </h1>

      {/* Back to Profile Link */}
      <a
        href="#"
        className="flex items-center text-[#C61531] font-bold text-lg cursor-pointer gap-3 ml-[84%]"
      >
        <svg
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
        >
          <path
            d="M18.75 7.5003H3.925l4.5375-5.45a1.2516 1.2516 0 0 0-1.925-1.6l-6.25 7.5a1.5 1.5 0 0 0-.1125.1875c0 .0625 0 .1-.0875.1625a1.25 1.25 0 0 0-.0875.45 1.25 1.25 0 0 0 .0875.45c0 .0625 0 .1.0875.1625q.0494.098.1125.1875l6.25 7.5a1.25 1.25 0 0 0 .9625.45 1.2496 1.2496 0 0 0 1.1959-1.6208 1.25 1.25 0 0 0-.2334-.4292l-4.5375-5.45H18.75a1.25 1.25 0 1 0 0-2.5"
            fill="#C61531"
          />
        </svg>
        Back To Profile
      </a>

      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex">
          {/* Image Section */}
          <div className="flex flex-col items-center w-1/4 border-r-2">
            <img
              src="path/to/building-image.png"
              alt="Building"
              className="w-32 h-32 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              Leadway Assurance
            </h2>
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
                <p className="font-semibold text-gray-800">
                  121/123 Funsho Williams Avenue, Iponri
                </p>
              </div>
            </div>

            {/* Update Profile Button */}
            <div className="pt-4">
              <button className="bg-pink-100 border border-red-600 text-red-600 px-4 py-2 rounded-sm font-semibold hover:bg-red-700 hover:text-white transition">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mb-6">
        <div className="flex space-x-4">
          {["Manage Proposal", "Create Invoice", "See Plans", "Send E-Card"].map(
            (buttonText) => (
              <button
                key={buttonText}
                className="bg-pink-100 border border-red-600 text-red-600 px-8 py-2 rounded-sm font-semibold hover:bg-red-700 hover:text-white transition"
              >
                {buttonText}
              </button>
            )
          )}
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-sm font-semibold hover:bg-red-700 transition">
          Convert to Client
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-start mb-">
        <div className="flex space-x-4 w-1/2">
          {["Proposal History", "Invoice History", "Recent Activity"].map(
            (tabText) => (
              <button
                key={tabText}
                className="bg-red-600 text-white px-4 py-2 rounded-t-md font-semibold hover:bg-red-700 transition"
              >
                {tabText}
              </button>
            )
          )}
        </div>
      </div>

      {/* Proposal History Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody>
              {[
                { name: "Customized Plan #01", type: "Retail", date: "22 Aug 2022" },
                { name: "Customized Plan #02", type: "Corporate", date: "22 Aug 2022" },
                {
                  name: "Health Insurance Presentation",
                  type: "Retail",
                  date: "22 Aug 2022",
                },
              ].map(({ name, type, date }) => (
                <tr className="border-b" key={name}>
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-4">
                      <img
                        src="path/to/image.png"
                        alt={name}
                        className="w-10 h-10 rounded"
                      />
                      <span>{name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">{type}</td>
                  <td className="px-4 py-2">{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SMEClientProfile;
