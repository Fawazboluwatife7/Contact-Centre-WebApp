import React from "react";
import { Link } from "react-router-dom";

const BillingSchemeForm = () => {

  return (
    <div className=" bg-none h-[70%]">
      {/* Page Title */}
      <div className="top-4 left-4 text-black font-bold text-3xl ml-2">
        Client Onboarding
      </div>
      {/* Content area */}
      <div className="py-8 mt-6 bg-white h-[65%]">
        {/* Page Header */}
        <div className="relative mx-auto max-w-4xl">
          {/* Main Heading */}
          <div className="text-center text-2xl font-product-sans text-[#34475E] mb-1 leading-[56px]">
            Complete This In No Time
          </div>
          {/* Subheading */}
          <div className="text-center text-sm font-product-sans text-[#C61531] font-bold mb-4">
            Billing, Scheme & Premium
          </div>
          {/* Progress Bar */}
          <div className="flex gap-1 justify-center mt-2">
            <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
            <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
            <div className="w-9 h-1 bg-[#C61531] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
            <div className="w-9 h-1 bg-[#DDDFE0] rounded-md"></div>
          </div>
        </div>
        <div className="relative w-full max-w-[1163px] h-auto mx-auto bg-white rounded-[5px] p-8">
          {/* Input Group 1 */}
          <div className="flex gap-16 mb-6">
            {/* Billing Frequency */}
            <div className="flex flex-col w-full max-w-[487px] ml-10">
              <label
                htmlFor="billingFrequency"
                className="font-semibold text-[16px] text-[#353535] mb-2"
              >
                Billing Frequency
              </label>
              <div className="relative">
                <select
                  id="billingFrequency"
                  className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none"
                >
                  <option value=""></option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="annually">Annually</option>
                </select>
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
            {/* Group Size */}
            <div className="flex flex-col w-full max-w-[487px]">
              <label
                htmlFor="groupSize"
                className="font-semibold text-[16px] text-[#353535] mb-2"
              >
                Group Size On Take
              </label>
              <div className="relative">
                <select
                  id="groupSize"
                  className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none"
                >
                  <option value=""></option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
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

          {/* Input Group 2 */}
          <div className="flex gap-16 mb-6">
            {/* Age Band */}
            <div className="flex flex-col w-full max-w-[487px] ml-10">
              <label
                htmlFor="ageBand"
                className="font-semibold text-[16px] text-[#353535] mb-2"
              >
                Age Band
              </label>
              <div className="relative">
                <select
                  id="ageBand"
                  className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none"
                >
                  <option value=""></option>
                  <option value="18-25">18-25</option>
                  <option value="26-35">26-35</option>
                  <option value="36-50">36-50</option>
                </select>
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
            {/* Plan Type */}
            <div className="flex flex-col w-full max-w-[487px]">
              <label
                htmlFor="planType"
                className="font-semibold text-[16px] text-[#353535] mb-2"
              >
                Plan Type
              </label>
              <div className="relative">
                <select
                  id="planType"
                  className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none"
                >
                  <option value=""></option>
                  <option value="basic">Basic</option>
                  <option value="premium">Premium</option>
                  <option value="deluxe">Deluxe</option>
                </select>
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

          {/* Input Group 3 */}
          <div className="flex gap-16 mb-10">
           
            {/* Preferred Currency */}
            <div className="flex flex-col w-full max-w-[487px] ml-[54%]">
              <label
                htmlFor="preferredCurrency"
                className="font-semibold text-[16px] text-[#353535] mb-2"
              >
                Preferred Currency
              </label>
              <div className="relative">
                <select
                  id="preferredCurrency"
                  className="w-full h-[56px] bg-white border border-[#7F8B94] rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-[#C61531] appearance-none"
                >
                  <option value=""></option>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="ngn">NGN</option>
                </select>
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
          <div className="flex justify-between items-center mt-24">
            {/* Back Button */}
            <Link to="/SalesDashboard/corporate-client-onboarding2">
              <button className="w-[196px] h-[56px] border border-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-[#C61531] ml-10">
                Back
              </button>
            </Link>
            {/* Proceed Button */}
            <Link to="/SalesDashboard/corporate-client-onboarding4">
              <button className="w-[196px] h-[56px] bg-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-white mr-5">
                Proceed
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSchemeForm;
