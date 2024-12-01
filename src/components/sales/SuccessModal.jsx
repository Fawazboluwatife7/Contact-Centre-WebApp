import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/SalesDashboard/clients-profile');
    onClose(); // Close the modal after navigation
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-2 w-96 rounded-lg h-1/2 shadow-lg text-center">
        <h2 className="mt-24 text-xl font-semibold mb-4 text-center break-words">Leadway Assurance profile <br /> has been created successfully</h2>
        <div className="flex justify-center mb-6">
          <div className="bg-black p-4 rounded-full">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <button 
          className="bg-red-600 text-white py-2 px-8 rounded" 
          onClick={handleViewClick}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
