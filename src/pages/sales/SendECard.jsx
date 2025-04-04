import { useState } from "react"; // Adjust the path to your modal component
import ECardModal from "../../components/sales/ECardModal";

const SendECardPage = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to handle modal visibility
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 min-h-full">
      {/* Page Title */}
      <h1 className="top-4 left-4 text-black font-bold text-3xl ml-2">
        Send E-Cards
      </h1>

      {/* Back to Prospects Link */}
      <div className="flex items-center pl-[80%] space-x-2 cursor-pointer">
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
        <a
          href="/SalesDashboard/sme-client-profile"
          className="text-[#C61531] text-[19px] font-[Product Sans] font-bold"
        >
          Back To Clients
        </a>
      </div>

      {/* Content Area */}
      <div className="py-10 mt-1 bg-white min-h-full">
        {/* Main Heading */}
        <div className="flex justify-center">
          <h1 className="text-2xl md:text-3xl text-[#34475E] font-normal font-product-sans">
            How Would You Like to Send E-Cards?
          </h1>
        </div>

        {/* Options Section */}
        <div className="md:flex sm:flex justify-center gap-6 mt-24">
          {/* Individual Card */}
          <div
            className="relative w-72 h-76 bg-white cursor-pointer hover:border-[#C61531] hover:border-4 border-gray-300 rounded-md shadow-lg flex flex-col items-center py-6"
            onClick={openModal} // Open modal on click
          >
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
            <div className="text-[#C61531] font-product-sans font-bold text-2xl">
              Individual
            </div>
          </div>

          {/* Multiple Card */}
          <div className="relative w-72 h-72 bg-white border cursor-pointer hover:border-[#C61531] hover:border-4 border-gray-300 rounded-md shadow-lg flex flex-col items-center py-6">
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
            <div className="text-[#C61531] font-product-sans font-bold text-2xl">
              Multiple
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && <ECardModal onClose={closeModal} />}
    </div>
  );
};

export default SendECardPage;
