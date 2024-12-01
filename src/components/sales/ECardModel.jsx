import React from "react";

const ECardModal = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 rounded-lg bg-gray-100 bg-dots-pattern opacity-50 pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center mb-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="w-10 h-10"
          />
          <h2 className="ml-2 font-semibold text-red-600 text-lg">Leadway Health</h2>
        </div>

        {/* Content Section */}
        <div className="flex">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden border-2 border-red-500">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Information */}
          <div className="flex-1 ml-4">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Mr. Olawale Coker
              </h3>
            </div>
            {/* First Row */}
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <p className="text-sm text-gray-600">Member No:</p>
                <p className="text-base font-bold text-gray-800">21000722/0</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Principal:</p>
                <p className="text-base font-bold text-gray-800">------</p>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <p className="text-sm text-gray-600">Date of Birth:</p>
                <p className="text-base font-bold text-gray-800">15-Nov-1985</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Plan:</p>
                <p className="text-base font-bold text-red-600">PROMAX</p>
              </div>
            </div>

            {/* Biometric Icon */}
            <div className="flex items-center justify-center mt-4">
              <img
                src="https://via.placeholder.com/30"
                alt="Biometric Icon"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-black h-2 rounded-full overflow-hidden mt-6">
          <div className="ml-20 bg-red-600 h-full w-72"></div>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-red-600 text-white font-semibold py-2 px-8 rounded-md hover:bg-red-700 focus:outline-none">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ECardModal;
