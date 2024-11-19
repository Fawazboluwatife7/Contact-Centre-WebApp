import { useNavigate } from 'react-router-dom';


const ContactPersonForm = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  // Function to handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="p-6 bg-gray-200 h-full">
      {/* Page Title */}
      <div className="top-4 left-4 text-black font-bold text-3xl ml-2">
        Client Onboarding
      </div>
      {/* Content area */}
      <div className="py-16 mt-10 bg-white min-h-[78%]">
        {/* Page Header */}
        <div className="relative mx-auto max-w-4xl">
          {/* Main Heading */}
          <div className="text-center text-2xl font-product-sans text-[#34475E] mb-1 leading-[56px]">
            Complete This In No Time
          </div>
          {/* Subheading */}
          <div className="text-center text-sm font-product-sans text-[#C61531] font-bold mb-4">
            Company Contact Person
          </div>
          {/* Progress Bar */}
          <div className="flex gap-1 justify-center mt-2">
            <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
            <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
          </div>
        </div>
        <div className="relative w-full max-w-[1163px] h-auto mx-auto bg-white rounded-[5px] p-8">
          {/* Input Group 1: First Name and Last Name */}
          <div className="flex gap-16 mb-6">
            {/* First Name */}
            <div className="flex flex-col w-full max-w-[487px] ml-10">
              <label
                htmlFor="firstName"
                className="font-product-sans text-[16px] text-[#353535] mb-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full h-[49px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531]"
                placeholder=""
              />
            </div>
            {/* Last Name */}
            <div className="flex flex-col w-full max-w-[487px]">
              <label
                htmlFor="lastName"
                className="font-product-sans text-[16px] text-[#353535] mb-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full h-[49px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531]"
                placeholder=""
              />
            </div>
          </div>

          {/* Input Group 2: Phone Number and Email */}
          <div className="flex gap-16 mb-6">
            {/* Phone Number */}
            <div className="flex flex-col w-full max-w-[487px] ml-10">
              <label
                htmlFor="phoneNumber"
                className="font-product-sans text-[16px] text-[#353535] mb-2"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                className="w-full h-[49px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531]"
                placeholder=""
              />
            </div>
            {/* Email */}
            <div className="flex flex-col w-full max-w-[487px]">
              <label
                htmlFor="email"
                className="font-product-sans text-[16px] text-[#353535] mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full h-[49px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531]"
                placeholder=""
              />
            </div>
          </div>

          {/* Buttons */}
          <div  className="flex justify-between items-center mt-8">
            {/* Back Button */}
            <button onClick={() => handleNavigate("/CompanyDetailsForm")} className="w-[196px] h-[56px] border border-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-[#C61531] ml-10">
              Back
            </button>
            {/* Proceed Button */}
            <button onClick={() => handleNavigate("/C")} className="w-[196px] h-[56px] bg-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-white mr-5">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPersonForm;
