import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CorporateProspectSuccessModal from "./CropProspSuccModal"; // Adjust the path as needed

// ProgressBar Component
const ProgressBar = () => (
  <div className="flex gap-1 justify-center mt-2">
    {[...Array(6)].map((_, index) => (
      <div key={index} className="w-9 h-1 bg-[#C61531] rounded-md"></div>
    ))}
  </div>
);

// InputField Component
const InputField = ({ id, label, type = "text", placeholder = "" }) => (
  <div className="flex flex-col w-full max-w-[487px]">
    <label htmlFor={id} className="font-semibold text-[16px] text-[#353535] mb-2">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full h-[49px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531]"
    />
  </div>
);

// FormHeader Component
const FormHeader = () => (
  <div className="relative mx-auto max-w-4xl">
    <div className="text-center text-2xl font-product-sans text-[#34475E] mb-1 leading-[56px]">
      Complete This In No Time
    </div>
    <div className="text-center text-sm font-product-sans text-[#C61531] font-bold mb-4">
      Sale Agent Details
    </div>
    <ProgressBar />
  </div>
);

// SaleAgentForm Component
const SaleAgentForm = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  // Handlers
  const handleShowModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  return (
    <div className="p-6 bg-gray-200 h-full">
      <div className="top-4 left-4 text-black font-bold text-3xl ml-2">
        Client Onboarding
      </div>

      <div className="py-8 mt-10 bg-white min-h-[85%]">
        <FormHeader />
        <div className="relative w-full max-w-[1163px] h-[95%] mx-auto bg-white rounded-[5px] p-8">
          <div className="flex gap-16 mb-6">
            <InputField id="FirstName" label="First Name" />
            <InputField id="LastName" label="Last Name" />
          </div>
          <div className="flex gap-16 mb-6">
            <InputField id="email" label="Email" type="email" />
            <InputField id="PhoneNumber" label="Phone Number" type="number" />
          </div>
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => navigate("/ClientOnboardingPage0")}
              className="w-[196px] h-[56px] border border-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-[#C61531] ml-10"
            >
              Back
            </button>
            <button
              onClick={handleShowModal}
              className="w-[196px] h-[56px] bg-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-white mr-5"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>

      {isModalVisible && (
        <CorporateProspectSuccessModal />
      )}
    </div>
  );
};

export default SaleAgentForm;
