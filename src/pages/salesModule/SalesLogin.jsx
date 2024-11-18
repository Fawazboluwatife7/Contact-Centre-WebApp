import React from 'react';
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/SalesModuleImages/Leadway Health Logo.svg"
import Background from "../../assets/SalesModuleImages/Background.svg"
import Help from "../../assets/SalesModuleImages/Help.svg"
import salesIcon from "../../assets/SalesModuleImages/SalesIcon.svg"

const SalesLogin = () => {

  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-[#F0F2FA] bg-contain overflow-auto">
      {/* Leadway Health Logo */}
      <div className="absolute top-14 left-24">
        <img
          src={Logo}
          alt="Leadway Health Logo"
          className="w-[226px] h-[74.62px]"
        />
      </div>

      {/* Experience Portal */}
      <h1 className="absolute top-64 left-24 text-[48px] font-bold text-[#585858] leading-[58px]">
        Experience Portal
      </h1>

      {/* Welcome Text */}
      <p className="absolute top-[330px] left-24 text-[18px] font-normal text-[#AFB0B1]">
        Welcome. Login to your portal account.
      </p>

      {/* Username Input */}
      <div className="absolute top-[434px] left-24 w-[474px] h-[100px] bg-white shadow-lg rounded-md p-5">
        <label
          htmlFor="username"
          className="block text-[16px] text-black font-normal"
        >
          Username
        </label>
        <img src="/Loginicons@3x.svg" alt="" />
        <input
          id="username"
          type="text"
          placeholder="enter your username"
          className="w-full mt-2 p-2 border border-gray-300 rounded-md text-[#AFB0B1] text-[16px]"
        />
      </div>

      {/* Password Input */}
      <div className="absolute top-[565px] left-24 w-[474px] h-[100px] bg-white shadow-lg rounded-md p-5">
        <label
          htmlFor="password"
          className="block text-[16px] text-black font-normal"
        >
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type="password"
            placeholder="enter your password"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md text-[#AFB0B1] text-[16px]"
          />
          <button
            type="button"
            className="absolute top-1/2 transform -translate-y-1/2 right-3 text-[10px] font-bold text-[#C61531]"
          >
            SHOW
          </button>
          <img src="HidePassword.svg" alt="" />
        </div>
      </div>

      {/* Keep Me Logged In & Reset Password */}
      <div className="absolute top-[696px] left-24 flex items-center gap-3">
        <div className="w-[13.38px] h-[14px] bg-[#C61531] rounded-[2px]"></div>
        <p className="text-[12px] font-normal text-[#7F8B94]">
          Keep me logged in
        </p>
        <p className="ml-auto text-[12px] font-normal text-[#7F8B94]">
          Reset Password
        </p>
      </div>

      {/* Log In Button */}
      <button className="absolute top-[753px] left-24 w-[474px] h-[71px] bg-[#C61531] shadow-md rounded-md text-white text-[24px] font-bold"
      onClick={() => navigate("/dashboard")} 
      >
        Log In
      </button>

      {/* Image Section */}
      <div className="absolute top-0 right-0 w-[758px] h-auto">
        {/* Floating Sales Card */}
      <div
        className="absolute top-[39px] right-[39px] w-[74px] h-[23px] shadow-lg rounded-md flex items-center justify-center"
      >
        <img src={Help} alt="" />
      </div>
        <img
          src={Background}
          alt="Background"
          className="h-auto object-cover"
        />
        <div className="absolute bottom-0 flex w-full mr-40">
          <div className="w-[140px] h-[115px] bg-[#F3F5F6] rounded-l-md flex justify-center items-center">
            <img className='items-center' src={salesIcon} alt="" />
          </div>
          <div className="w-[462px] h-[115px] bg-white rounded-r-md p-4">
            <h2 className="text-[18px] font-bold text-[#585858]">Sales</h2>
            <p className="text-[14px] text-[#585858]">
              Manage all your clients and prospects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesLogin;
