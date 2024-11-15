import { Link, useNavigate } from "react-router-dom";
import backIcon from "../../assets/csImages/eva_arrow-back-outline.svg";
import avatar from "../../assets/csImages/Rectangle 896.svg";
import svg from "../../assets/csImages/Ellipse 75.svg";
import dropdown from "../../assets/csImages/Group 2398.svg";
import { useState, useEffect } from "react";
import search from "../../assets/csImages/Search.svg";
import plusiconred from "../../assets/csImages/Group 2356.svg";

const EnrollePaCode = () => {
  const [enrolleeData, setEnrolleeData] = useState(null);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [dropdownStates, setDropdownStates] = useState({
    visitType: false,
    benefits: false,
  });
  const [selectedItems, setSelectedItems] = useState({
    visitType: "",
    benefits: "",
  });
  const dropdownItemsVisitType = [
    "Visit Type 1",
    "Visit Type 2",
    "Visit Type 3",
  ];
  const dropdownItemsBenefits = ["Benefit 1", "Benefit 2", "Benefit 3"];

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

  const toggleDropdown = (dropdownKey) => {
    setDropdownStates((prev) => ({
      ...prev,
      [dropdownKey]: !prev[dropdownKey],
    }));
  };

  const selectDropdownItem = (dropdownKey, item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [dropdownKey]: item,
    }));
    setDropdownStates((prev) => ({
      ...prev,
      [dropdownKey]: false,
    }));
  };

  if (!enrolleeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-lightblue">
      <div className="w-90 p-1 bg-lightblue mr-4">
        <h3 className="font-bold text-[23px] font-sans ml-6 mt-3 mb-3">
          Generate PA Code
        </h3>
        <div className="flex justify-end items-center space-x-2">
          <Link to="/generatePaCode">
            <button className="flex items-center">
              <img src={backIcon} alt="Back Icon" className="w-6 h-6" />
            </button>
          </Link>

          <h4 className="text-[#C61531] font-normal text-[16px] leading-[24px] text-left">
            Back to Enrollee Search
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
            <div>
              <div className="flex flex-col">
                <span className="text-xs">Name</span>
                <span>{enrolleeData.name}</span>
              </div>
              <div className="flex flex-col mt-5">
                <span className="text-xs">Date of Birth</span>
                <span>{enrolleeData.dateOfBirth}</span>
              </div>
            </div>

            <div>
              <div className="flex flex-col ml-10">
                <span className="text-xs">Enrollee Id</span>
                <span>{enrolleeData.enrolleeId}</span>
              </div>
              <div className="flex flex-col mt-5 ml-10">
                <span className="text-xs">Phone Number</span>
                <span>{enrolleeData.contactNumber}</span>
              </div>
            </div>

            <div>
              <div className="flex flex-col ml-10">
                <span className="text-xs">Group</span>
                <span>{enrolleeData.group}</span>
              </div>
              <div className="flex flex-col mt-5 ml-10">
                <span className="text-xs">Email Address</span>
                <span>{enrolleeData.emailAddress}</span>
              </div>
            </div>

            <div>
              <div className="flex flex-col ml-10">
                <span className="text-xs">Scheme</span>
                <span>{enrolleeData.scheme}</span>
              </div>
              <div className="flex flex-col mt-5 ml-10">
                <span className="text-xs">Primary Provider</span>
                <span>{enrolleeData.primaryProvider}</span>
              </div>
            </div>

            <div>
              <div className="flex flex-col ml-10">
                <span className="text-xs">Age</span>
                <span>{enrolleeData.age}</span>
              </div>
              <div className="flex flex-col mt-5 ml-10">
                <span className="text-xs">Member Type</span>
                <span>{enrolleeData.memberType}</span>
              </div>
            </div>

            <div>
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

      <div className="ml-6 bg-white p-6 shadow-md rounded-lg w-[1168px]">
        <h2 className="ml-6 text-[22px] text-red-700 font-bold mb-6">
          Procedure Information
        </h2>

        {/* First Row of Input Divs */}
        <div className="flex ml-6 space-x-4">
          <div className="relative w-[320px]">
            <label className="block mb-2 text-gray-700 font-medium">
              Visit Type
            </label>
            <div className="relative w-full h-[44px] border border-black rounded-lg">
              <button
                onClick={() => toggleDropdown("visitType")}
                className="flex items-center justify-between w-full h-full px-3 text-gray-600 bg-white rounded-lg"
              >
                <span>{selectedItems.visitType || "- Select -"}</span>
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className={`w-4 h-4 ${
                    dropdownStates.visitType ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownStates.visitType && (
                <ul className="absolute left-0 w-full bg-white border border-black rounded-lg shadow-md mt-1 z-10">
                  {dropdownItemsVisitType.map((item, index) => (
                    <li
                      key={index}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => selectDropdownItem("visitType", item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Date Picker */}
          <div className="relative w-[320px]">
            <label className="block mb-2 text-gray-700 font-medium">
              Encounter Start Date
            </label>
            <div className="relative w-full h-[44px] border border-black rounded-lg">
              <input
                type="date"
                className="w-full h-full px-3 py-2 text-gray-600 bg-white rounded-lg placeholder-gray-400"
              />
            </div>
          </div>

          {/* Benefits Dropdown */}
          <div className="relative w-[320px]">
            <label className="block mb-2 text-gray-700 font-medium">
              Benefits
            </label>
            <div className="relative w-full h-[44px] border border-black rounded-lg">
              <button
                onClick={() => toggleDropdown("benefits")}
                className="flex items-center justify-between w-full h-full px-3 text-gray-600 bg-white rounded-lg"
              >
                <span>{selectedItems.benefits || "- Select -"}</span>
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className={`w-4 h-4 ${
                    dropdownStates.benefits ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownStates.benefits && (
                <ul className="absolute left-0 w-full bg-white border border-black rounded-lg shadow-md mt-1 z-10">
                  {dropdownItemsBenefits.map((item, index) => (
                    <li
                      key={index}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => selectDropdownItem("benefits", item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        {/* Second Row of Input Divs */}
        <div className="flex ml-6 space-x-4 mt-4">
          {/* Requesting Provider Dropdown */}
          <div className="relative w-[320px]">
            <label className="block mb-2 text-gray-700 font-medium">
              Requesting Provider
            </label>
            <div className="relative w-full h-[44px] border border-black rounded-lg">
              <button
                onClick={() => toggleDropdown("firstDropdown")}
                className="flex items-center justify-between w-full h-full px-3 text-gray-600 bg-white rounded-lg"
              >
                <span>
                  {selectedItems.firstDropdown || "- Select Another -"}
                </span>
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className={`w-4 h-4 ${
                    dropdownStates.firstDropdown ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownStates.firstDropdown && (
                <ul className="absolute left-0 w-full bg-white border border-black rounded-lg shadow-md mt-1 z-10">
                  {["Option 1", "Option 2", "Option 3"].map((item, index) => (
                    <li
                      key={index}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => selectDropdownItem("firstDropdown", item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Provider Email Input */}
          <div className="relative w-[320px]">
            <label className="block mb-2 text-gray-700 font-medium">
              Provider Email
            </label>
            <div className="relative w-full h-[44px] border border-black rounded-lg">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full h-full px-3 py-2 text-gray-600 bg-white rounded-lg placeholder-gray-400"
              />
            </div>
          </div>

          <div className="relative w-[320px]">
            <label className="block mb-2 text-gray-700 font-medium">
              Referral Provider
            </label>
            <div className="relative w-full h-[44px] border border-black rounded-lg">
              <button
                onClick={() => toggleDropdown("secondDropdown")}
                className="flex items-center justify-between w-full h-full px-3 text-gray-600 bg-white rounded-lg"
              >
                <span>
                  {selectedItems.secondDropdown || "- Select Another -"}
                </span>
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className={`w-4 h-4 ${
                    dropdownStates.secondDropdown ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownStates.secondDropdown && (
                <ul className="absolute left-0 w-full bg-white border border-black rounded-lg shadow-md mt-1 z-10">
                  {["Option 1", "Option 2", "Option 3"].map((item, index) => (
                    <li
                      key={index}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => selectDropdownItem("secondDropdown", item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="ml-6 mt-6 mb-6">
          <h3 className="text-[23px] text-red-700 mt-6 font-bold">Services</h3>

          <h3 className="text-gray-700 flex items-center">
            Diagnosis
            <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
          </h3>

          <div className="flex space-x-4 mt-4">
            <div className="flex flex-col mr-10">
              <label htmlFor="diagnosis-code" className="font-semibold">
                Diagnosis Code
              </label>
              <div className="relative w-[240px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                <img
                  src={search}
                  alt="Search Icon"
                  className="h-6 w-6 absolute left-2"
                />
                <input
                  type="text"
                  id="diagnosis-code"
                  placeholder="Enter diag code"
                  className="w-full h-full outline-none border-none pl-10"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="diagnostic-description" className="font-semibold">
                Diagnostic Description
              </label>
              <div className="w-[765px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                <input
                  type="text"
                  id="diagnostic-description"
                  placeholder="Enter description"
                  className="w-full h-full outline-none border-none px-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex ml-6 justify-end">
          {" "}
          <img src={plusiconred} alt="" className="mr-2" /> Add Another Dianosis
        </div>

        <div className="ml-6 mt-6 mb-6">
          <h3 className="text-[23px] text-red-700 mt-6 font-bold">Services</h3>

          <h3 className="text-gray-700 flex items-center">
            Procedure
            <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
          </h3>

          <div className="flex space-x-4 mt-4">
            <div className="flex flex-col mr-10">
              <label htmlFor="diagnosis-code" className="font-semibold">
                Diagnosis Code
              </label>
              <div className="relative w-[240px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                <img
                  src={search}
                  alt="Search Icon"
                  className="h-6 w-6 absolute left-2"
                />
                <input
                  type="text"
                  id="diagnosis-code"
                  placeholder="Enter diag code"
                  className="w-full h-full outline-none border-none pl-10"
                />
              </div>
            </div>
            <div className="flex flex-col mr-10">
              <label htmlFor="diagnosis-code" className="font-semibold">
                Price
              </label>
              <div className="relative w-[240px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                <input
                  type="text"
                  id="diagnosis-code"
                  placeholder="Enter Price"
                  className="w-full h-full outline-none border-none pl-10"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="diagnostic-description" className="font-semibold">
                Procedure Description
              </label>
              <div className="w-[502px] h-[44px] border-2 border-black rounded-md flex items-center px-2">
                <input
                  type="text"
                  id="diagnostic-description"
                  placeholder="Enter description"
                  className="w-full h-full outline-none border-none px-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex ml-6 justify-end">
          {" "}
          <img src={plusiconred} alt="" className="mr-2" /> Add Another Dianosis
        </div>

        <div className="ml-6">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="escalation-checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="h-4 w-4"
            />
            <div>Escalation</div>
          </div>

          {isChecked && (
            <div className="flex flex-col mt-4">
              <label htmlFor="diagnostic-description" className="font-semibold">
                Exclusion Reason
              </label>
              <div className="w-[1060px] h-[44px] border-2 border-black rounded-md flex items-center px-2 mt-2">
                <input
                  type="text"
                  id="diagnostic-description"
                  placeholder="Enter Exclusion Reason"
                  className="w-full h-full outline-none border-none px-2"
                />
              </div>
            </div>
          )}
        </div>

        <div className="ml-6 mt-10">
          <h3 className="text-gray-700 flex items-center">
            Notes
            <hr className="flex-grow border-t-2 border-gray-700 mx-4" />
          </h3>
          <div className="flex flex-col mt-4">
            <div className="w-[1060px] h-[167px] border-2 border-black rounded-md mt-2">
              <textarea
                id="diagnostic-description"
                placeholder="Enter Text"
                className="w-full h-full outline-none border-none px-2 pt-4 resize-none"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <div>
            <button
              className="w-[131.78px] h-[37.65px] text-center text-red-700 border border-red-700 rounded-md"
              onClick={() => navigate("/enrolleInformations")}
            >
              Back
            </button>
          </div>
          <div>
            <button
              className="w-[131.78px] h-[37.65px] text-center text-white bg-red-700 rounded-md"
              onClick={() => navigate("/secondGenerate")}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollePaCode;
