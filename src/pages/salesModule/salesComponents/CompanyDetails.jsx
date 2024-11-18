const ClientOnboarding = () => {
  return (
    <div className="p-6 bg-gray-200 h-full">
      {/* Page Title */}
      <div className="top-4 left-4 text-black font-bold text-3xl ml-2">
        Client Onboarding
      </div>
      {/* Content area */}
      <div className="py-16 mt-16 bg-white h-[85%]">
        {/* Page Header */}
        <div className="relative mx-auto max-w-4xl">
          {/* Main Heading */}
          <div className="text-center text-2xl font-product-sans text-[#34475E] mb-1 leading-[56px]">
            Complete This In No Time
          </div>
          {/* Subheading */}
          <div className="text-center text-sm font-product-sans text-[#C61531] font-bold mb-4">
            Company Details
          </div>
          {/* Progress Bar */}
          <div className="flex gap-1 justify-center mt-2">
            <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
          </div>
        </div>
        <div className="relative w-full max-w-[1163px] h-auto mx- bg-white rounded-[5px] p-8">
          {/* Input Group 1: Company Name and Phone Number */}
          <div className="flex gap-16 mb-6">
            {/* Company Name */}
            <div className="flex flex-col w-full max-w-[487px] ml-10">
              <label
                htmlFor="companyName"
                className="font-product-sans text-[16px] text-[#353535] mb-2"
              >
                Company Name
              </label>
              <input
                id="companyName"
                type="text"
                className="w-full h-[49px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531]"
                placeholder=""
              />
            </div>
            {/* Phone Number */}
            <div className="flex flex-col w-full max-w-[487px]">
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
          </div>

          {/* Input Group 2: Email and Business Sector */}
          <div className="flex gap-16 mb-6">
            {/* Email */}
            <div className="flex flex-col w-full max-w-[487px] ml-10">
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
            {/* Business Sector */}
            <div className="flex flex-col w-full max-w-[487px]">
              <label
                htmlFor="businessSector"
                className="font-product-sans text-[16px] text-[#353535] mb-2"
              >
                Business Sector
              </label>
              <div className="relative">
                <select
                  id="businessSector"
                  className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none"
                >
                  <option value="">Select a sector</option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="health">Healthcare</option>
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
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-8">
            {/* Back Button */}
            <button className="w-[196px] h-[56px] border border-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-[#C61531] ml-10">
              Back
            </button>
            {/* Proceed Button */}
            <button className="w-[196px] h-[56px] bg-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-white mr-5">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientOnboarding;
