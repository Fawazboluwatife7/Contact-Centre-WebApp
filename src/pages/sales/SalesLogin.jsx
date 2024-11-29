import { Link } from "react-router-dom";
import Logo from "../../assets/SalesModuleImages/Leadway Health Logo.svg"
import Background from "../../assets/SalesModuleImages/Background.svg"
import Help from "../../assets/SalesModuleImages/Help.svg"
import salesIcon from "../../assets/SalesModuleImages/SalesIcon.svg"

const SalesLogin = () => {

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
      <label className="font-['Mulish'] text-[16px] text-black">Username</label>
        <input type="text" placeholder="Enter your username" 
               className="mt-1 w-full text-[16px] text-[#AFB0B1] border-none focus:outline-none"/>
        <svg className="absolute w-[18px] h-[20px] right-6 top-10" fill="none" viewBox="0 0 20 20">
          <path fillRule="evenodd" clipRule="evenodd" 
                d="M10 10c-2.216 0-4.018-1.794-4.018-4S7.784 2 10 2s4.019 1.794 4.019 4-1.802 4-4.02 4m3.777.673a5.98 5.98 0 0 0 2.182-5.603c-.397-2.623-2.59-4.722-5.236-5.028C7.07-.381 3.973 2.449 3.973 6c0 1.89.88 3.574 2.252 4.673C2.853 11.934.39 14.895.005 18.891A1.013 1.013 0 0 0 1.009 20a.99.99 0 0 0 .993-.891C2.405 14.646 5.838 12 10 12s7.596 2.646 7.999 7.109a.99.99 0 0 0 .993.891c.596 0 1.06-.518 1.003-1.109-.385-3.996-2.847-6.957-6.22-8.218" fill="#7A7C87"/>
        </svg>
      </div>

      {/* Password Input */}
      <div className="absolute top-[565px] left-24 w-[474px] h-[100px] bg-white shadow-lg rounded-md p-5">
        <label className="font-['Mulish'] text-[16px] text-black">Password</label>
        <input type="password" placeholder="Enter your password" 
               className="mt-1 w-full text-[16px] text-[#AFB0B1] border-none focus:outline-none"/>
        <svg className="absolute w-[18px] h-[20px] right-6 top-10" fill="none" viewBox="0 0 18 20">
          <path d="M13.077 8.462H4.615a.77.77 0 0 1-.769-.77V5c0-2.757 2.243-5 5-5s5 2.243 5 5v2.692a.77.77 0 0 1-.769.77M5.385 6.923h6.923V5a3.466 3.466 0 0 0-3.462-3.462A3.466 3.466 0 0 0 5.385 5z" fill="#7A7C87"/>
          <path d="M15.385 20H2.308A2.31 2.31 0 0 1 0 17.692V9.231a2.31 2.31 0 0 1 2.308-2.308h13.077a2.31 2.31 0 0 1 2.307 2.308v8.461A2.31 2.31 0 0 1 15.385 20M2.308 8.462a.77.77 0 0 0-.77.769v8.461a.77.77 0 0 0 .77.77h13.077a.77.77 0 0 0 .769-.77V9.231a.77.77 0 0 0-.77-.77z" fill="#7A7C87"/>
        </svg>
        <span className="absolute right-6 top-6 font-['Mulish'] font-bold text-[10px] text-[#C61531] cursor-pointer">SHOW</span>
      </div>

      {/* Keep Me Logged In & Reset Password */}
      <div className="fixed top-[696px] left-24 flex items-center gap-64">
      <div className="flex items-center space-x-2">
          <input type="checkbox" className="w-[13px] h-[14px] bg-[#C61531] rounded-[2px]"/>
          <label className="text-[#7F8B94] font-['Product Sans'] text-[12px]">Keep me logged in</label>
        </div>
        <a href="#" className="text-[#7F8B94] font-['Product Sans'] text-[12px]">Reset Password</a>
      </div>

      {/* Log In Button */}
      <Link to='/SalesDashboard'>
        <button className="absolute top-[753px] left-24 w-[474px] h-[71px] bg-[#C61531] shadow-md rounded-md text-white text-[24px] font-bold"
      
        >
          Log In
        </button>
      </Link>

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
