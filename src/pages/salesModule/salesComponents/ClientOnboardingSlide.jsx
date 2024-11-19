import { useNavigate } from "react-router-dom";

const PageTitle = () => (
  <div className="left-4 text-black font-bold text-3xl mb-2">
    Client Onboarding
  </div>
);

const PageHeader = () => (
  <div className="mx-auto max-w-4xl -mt-8">
    <div className="text-center text-2xl font-product-sans text-[#34475E] mb-1 leading-[56px]">
      Complete This In No Time
    </div>
    <div className="text-center text-sm font-product-sans text-[#C61531] font-bold mb-4">
      Broker Details
    </div>
    <div className="flex gap-1 justify-center mt-2">
      <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
      <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
      <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
      <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
      <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
      <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
    </div>
  </div>
);

const InputField = ({ id, label, type = "text", placeholder = "" }) => (
  <div className="flex flex-col w-full max-w-[487px]">
    <label
      htmlFor={id}
      className="font-semibold text-[16px] text-[#353535] mb-2"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      className="w-full h-[49px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531]"
      placeholder={placeholder}
    />
  </div>
);

const InputGroup = ({ children }) => (
  <div className="flex gap-16 mb-6">{children}</div>
);

const ClientOnboardingForm = ({ onBack, onProceed }) => (
  <div className="relative w-full max-w-[1163px] h-auto mx-auto bg-white rounded-[5px] p-8">
    <InputGroup>
      <InputField id="FirstName" label="First Name" />
      <InputField id="LastName" label="Last Name" />
    </InputGroup>
    <InputGroup>
      <InputField id="MobileNumber" label="Mobile Number" type="number" />
      <InputField id="email" label="Email" type="email" />
    </InputGroup>
    <InputGroup>
      <InputField id="CommisionRate" label="Commission Rate" type="number" />
      <InputField id="BrokerCode" label="Broker Code" type="number" />
    </InputGroup>
    <div className="flex justify-between items-center mt-8">
      <button
        onClick={onBack}
        className="w-[196px] h-[56px] border border-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-[#C61531] ml-10"
      >
        Back
      </button>
      <button
        onClick={onProceed}
        className="w-[196px] h-[56px] bg-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-white mr-5"
      >
        Proceed
      </button>
    </div>
  </div>
);

const ClientOnboardingSlide0 = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/ClientOnboardingPage"); // Replace with the actual route for the previous page
  };

  const handleProceed = () => {
    navigate("/SaleAgentPage"); // Replace with the actual route for the next page
  };

  return (
    <div className="p-6 bg-gray-200 w-[1150] h-full">
      <PageTitle />
      <div className="py-16 bg-white h-[70%]">
        <PageHeader />
        <ClientOnboardingForm onBack={handleBack} onProceed={handleProceed} />
      </div>
    </div>
  );
};

export default ClientOnboardingSlide0;
