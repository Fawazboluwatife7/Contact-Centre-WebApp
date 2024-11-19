import { useNavigate } from "react-router-dom";
import Copy from "../../assets/csImages/copyIcon.svg";
import { useState } from "react";

const SuccessGeneratePA = () => {
  const navigate = useNavigate();
  const [paCode] = useState("LH12332343433");
  const [copyMessage, setCopyMessage] = useState("");

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(paCode).then(() => {
      setCopyMessage("PA code successfully copied!");
      setTimeout(() => setCopyMessage(""), 3000);
    });
  };

  return (
    <div className="bg-lightblue p-6 min-h-screen flex flex-col ml-5">
      <h3 className="ml-6 text-xl text-bold font-semibold text-gray-800">
        PA Code Generated Successfully
      </h3>

      <div className="bg-white w-[1179px] h-[761px] p-8 mt-4 rounded-lg shadow-md flex flex-col justify-between">
        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center flex-grow">
          <div className="bg-white w-[539.34px] h-[306.47px] p-6 rounded-md shadow-lg flex flex-col items-center justify-center">
            <h4 className="text-lg text-bold font-semibold text-gray-800 mb-2">
              You have Successully Generate PA Code
            </h4>
            <h4 className="text-red-700 text-2xl font-bold mb-4">{paCode}</h4>

            <button
              onClick={copyCodeToClipboard}
              className="flex items-center justify-center gap-2 text-white bg-red-700 w-[146.87px] h-[43.97px] rounded-md hover:bg-red-800 transition duration-300"
            >
              Copy Code
              <img src={Copy} alt="Copy Icon" className="w-4 h-4" />
            </button>

            {copyMessage && (
              <div className="mt-4 text-red-700 font-semibold">
                {copyMessage}
              </div>
            )}
          </div>
        </div>

        {/* Buttons at the Bottom */}
        <div className="flex justify-between mt-8 pb-8 w-full">
          <button
            onClick={() => navigate("/CsDashboard")}
            className="text-red-700 border border-red-700 px-4 py-2 rounded-md hover:text-red-800 transition duration-300"
          >
            Back to Home
          </button>

          <button
            onClick={() => navigate("/generatePaCode")}
            className="text-white bg-red-700 px-6 py-2 rounded-md hover:bg-red-800 transition duration-300"
          >
            Generate New PA
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessGeneratePA;
