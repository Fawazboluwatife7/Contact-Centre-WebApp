import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ActionButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[85px] h-[34px] bg-white border border-[#353535] rounded-[4px] text-center font-semibold text-[18px] leading-[21px] text-[#353535] hover:text-[#C61531] hover:border-[#C61531]"
    >
      {label}
    </button>
  );
};

const ProgressBar = () => {
  const steps = [true, true, true, true, true, false];
  return (
    <div className="flex gap-1 justify-center">
      {steps.map((isActive, index) => (
        <div
          key={index}
          className={`w-9 h-1 rounded-md ${isActive ? "bg-[#C61531]" : "bg-[#DDDFE0]"}`}
        ></div>
      ))}
    </div>
  );
};

const Modal = ({ onComplete }) => {
  const [responses, setResponses] = useState({ broker: null, agent: null });

  const handleResponse = (field, value) => {
    const updatedResponses = { ...responses, [field]: value };
    setResponses(updatedResponses);

    // Check if both responses are provided
    if (updatedResponses.broker !== null && updatedResponses.agent !== null) {
      onComplete();
    }
  };

  return (
    <div className=" -mb-[100px] fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="relative max-w-[800px] h-auto bg-white rounded-[5px] p-8 mx-4">
        <div className="w-full text-center font-semibold text-[24px] md:text-[30px] leading-[30px] md:leading-[35px] text-black mb-6">
          Select “Yes” or “No”
        </div>
        <div className="w-full text-center font-semibold text-[16px] md:text-[20px] leading-[20px] md:leading-[23px] text-[#353535] mb-6">
          Is there a Broker or an Agent?
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <ActionButton label="YES" onClick={() => handleResponse("broker", true)} />
          <ActionButton label="NO" onClick={() => handleResponse("broker", false)} />
        </div>
        <div className="w-full text-center font-semibold text-[16px] md:text-[20px] leading-[20px] md:leading-[23px] text-[#353535] mb-6">
          Is there a Sales Agent?
        </div>
        <div className="flex justify-center space-x-4">
          <ActionButton label="YES" onClick={() => handleResponse("agent", true)} />
          <ActionButton label="NO" onClick={() => handleResponse("agent", false)} />
        </div>
      </div>
    </div>
  );
};

const ClientOnboarding = () => {
  const navigate = useNavigate();

  const handleModalComplete = () => {
    navigate("/ClientOnboardingPage0"); // Replace "/next-page" with the desired route
  };

  return (
    <div className="p-6 bg-gray-200">
      <div className="top-4 left-4 text-black font-bold text-3xl ml-2">
        Client Onboarding
      </div>
      <div className="py-12 bg-white h-[590px]">
        <div className="relative mx-auto max-w-4xl">
          <div className="-mt-10 text-center text-2xl font-product-sans text-[#34475E] leading-[56px]">
            Complete This In No Time
          </div>
          <div className="text-center text-sm font-product-sans text-[#C61531] font-bold mb-4">
            Broker Details
          </div>
          <ProgressBar />
        </div>
        <Modal onComplete={handleModalComplete} />
      </div>
    </div>
  );
};

export default ClientOnboarding;
