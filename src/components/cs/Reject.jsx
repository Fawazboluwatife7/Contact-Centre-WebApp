import { useNavigate } from "react-router-dom";
import avatar from "../../assets/csImages/Rectangle 896.svg";
import svg from "../../assets/csImages/Ellipse 75.svg";
import dropdown from "../../assets/csImages/Group 2398.svg";
import { React, useState, useEffect } from "react";

const Reject = () => {
  const [enrolleeData, setEnrolleeData] = useState(null);
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleRejectClick = () => {
    setShowPopup(true);
  };

  const handleSendEmail = () => {
    setShowPopup(false);
    setEmailSent(true);
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

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
          Reject PA Request
        </h3>

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
        <h2 className="ml-6 text-[22px] text-[#353535] font-bold mb-6">
          Reject This Request
        </h2>

        <div
          className="flex items-center gap-4 mb-6 cursor-pointer"
          onClick={toggleExpand}
        >
          <input
            type="checkbox"
            className="rounded-full h-5 w-5 border-gray-300"
          />
          <div className="flex-1">
            <h4 className="text-lg font-semibold">Diagnosis 1</h4>
          </div>

          <h6 className="text-gray-600">Hypertensive Retinopathy</h6>
          <img
            src={dropdown}
            alt="Expand/Collapse"
            className={`w-5 h-5 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {isExpanded && (
          <div className="pl-10 mb-4 space-y-4">
            <h5 className="text-lg font-bold ml-6">
              Diagnosis
              ___________________________________________________________________________________________________________________________________
            </h5>
            <div className="flex">
              <div className="flex flex-col gap-2">
                <label className="text-gray-1200 text-sm">Diagnosis Code</label>
                <input
                  type="text"
                  placeholder="127876783"
                  className="p-2 border rounded-md text-gray-600 w-[370.14px] h-[43.31px]"
                />
              </div>
              <div className="flex flex-col gap-2 ml-10">
                <label className="text-gray-1200 text-sm">
                  Diagnosis Description
                </label>
                <input
                  type="text"
                  placeholder="Customer is suffering from artry blockage"
                  className="p-2 border rounded-md text-gray-600 w-[370.14px] h-[43.31px]"
                />
              </div>
            </div>

            <h5 className="text-lg font-bold">
              Procedures
              ___________________________________________________________________________________________________________________________________
            </h5>
            <div className="flex">
              <div className="flex flex-col gap-2">
                <label className="text-gray-1200 text-sm">Procedure Code</label>
                <input
                  type="text"
                  placeholder="127876783"
                  className="p-2 border rounded-md text-gray-600 w-[210.39px] h-[43.31px]"
                />
              </div>

              <div className="flex flex-col gap-2 ml-10">
                <label className="text-gray-1200 text-sm">Units</label>
                <input
                  type="text"
                  placeholder="1"
                  className="  p-2 border rounded-md text-gray-600 w-[210.39px] h-[43.31px]"
                />
              </div>

              <div className="flex flex-col gap-2 ml-10">
                <label className="text-gray-1200 text-sm">
                  Procedure Description
                </label>
                <input
                  type="text"
                  placeholder="A Chest X-ray to scan for other abnormal activities"
                  className="p-2 border rounded-md text-gray-600 w-[370.14px] h-[43.31px]"
                />
              </div>
            </div>

            <h3 className="text-red-700">Remove</h3>
          </div>
        )}

        <div className="mb-8 mt-4 ml-6">
          <h3 className="text-xl font-bold">Select Reason for Rejection</h3>
          <div className="mt-4 text-bold mb-3">
            <div className="mb-3">
              <label>
                <input
                  type="radio"
                  name="rejectionReason"
                  value="reason1"
                  className="mr-2"
                />
                Reason 1
              </label>
            </div>
            <div className="mb-3">
              <label>
                <input
                  type="radio"
                  name="rejectionReason"
                  value="reason2"
                  className="mr-2"
                />
                Reason 2
              </label>
            </div>
            <div className="mb-3">
              <label>
                <input
                  type="radio"
                  name="rejectionReason"
                  value="reason3"
                  className="mr-2"
                />
                Reason 3
              </label>
            </div>
            <div className="mb-3">
              <label>
                <input
                  type="radio"
                  name="rejectionReason"
                  value="reason4"
                  className="mr-2"
                />
                Reason 4
              </label>
            </div>
            <div className="mb-3">
              <label>
                <input
                  type="radio"
                  name="rejectionReason"
                  value="reason5"
                  className="mr-2 "
                />
                Reason 5
              </label>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold ml-6">Add Note</h3>
          <textarea
            className="w-full mt-4 p-2 border rounded ml-6"
            rows="4"
            placeholder="Enter additional details here..."
          ></textarea>
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
            {/* Reject Button */}
            <div>
              <button
                className="w-[131.78px] h-[37.65px] text-center text-white bg-red-700 rounded-md"
                onClick={handleRejectClick}
              >
                Reject
              </button>
            </div>

            {/* Popup for Send Mail */}
            {showPopup && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-[400px] relative">
                  {/* Close Button */}
                  <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={() => setShowPopup(false)}
                  >
                    ✖
                  </button>
                  {/* Popup Content */}
                  <h3 className="text-xl font-bold mb-4">Send Mail</h3>
                  {/* Email Address Box */}
                  <div className="mb-4">
                    <label className="block font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full border rounded-md p-2"
                    />
                  </div>
                  {/* Comment Box */}
                  <div className="mb-4">
                    <label className="block font-semibold mb-1">Comment</label>
                    <textarea
                      placeholder="PA Code for Tunde Bakare with User ID 008765725 is LH77635784"
                      className="w-full border rounded-md p-2"
                      rows="4"
                    ></textarea>
                  </div>
                  {/* Send Email Button */}
                  <button
                    className="w-full bg-red-700 text-white py-2 rounded-md"
                    onClick={handleSendEmail}
                  >
                    Send Email
                  </button>
                </div>
              </div>
            )}

            {/* Email Sent Confirmation Popup */}
            {emailSent && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-4 w-[300px] text-center relative">
                  {/* Close Button */}
                  <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={() => setEmailSent(false)}
                  >
                    ✖
                  </button>
                  <h3 className="text-lg font-bold mb-4">
                    Email Sent Successfully
                  </h3>
                  <button
                    className="w-full bg-red-700 text-white py-2 rounded-md"
                    onClick={() => setEmailSent(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reject;
