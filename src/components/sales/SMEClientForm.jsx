import { Link } from 'react-router-dom';

const SMEClientForm = () => {
  // ProgressBar Component
  const ProgressBar = () => {
    return (
      <div className="flex justify-center lg:ml-[38%] md:ml-80 ml-5 gap-1 w-60 px-6">
        <div className="flex-1 h-[4px] bg-[#C61531] rounded-lg"></div>
        <div className="flex-1 h-[4px] bg-[#C61531] rounded-lg"></div>
      </div>
    );
  };

  // InputField Component
  const InputField = ({ label, type = "text", id }) => {
    return (
      <div className="space-y-2">
        <label htmlFor={id} className="font-semibold text-[16px] text-[#353535] mb-2">
          {label}
        </label>
        <input
          id={id}
          type={type}
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      </div>
    );
  };

  // SelectField Component
  const SelectField = ({ label, id, options }) => {
    return (
      <div className="flex flex-col w-full max-w-full">
        <label htmlFor={id} className="font-semibold text-[16px] text-[#353535] mb-2">
          {label}
        </label>
        <div className="relative">
          <select
            id={id}
            className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none"
          >
            <option value=""></option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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
    );
  };

  return (
    <div className="justify-center items-center p-2 bg-[#F0F2FA] min-h-full">
      {/* Page Title */}
      <div className="ml-6 bottom-10 left-4 text-black font-bold text-3xl">
        Client Onboarding
      </div>

      {/* Main Container */}
      <div className="justify-center w-[95%] h-full ml-7 mt-10 bg-white rounded-md shadow-md">
        {/* Header Section */}
        <div className="text-center py-6">
          <h1 className="text-2xl text-[#34475E] font-bold">Complete This In No Time</h1>
        </div>

        {/* Progress Bar */}
        <ProgressBar />

        {/* Input Fields */}
        <div className="py-10 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField id="employeeNumber" label="Employee Number" />
            <InputField id="planCode" label="Plan Code" />
            <InputField id="memberIndicator" label="Member/Dependant Indicator" type="email" />
            <SelectField
              id="relationship"
              label="Relationship to Main Member"
              options={[
                { label: "Technology", value: "tech" },
                { label: "Finance", value: "finance" },
                { label: "Healthcare", value: "health" },
              ]}
            />
            <SelectField
              id="maritalStatus"
              label="Marital Status"
              options={[
                { label: "Single", value: "single" },
                { label: "Married", value: "married" },
                { label: "Divorced", value: "divorced" },
              ]}
            />
            <InputField id="phoneNumber" label="Phone Number" />
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex lg:flex-row lg:justify-between gap-16 px-4 md:px-8 pb-6">
          <Link to='/SalesDashboard/sme-client-onboarding1'>
            <button className="w-full md:w-auto md:px-20 px-2 py-3 bg-white border border-[#C61531] text-[#C61531] rounded-md text-lg font-medium">
            Back
            </button>
          </Link>
          <Link to='/SalesDashboard/create-prospect1'>
            <button className="w-full md:w-auto md:px-16 px-2 py-3 bg-[#C61531] text-white rounded-md text-lg font-medium">
            Proceed
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SMEClientForm;
