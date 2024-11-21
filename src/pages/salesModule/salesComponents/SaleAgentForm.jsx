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

      <div className="justify-center w-[98%] h-[92%] ml-4 mt-5 bg-white rounded-md shadow-md">
        <FormHeader />
        <div className="py-10 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="sapce-y-2">
            <InputField id="FirstName" label="First Name" />
            <InputField id="LastName" label="Last Name" />
          </div>
          <div className="space-y-2">
            <InputField id="email" label="Email" type="email" />
            <InputField id="PhoneNumber" label="Phone Number" type="number" />
          </div>
          </div>
          <div className="flex lg:flex-row lg:justify-between gap-10 px-4 pt-11  md:px-8 pb-6">
            <button
              onClick={() => navigate("/ClientOnboardingPage0")}
              className="w-full md:w-auto md:-ml-7 md:px-20 px-2 py-3 bg-white border border-[#C61531] text-[#C61531] rounded-md text-lg font-medium "
            >
              Back
            </button>
            <button
              onClick={handleShowModal}
              className="w-full md:w-auto md:px-16 md:mr-28 px-2 py-3 bg-[#C61531] text-white rounded-md text-lg font-medium "
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
