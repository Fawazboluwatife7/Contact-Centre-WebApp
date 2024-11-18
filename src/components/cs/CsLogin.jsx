import { useState } from "react";
import { Link } from "react-router-dom";
import csloginimg from "../../assets/CSIMAGES/csloginimg.jpeg";
import { useNavigate } from "react-router-dom";

const CsLogin = () => {
  const [passwordType, setPasswortType] = useState("password");

  const navigate = useNavigate(); // Initialize the navigate function

  const handleCsLogin = () => {
    navigate("/CsDashboard");
  };
  return (
    <div className="flex bg-[#F0F2FA] w-full h-full">
      <div className=" pt-[3rem] pl-[5rem] w-[45%]">
        <img src="/LeadwayLogo.svg" alt="" />
        <div>
          <h1 className="text-[#585858] mt-[5rem] font-bold text-[32px]">
            Experience Portal
          </h1>
          <p className=" text-[#AFB0B1] text-[15px]">
            Welcome. Login to your portal account.
          </p>
        </div>
        <div className=" w-[80%] mt-8">
          <div
            className=" bg-white p-[10px] px-7 py-5 flex justify-between items-center  w-full rounded-[4px]"
            style={{ boxShadow: "#0000000F" }}
          >
            <div>
              <label className="block">Username</label>
              <input
                type="text"
                placeholder="Dr. Jay Jay"
                className=" outline-none w-full mt-[10px]"
              />
            </div>
            <img src="/Loginicons@3x.svg" alt="" />
          </div>
        </div>

        <div className=" w-[80%] mt-7">
          <div
            className=" bg-white p-[10px] px-7 py-5 flex justify-between items-center w-full rounded-[4px]"
            style={{ boxShadow: "#0000000F" }}
          >
            <div>
              <label className="block">Password</label>
              <input
                type={passwordType}
                placeholder="********************"
                className=" outline-none w-full mt-[10px]"
              />
            </div>
            <div className="text-center flex flex-col items-center">
              {passwordType === "password" ? (
                <p
                  className=" mb-3  text-[#C61531] cursor-pointer"
                  onClick={() => setPasswortType("text")}
                >
                  SHOW
                </p>
              ) : (
                <p
                  className=" mb-3  text-[#C61531] cursor-pointer"
                  onClick={() => setPasswortType("password")}
                >
                  HIDE
                </p>
              )}

              <img src="HidePassword.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 w-[80%] ">
          <div className="flex gap-1">
            <input
              type="checkbox"
              name=""
              id=""
              className="accent-[#C61531] w-4 h-4"
            />
            <p>Keep me logged in</p>
          </div>
          <Link> Reset Password</Link>
        </div>
        <button
          onClick={() => handleCsLogin("/CsDashboard")}
          className="w-[80%] bg-[#C61531] mt-8 py-4 rounded-[5px] text-white"
        >
          Login
        </button>
      </div>
      <div className=" w-[55%] relative ">
        <img src={csloginimg} alt="" className="h-full w-full" />

        <div className=" cursor-pointer absolute top-[40px] right-[60px] flex gap-3">
          <img src="questionMark.svg" alt="" />
          <p>Help</p>
        </div>

        <div className="flex rounded-lg absolute bottom-[30px] justify-center w-full ">
          <div className="bg-[#F3F5F6] rounded-l-lg items-center justify-items-center py-2">
            <img src="/redMenuIcon.svg" alt="" className="w-[80%]" />
          </div>
          <div className="bg-white w-[45%] rounded-r-lg py-2 ">
            <p className="font-500 cursor-pointer ml-2">Case Management</p>
            <p className="font-500 cursor-pointer mt-2 ml-2">
              Follow up on enrollees care
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CsLogin;
