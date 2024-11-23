import { useNavigate } from 'react-router-dom';


const PageTitle = () => (
  <div className="-mt-16 relative bottom-10 left-4 text-black font-bold text-3xl -ml-28">
    Client Onboarding
  </div>
);

const ProgressBar = () => (
  <div className="flex justify-center lg:ml-[38%] md:ml-80 ml-5 gap-1 w-60 px-6 -mt-2">
    <div className="flex-1 h-[4px] bg-[#C61531] rounded-lg"></div>
    <div className="flex-1 h-[4px] bg-[#DDDFE0] rounded-lg"></div>
  </div>
);

const InputField = ({ label, type = "text", id }) => (
  <div className="space-y-1">
    <label htmlFor={id} className="font-semibold text-[16px] text-[#353535] mb-2">{label}</label>
    <input id={id} type={type} className="w-full p-4 border border-gray-300 rounded-lg" />
  </div>
);

const SelectField = ({ label, id, options }) => (
  <div className="flex flex-col max-w-full">
    <label htmlFor={id} className="font-semibold text-[16px] text-[#353535] mb-2">{label}</label>
    <div className="relative">
      <select id={id} className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none">
        <option value=""></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
        <svg width="23" height="23" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23">
          <circle cx="11.5" cy="11.5" r="11.5" fill="#C61531" />
          <path d="m11 16 6-6H5z" fill="#fff" />
        </svg>
      </div>
    </div>
  </div>
);

const GenderField = () => (
  <div className="space-y-1">
    <label className="font-semibold text-[16px] text-[#353535] mb-2">Gender</label>
    <div className="flex items-center justify-start space-x-8">
      {["Male", "Female"].map((gender, index) => (
        <div key={index} className="flex flex-col items-center space-y-2">
          <div className="relative w-12 h-12 bg-[#F0F2FA] rounded-full flex justify-center items-center">
            <span className="text-gray-400">{gender[0]}</span>
            <input type="radio" name="gender" value={gender.toLowerCase()} className="absolute bottom-0 right-0 w-4 h-4 accent-red-500" />
          </div>
          <span className="text-xs text-gray-700">{gender}</span>
        </div>
      ))}
    </div>
  </div>
);

const SMEClientOnboarding1 = () => {
  const businessOptions = [
    { value: "tech", label: "Technology" },
    { value: "finance", label: "Finance" },
    { value: "health", label: "Healthcare" }
  ];

  const navigate = useNavigate(); // Initialize the navigate function
  // Function to handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="relative justify-center items-center p-28 bg-[#F0F2FA] h-[90%]">
      <PageTitle />
      <div className="-mt-8 -ml-24 bg-white rounded-md shadow-md w-[1080px]">
        <div className="text-center py-6">
          <h1 className="text-2xl text-[#34475E] font-bold">Complete This In No Time</h1>
        </div>
        <ProgressBar />
        <div className="px-4 md:px-8 mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectField id="businessSector" label="Title" options={businessOptions} />
            <InputField label="Full Name" id="fullName" />
            <InputField label="Email Address" type="email" id="email" />
            <InputField label="Date of Birth" type="date" id="dob" />
            <GenderField />
            <InputField label="Address" id="address" />
            <SelectField id="state" label="State" options={businessOptions} />
            <InputField label="City" id="city" />
          </div>
        </div>
        <div className="flex justify-end px-4 md:px-8 pb-6">
          <button onClick={() => handleNavigate("/SMEClientOnboarding")} className="mt-2 md:w-auto px-20 py-3 bg-[#C61531] text-white rounded-md text-lg font-medium">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default SMEClientOnboarding1;
