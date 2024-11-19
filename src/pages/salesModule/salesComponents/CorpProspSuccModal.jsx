import React from 'react';

const ModalBackground = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      {children}
    </div>
  );
};

const ModalContainer = ({ children }) => {
  return (
    <div className="relative w-full max-w-[684px] h-auto bg-white rounded-[5px] p-8 mx-4">
      {children}
    </div>
  );
};

const ModalTitle = ({ text }) => {
  return (
    <div className="flex w-full text-center font-semibold text-[24px] md:text-[30px] md:w-[46%] md:ml-44 leading-[30px] md:leading-[35px] text-black mb-6">
      {text}
    </div>
  );
};

const ActionButton = ({ label }) => {
  return (
    <button className="md:w-[196px] w-[70%] h-[53px] bg-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-white md:ml-52 ml-10 mt-7">
      {label}
    </button>
  );
};

const SuccessIcon = () => {
  return (
    <div className="flex ml-16 sm:ml-64">
      {/* SVG Content goes here */}
    </div>
  );
};

const CorporateProspectSuccessModal = () => {
  return (
    <ModalBackground>
      <ModalContainer>
        <ModalTitle text="Prospect with ID 21009878/0 has been created successfully" />
        <SuccessIcon />
        <ActionButton label="View" />
      </ModalContainer>
    </ModalBackground>
  );
};

export default CorporateProspectSuccessModal;

// import React, { useState } from 'react';
// import CorporateProspectSuccessModal from './CorporateProspectSuccessModal';  // Adjust the import path as necessary

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="App">
//       <button 
//         onClick={handleOpenModal} 
//         className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
//       >
//         Show Modal
//       </button>
//       {isModalOpen && (
//         <CorporateProspectSuccessModal onClose={handleCloseModal} />
//       )}
//     </div>
//   );
// };

// export default App;
