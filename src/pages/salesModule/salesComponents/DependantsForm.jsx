const DependantsForm = () => {
  return (
    <div className="p-6 bg-gray-200 min-h-full">
      {/* Page Title */}
      <div className="absolute top-4 left-4 text-black font-bold text-3xl ml-2">
        Client Onboarding
      </div>

      {/* Content area */}
      <div className="py-8 mt-16 bg-white min-h-[75%]">
        {/* Page Header */}
        <div className="relative mx-auto max-w-4xl">
          {/* Main Heading */}
          <div className="text-center text-2xl font-product-sans text-[#34475E] mb-1 leading-[56px]">
            Complete This In No Time
          </div>
          {/* Subheading */}
          <div className="text-center text-sm font-product-sans text-[#C61531] font-bold mb-4">
            Dependants
          </div>
          {/* Progress Bar */}
          <div className="flex gap-1 justify-center mt-2">
            <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
            <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
            <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
            <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
          </div>
        </div>

        {/* Form Area */}
        <div className="relative w-full max-w-[1163px] h-auto mx-auto bg-white rounded-[5px] p-8">
          {/* Input Group 1: Company Name and Phone Number */}
          <div className="flex gap-16 mb-6">
            {/* Limit In Beneficiaries */}
            <div className="flex flex-col w-full max-w-[487px] ml-10">
              <label
                htmlFor="limitInBeneficiaries"
                className="font-semibold text-[16px] text-[#353535] mb-2"
              >
                Limit In Beneficiaries
              </label>
              <div className="relative">
                <select
                  id="limitInBeneficiaries"
                  className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none"
                >
                  <option value=""></option>
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

            {/* Limit in Age */}
            <div className="flex flex-col w-full max-w-[487px]">
              <label
                htmlFor="limitInAge"
                className="font-semibold text-[16px] text-[#353535] mb-2"
              >
                Limit in Age
              </label>
              <div className="relative">
                <select
                  id="limitInAge"
                  className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none"
                >
                  <option value=""></option>
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

          {/* Input Group 2: Maximum Family Size and Others */}
          <div className="flex gap-16 mb-6">
            {/* Maximum Family Size */}
            <div className="flex flex-col w-full max-w-[487px] ml-10">
              <label
                htmlFor="maxFamilySize"
                className="font-semibold text-[16px] text-[#353535] mb-2"
              >
                Maximum Family Size
              </label>
              <div className="relative">
                <select
                  id="maxFamilySize"
                  className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none"
                >
                  <option value=""></option>
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

            {/* Maximum Spouse */}
            <div className="flex flex-col w-full max-w-[487px]">
              <label
                htmlFor="maxSpouse"
                className="font-semibold text-[16px] text-[#353535] mb-2"
              >
                Maximum Spouse
              </label>
              <div className="relative">
                <select
                  id="maxSpouse"
                  className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none"
                >
                  <option value=""></option>
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

           {/* Input Group 2: Maximum Family Size and Others */}
           <div className="flex gap-16 mb-6">
           

            {/* Others/Concessions */}
            <div className="flex flex-col w-full max-w-[487px] ml-[54%]">
              <label
                htmlFor="otherConcessions"
                className="font-semibold text-[16px] text-[#353535] mb-2"
              >
                Others/Concessions
              </label>
              <input
                id="otherConcessions"
                type="text"
                className="w-full h-[49px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531]"
                placeholder=""
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-24">
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

export default DependantsForm;
