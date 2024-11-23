import React from "react";
import backgroundImage from "../../../../assets/SalesModuleImages/Designer1.png"; // Update the path to your background image

const LandingPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[#F0F2FA] overflow-hidden"
      style={{
        background: `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      {/* Main Container */}
      <div className="relative flex flex-col items-center w-full max-w-[1440px] h-full p-6">
        {/* Logo */}
        <div className="w-[226px] h-[75px] mb-12">
          {/* Add your logo image here */}
          <img
          src="LeadwayLogo.svg"
          alt=""
          className="justify-items-center mt-8 ml-10"
        /> {/* Replace with your logo path */}
        </div>

        {/* Header Section */}
        <h1 className="text-center font-productSans font-bold text-[48px] leading-[58px] text-[#000000] mb-4">
          Welcome to the Experience Portal
        </h1>
        <p className="text-center font-productSans text-[18px] text-[#000000] mb-12">
          Select your role to continue.
        </p>

        {/* Role Modules Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[1163px]">
          {/* Sales Module */}
          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-md">
            <div className="w-[64px] h-[64px] bg-[#F3F5F6] flex items-center justify-center rounded-full mb-4">
              <svg className="w-[40px] h-[40px]" fill="none" viewBox="0 0 55 64">
                <path
                  d="M53 17 27.5 2 2 17v30l25.5 15L53 47z"
                  stroke="#C61531"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.5 29v12m12-18v18m-24-6v6"
                  stroke="#C61531"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="font-['Product Sans'] font-bold text-[18px] text-[#585858] mb-2">
              Sales
            </h2>
            <p className="text-center font-['Product Sans'] text-[14px] text-[#585858] leading-[20px] mb-4">
              Manage your clients and prospects with ease.
            </p>
            <button
              onClick={() => (window.location.href = "/sales-login")}
              className="w-full max-w-[200px] h-[50px] bg-[#C61531] rounded-md text-white font-['Product Sans'] font-bold text-[16px]"
            >
              Go to Sales
            </button>
          </div>

          {/* Case Management Module */}
          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-md">
            <div className="w-[64px] h-[64px] bg-[#F3F5F6] flex items-center justify-center rounded-full mb-4">
              <svg className="w-[40px] h-[40px]" fill="none" viewBox="0 0 55 64">
                <path
                  d="M53 17 27.5 2 2 17v30l25.5 15L53 47z"
                  stroke="#C61531"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.5 29v12m12-18v18m-24-6v6"
                  stroke="#C61531"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="font-['Product Sans'] font-bold text-[18px] text-[#585858] mb-2">
              Case Management
            </h2>
            <p className="text-center font-['Product Sans'] text-[14px] text-[#585858] leading-[20px] mb-4">
              Handle cases and ensure smooth resolutions.
            </p>
            <button
              onClick={() => (window.location.href = "/case-management-login")}
              className="w-full max-w-[200px] h-[50px] bg-[#C61531] rounded-md text-white font-['Product Sans'] font-bold text-[16px]"
            >
              Go to Case Management
            </button>
          </div>

          {/* Customer Service Module */}
          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-md">
            <div className="w-[64px] h-[64px] bg-[#F3F5F6] flex items-center justify-center rounded-full mb-4">
              <svg className="w-[40px] h-[40px]" fill="none" viewBox="0 0 55 64">
                <path
                  d="M53 17 27.5 2 2 17v30l25.5 15L53 47z"
                  stroke="#C61531"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.5 29v12m12-18v18m-24-6v6"
                  stroke="#C61531"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="font-['Product Sans'] font-bold text-[18px] text-[#585858] mb-2">
              Customer Service
            </h2>
            <p className="text-center font-['Product Sans'] text-[14px] text-[#585858] leading-[20px] mb-4">
              Provide exceptional service and support.
            </p>
            <button
              onClick={() =>
                (window.location.href = "/customer-service-login")
              }
              className="w-full max-w-[200px] h-[50px] bg-[#C61531] rounded-md text-white font-['Product Sans'] font-bold text-[16px]"
            >
              Go to Customer Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
