import { useNavigate } from "react-router-dom";

const AddEnrollee = () => {
  const navigate = useNavigate();

  // Handle navigation when an option is selected
  const handleSelection = (type) => {
    if (type === "individual") {
      navigate("/SalesDashboard/enrollee-onboard"); // Replace with the actual route for adding an individual
    } else if (type === "multiple") {
      navigate("/SalesDashboard/add-enrollee-multiple"); // Replace with the actual route for adding multiple enrolleeEnrollee-multiple"); // Replace with the actual route for adding multiple enrollee"); // Replace with the actual route for adding multiple
    }
  };

  return (
    <div className="px-2 h-[100%]">
      {/* Page Title */}
      <div className=" top-4 left-4 text-black font-bold text-3xl ml-2">
        Add Enrollee
      </div>

      {/* Back to Prospects Link */}
      <div className="flex items-center pl-[87%] space-x-2 cursor-pointer">
        {/* Backward Arrow Icon */}
        <svg
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
        >
          <path
            d="M18.75 7.5003H3.925l4.5375-5.45a1.2516 1.2516 0 0 0-1.925-1.6l-6.25 7.5a1.5 1.5 0 0 0-.1125.1875c0 .0625 0 .1-.0875.1625a1.25 1.25 0 0 0-.0875.45 1.25 1.25 0 0 0 .0875.45c0 .0625 0 .1.0875.1625q.0494.098.1125.1875l6.25 7.5a1.25 1.25 0 0 0 .9625.45 1.2496 1.2496 0 0 0 1.1959-1.6208 1.25 1.25 0 0 0-.2334-.4292l-4.5375-5.45H18.75a1.25 1.25 0 1 0 0-2.5"
            fill="#C61531"
          />
        </svg>

        {/* Back to prospects text */}
        <a
          href="/SalesDashboard/clients-profile-page"
          className="text-[#C61531] text-[19px] font-[Product Sans] font-bold"
        >
          Back To Clients
        </a>
      </div>

      {/* Content Area */}
      <div className="py-16 bg-white min-h-[80%]">
        {/* Main Heading */}
        <div className="text-center text-2xl font-product-sans text-[#34475E] mb-1 leading-[56px]">
          Add Enrollee
        </div>

        {/* Options Section */}
        <div className="flex justify-center gap-6 mt-12">
          {/* Individual Card */}
          <div
            className="relative w-72 h-76 bg-white border border-gray-300 rounded-md shadow-lg flex flex-col items-center py-6 cursor-pointer hover:shadow-2xl cursor-pointer hover:border-[#C61531] hover:border-4 "
            onClick={() => handleSelection("individual")}
          >
            {/* Individual Icon */}
            <svg
              className="w-24 h-24 mt-8 mb-12 text-[#C61531]"
              width="76"
              height="80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 76 80"
            >
              <path
                d="M19.25 19.08A18.77 18.77 0 0 0 38 37.83a18.77 18.77 0 0 0 18.75-18.75A18.77 18.77 0 0 0 38 .33a18.77 18.77 0 0 0-18.75 18.75M71.33 79.5h4.17v-4.17a29.2 29.2 0 0 0-29.17-29.16H29.67A29.2 29.2 0 0 0 .5 75.33v4.17z"
                fill="#C61531"
              />
            </svg>
            <div className="text-[#C61531] font-product-sans font-bold text-xl">
              Individual
            </div>
          </div>

          {/* Multiple Card */}
          <div
            className="relative w-72 h-72 bg-white border border-gray-300 cursor-pointer hover:border-[#C61531] hover:border-4  rounded-md shadow-lg flex flex-col items-center py-6 cursor-pointer hover:shadow-2xl"
            onClick={() => handleSelection("multiple")}
          >
            {/* Multiple Icon */}
            <svg
              className="w-24 h-24 mt-8 mb-12 text-[#C61531]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 81"
            >
              <path
                d="M50 19.2a19.2 19.2 0 1 1-38.5 0 19.2 19.2 0 0 1 38.5 0m27 19.3a15.4 15.4 0 1 0 0-30.8 15.4 15.4 0 0 0 0 30.8m-7.8 20v-.8q0-6.4-3.8-11.5h25.2c5.2 0 9.4 4.2 9.4 9.4 0 0 0 17.5-23 17.5q-7 0-11.3-1.8a30 30 0 0 0 3.5-12.1zm-7.7-.8A11.5 11.5 0 0 0 50 46.2H11.5A11.5 11.5 0 0 0 0 57.7v.6s0 22.5 30.8 22.5c29.3 0 30.7-20.5 30.7-22.4z"
                fill="#C61531"
              />
            </svg>
            <div className="text-[#C61531] font-product-sans font-bold text-xl">
              Multiple
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEnrollee;
