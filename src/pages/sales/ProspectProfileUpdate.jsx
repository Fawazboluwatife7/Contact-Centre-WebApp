import { useNavigate } from "react-router-dom";

const ProspectProfileUpdate = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[95%] justify-center items-center p- px-20 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-2">
          <h1 className="text-3xl font-bold text-[#2D2D2D] mb-6">
            Update Profile
          </h1>
          <a
            href="#"
            className="text-red-600 font-bold flex items-center space-x-2"
            onClick={() => navigate("/SalesDashboard/sme-client-profile")} // Redirect to profile page on click
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M15.54 3.54L8.05 11H20v2H8.05l7.49 7.49L14 22l-9-9 9-9z"></path>
            </svg>
            <span>Back To Profile</span>
          </a>
        </div>
      <div className="bg-white rounded-lg shadow-lg h-[100%] w-full p-8">
        

        {/* Title and Divider */}
        <h2 className="text-lg font-semibold text-center mb-6 text-[#2D2D2D]">
          Please Confirm Prospect Information
        </h2>
        <div className="border-t-4 border-red-600 w-48 mx-auto mb-8"></div>

        {/* Form */}
        <form className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Start Date
            </label>
            <div className="relative">
              <input
                id="start-date"
                type="date"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                readOnly
              />
              <span className="absolute right-4 top-3 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ff1f1f"
                  stroke="#ff1f1f"
                  viewBox="0 0 512 512"
                  className="w-5 h-5"
                >
                  <path d="M81.98 163.96h82.44v73.28H81.98zm132.8 0h82.44v73.28h-82.44zm132.81 0h82.42v73.28h-82.42zM81.98 273.87h82.44v73.27H81.98zm132.8 0h82.44v73.27h-82.44zm132.81 0h82.42v73.27h-82.42zM81.98 383.78h82.44v73.27H81.98zm132.8 0h82.44v73.27h-82.44zm132.81 0h82.42v73.27h-82.42zM118.61 89.3c9.48 0 17.18-7.69 17.18-17.17V17.17a17.17 17.17 0 0 0-34.35 0v54.96c0 9.48 7.69 17.17 17.17 17.17zm137.39 0c9.47 0 17.17-7.69 17.17-17.17V17.17a17.17 17.17 0 0 0-34.35 0v54.96c0 9.48 7.69 17.17 17.17 17.17z" />
                  <path d="M424.29 44.9v27.23a30.94 30.94 0 0 1-30.92 30.9 30.95 30.95 0 0 1-30.9-30.9V44.9H286.9v27.23a30.95 30.95 0 0 1-30.92 30.9 30.95 30.95 0 0 1-30.9-30.9V44.9h-75.56v27.23a30.95 30.95 0 0 1-30.92 30.9 30.95 30.95 0 0 1-30.91-30.9V44.9H17.87V512h476.26V44.9zm42.36 210.66v228.96H45.34V127.33h421.31z" />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Benefit Package (Standard/ Customized)
            </label>
            <input
              type="text"
              value="GENERIC"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Client Name
            </label>
            <input
              type="text"
              value="First Bank Nigeria"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Scheme
            </label>
            <input
              type="text"
              value="SCHEME PURCHASED FOR STAFF"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Relationship Manager
            </label>
            <input
              type="text"
              value="Steven Johnson"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Plan Type
            </label>
            <div className="relative w-full">
              <input
                type="text"
                value="CORPORATE - PLUS, PRO & MAX"
                className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none"
                readOnly
              />
              {/* Dropdown Icon */}
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="23"
                  height="23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 23 23"
                >
                  <circle cx="11.5" cy="11.5" r="11.5" fill="#C61531" />
                  <path d="m11 16 6-6H5z" fill="#fff" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Dependent Addition
            </label>
            <input
              type="text"
              value="COVERED"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Parents and Others
            </label>
            <input
              type="text"
              value="NOT COVERED"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              ID Card (Printed cards/ E-cards)
            </label>
            <input
              type="text"
              value="E-Cards and Hard Copy cards"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Hospital List
            </label>
            <input
              type="text"
              value="GENERIC"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Any other Information/Concession/COVID Test or Treatment
            </label>
            <input
              type="text"
              value="NONE"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
              readOnly
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-12 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Convert
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProspectProfileUpdate;
