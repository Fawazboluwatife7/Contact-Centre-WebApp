import React from "react";

const ECardModal = ({ isOpen, onClose }) => {
  // Only render the modal if `isOpen` is true

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      {/* Modal Content */}
      <div className="relative bg-white shadow-lg rounded-lg w-full max-w-3xl px-8 py-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center mb-4">
          <img
            src='/SmallLogo.svg'
            alt="Logo"
            className=""
          />
          
        </div>

        {/* Content Section */}
        <div className="flex">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden border-2 border-red-500">
            <img
              src="/Avatar.svg"
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
                <p className="text-base font-bold text-gray-800">
                  21000722/0
                </p>
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
                <p className="text-base font-bold text-gray-800">
                  15-Nov-1985
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Plan:</p>
                <p className="text-base font-bold text-red-600">PROMAX</p>
              </div>
            </div>

            {/* Biometric Icon */}
            <div className="flex items-center justify-center mt-4 ml-12">
              <img
                src="/biometric.svg"
                alt="Biometric Icon"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-black h-2 rounded-full overflow-hidden mt-6">
          <div className="bg-red-600 h-full w-[70%] ml-24"></div>
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
