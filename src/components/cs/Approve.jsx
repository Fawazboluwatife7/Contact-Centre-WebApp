import { Link, useNavigate } from "react-router-dom";
import backIcon from "../../assets/csImages/eva_arrow-back-outline.svg";
import avatar from "../../assets/csImages/Rectangle 896.svg";
import svg from "../../assets/csImages/Ellipse 75.svg";
import dropdown from "../../assets/csImages/Group 2398.svg";
import { useState, useEffect } from "react";

const Approve = () => {
  const [enrolleeData, setEnrolleeData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setEnrolleeData({
      name: "John Doe",
      dateOfBirth: "01/01/1990",
      enrolleeId: "LH221121/0",
      contactNumber: "123-456-7890",
      group: "A",
      emailAddress: "johndoe@example.com",
      scheme: "Basic Plan",
      primaryProvider: "Provider A",
      age: 34,
      memberType: "Individual",
      policyDate: "2022-01-01",
      amountSpent: "$200",
    });
  }, []);

  if (!enrolleeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-lightblue">
      <div className="w-90 p-1 bg-lightblue mr-4">
        <h3 className="font-bold text-lg font-sans ml-6 mt-3 mb-3">
          Approve PA Request
        </h3>
        <div className="flex justify-end">
          <Link to="/history">
            <button>
              <img src={backIcon} alt="Back Icon" className="w-6 h-6" />
            </button>
          </Link>
          <h4 className="flex items-center text-[#C61531] font-normal text-[16px] leading-[24px] w-[170px] h-[24px] px-4 py-1 text-left">
            Back to PA Request
          </h4>
        </div>

        <div className="p-1 mx-auto bg-white shadow-md space-y-4 w-[1168px] h-[47px] ml-5 mb-3">
          <h3 className="font-bold text-lg font-serif mt-1 ml-3">
            Enrollee Information
          </h3>
        </div>

        <div className="flex bg-white shadow-md ml-5 w-[1168px] h-[155px]">
          <div className="bg-white mt-3 mr-10">
            <div>
              <img src={avatar} alt="Avatar" className="ml-20 mr-10" />
            </div>

            <div className="flex bg-white items-center justify-center">
              <div>
                <img
                  src={svg}
                  alt="Status Icon"
                  className=" ml-20 w-3 h-6 mr-2"
                />
              </div>
              <h2 className="">Active</h2>
            </div>
          </div>

          <div className="flex gap-4 w-[1168px] mx-auto mt-4 ml-auto">
            <div className="">
              <div className="flex flex-col">
                <span className="text-xs">Name</span>
                <span>{enrolleeData.name}</span>
              </div>
              <div className="flex flex-col mt-5">
                <span className="text-xs">Date of Birth</span>
                <span>{enrolleeData.dateOfBirth}</span>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col ml-10">
                <span className="text-xs">Enrollee Id</span>
                <span>{enrolleeData.enrolleeId}</span>
              </div>
              <div className="flex flex-col mt-5 ml-10">
                <span className="text-xs">Phone Number</span>
                <span>{enrolleeData.contactNumber}</span>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col ml-10">
                <span className="text-xs">Group</span>
                <span>{enrolleeData.group}</span>
              </div>
              <div className="flex flex-col mt-5 ml-10">
                <span className="text-xs">Email Address</span>
                <span>{enrolleeData.emailAddress}</span>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col ml-10">
                <span className="text-xs">Scheme</span>
                <span>{enrolleeData.scheme}</span>
              </div>
              <div className="flex flex-col mt-5 ml-10">
                <span className="text-xs">Primary Provider</span>
                <span>{enrolleeData.primaryProvider}</span>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col ml-10">
                <span className="text-xs">Age</span>
                <span>{enrolleeData.age}</span>
              </div>
              <div className="flex flex-col mt-5 ml-10">
                <span className="text-xs">Member Type</span>
                <span>{enrolleeData.memberType}</span>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col ml-10">
                <span className="text-xs">Policy Date</span>
                <span>{enrolleeData.policyDate}</span>
              </div>
              <div className="flex flex-col mt-5 ml-10">
                <span className="text-xs">Amount Spent</span>
                <span>{enrolleeData.amountSpent}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-6 bg-white p-6 shadow-md rounded-lg">
      <h2 className="ml-6 text-[22px] text-[#353535] font-bold mb-6">PA Generation Preview</h2>

      {/* Diagnosis Section */}
      <div className="flex items-center gap-4 mb-6">
        <input type="checkbox" className="rounded-full h-5 w-5 border-gray-300" />
        <div>
          <h4 className="text-lg font-semibold">Diagnosis 1</h4>
          <h6 className="text-gray-600">Hypertensive Retinopathy</h6>
        </div>
        <select className="ml-auto p-2 border rounded-md text-gray-600">
          <option value="option1">Treatment Plan A</option>
          <option value="option2">Treatment Plan B</option>
          <option value="option3">Treatment Plan C</option>
        </select>
      </div>

      {/* Total Cost Section */}
      <div className="mb-8">
        <h4 className="text-red-700 font-semibold">Total Cost</h4>
        <h3 className="text-xl font-bold">₦135,000</h3>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button 
          className="w-[131.78px] h-[37.65px] text-center text-red-700 border border-red-700 rounded-md" 
          onClick={() => navigate("/enrolleInformations")} 
        >
          Back
        </button>
        <button 
          className="w-[131.78px] h-[37.65px] text-center text-white bg-red-700 rounded-md" 
          onClick={() => navigate("/")}
        >
          Confirm
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default Approve;
