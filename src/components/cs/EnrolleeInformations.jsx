import { Link } from "react-router-dom";
import backIcon from "../../assets/csImages/eva_arrow-back-outline.svg";
import avatar from "../../assets/csImages/Rectangle 896.svg";
import svg from "../../assets/csImages/Ellipse 75.svg"
import React, { useState, useEffect } from "react";

function EnrolleeInformations() {
  const [enrolleeData, setEnrolleeData] = useState(null);
  const [loading, setLoading] = useState(true);

  const dummyData = {
    name: "John Doe",
    dateOfBirth: "1990-05-15",
    enrolleeId: "LH221121/0",
    contactNumber: "+234 806 932 3233",
    group: "Ledway",
    emailAddress: "tundebakare@gmail.com",
    scheme: "NGPRO",
    primaryProvider: "Crystal",
    age: "62",
    memberType: " Age 0 - 60",
    policyDate: "02/10/2021-02/10/2024.",
    amountSpent: "#102,000",
  };

  // Simulate fetching data with a delay
  useEffect(() => {
    const fetchEnrolleeData = () => {
      setTimeout(() => {
        setEnrolleeData(dummyData);
        setLoading(false);
      }, 1000);
    };

    fetchEnrolleeData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-90 p-1 bg-lightblue -mt-2 mr-4">
      <h3 className="font-bold text-lg font-sans ml-3 mt-3 mb-3">
        Lagoon is requesting approval for Enrollee LH221121/0
      </h3>
      <div className="flex justify-end">
        <Link to="/#">
          <button>
            <img src={backIcon} alt="Icon" className="w-6 h-6" />
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
      </div >

      <div className="flex bg-white shadow-md ml-5 mb-3 w-[1168px] h-[155px]"> 

      <div className="bg-white mt-3 ml-5 mr-10">
        <div>
        <img
          src={avatar}
          alt="Avatar"
          className=""
        />

        </div>
        
        <div className="flex bg-white item-center justify-center ">
          <div>
          <img src={svg} alt="Icon" className="w-3 h-6 mr-2" />
          </div>
          <h2 className="">Active</h2>
        </div>
      </div>

    
      <div className=" flex gap-4 w-[1168px] mx-auto mt-4 ml-auto">
        <div className="">
          <div className="flex flex-col">
            <span className="text-xs">Name</span>
            <span>{enrolleeData.name}</span>
          </div>
          <div className="flex flex-col mt-5 ">
            <span className="text-xs">Date of Birth</span>
            <span>{enrolleeData.dateOfBirth}</span>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col ml-10">
            <span className="text-xs">Enrolle Id</span>
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
  );
}

export default EnrolleeInformations;
