import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SMEClientProfile = () => {
  const navigate = useNavigate();

  // State to manage active tab
  const [activeTab, setActiveTab] = useState("Proposal History");

  // Content for each tab
  const tableContent = {
    "Proposal History": [
      { name: "Customized Plan #01", type: "Retail", date: "22 Aug 2022" },
      { name: "Customized Plan #02", type: "Corporate", date: "22 Aug 2022" },
      { name: "Health Insurance Presentation", type: "Retail", date: "22 Aug 2022" },
    ],
    "Invoice History": [
      { name: "Invoice #123", type: "Corporate", date: "10 Sep 2022" },
      { name: "Invoice #124", type: "Retail", date: "15 Sep 2022" },
    ],
    "Recent Activity": [
      { name: "E-Card Sent", type: "Notification", date: "01 Oct 2022" },
      { name: "Proposal Reviewed", type: "Corporate", date: "05 Oct 2022" },
    ],
  };

  return (
    <div className="px-2 min-h-full">
      {/* Page Title */}
      <h1 className="mr-auto text-black font-bold text-3xl">
        Prospect Profile
      </h1>

      {/* Back to Profile Link */}
      <a
        href="#"
        className="flex items-center text-[#C61531] font-bold text-lg cursor-pointer gap-3 ml-[84%]"
        onClick={() => navigate("/SalesDashboard/prospects")}
      >
        <svg
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
        >
          <path
            d="M18.75 7.5003H3.925l4.5375-5.45a1.2516 1.2516 0 0 0-1.925-1.6l-6.25 7.5a1.5 1.5 0 0 0-.1125.1875c0 .0625 0 .1-.0875.1625a1.25 1.25 0 0 0-.0875.45 1.25 1.25 0 0 0 .0875.45c0 .0625 0 .1.0875.1625q.0494.098.1125.1875l6.25 7.5a1.25 1.25 0 0 0 .9625.45 1.2496 1.2496 0 0 0 1.1959-1.6208 1.25 1.25 0 0 0-.2334-.4292l-4.5375-5.45H18.75a1.25 1.25 0 1 0 0-2.5"
            fill="#C61531"
          />
        </svg>
        Back To Profile
      </a>

      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex">
          {/* Image Section */}
          <div className="flex flex-col items-center w-1/4 border-r-2">
          <img src="/Building.jpg" alt="Building" className="w-48 h-48 object-contain " />
            <h2 className="text-lg font-semibold text-gray-800">
              Leadway Assurance
            </h2>
          </div>

          {/* Details Section */}
          <div className="pl-6 w-3/4">
            {/* First Row */}
            <div className="grid grid-cols-4 gap-4 pb-4 border-b">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-semibold text-gray-800">Leadway Assurance</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Broker</p>
                <p className="font-semibold text-gray-800">Broker Name</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Policy Start Date</p>
                <p className="font-semibold text-gray-800">28/10/2022</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Business Sector</p>
                <p className="font-semibold text-gray-800">Financial</p>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-4 gap-4 pt-4 pb-4 border-b">
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-semibold text-gray-800">01 700 2002</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-semibold text-gray-800">info@leadway.com</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-semibold text-gray-800">
                  121/123 Funsho Williams Avenue, Iponri
                </p>
              </div>
            </div>

            {/* Update Profile Button */}
            <div className="pt-4">
              <button
                className="bg-pink-100 border border-red-600 text-red-600 px-4 py-2 rounded-sm font-semibold hover:bg-red-700 hover:text-white transition"
                onClick={() => navigate("/SalesDashboard/update-profile")}
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mb-6">
        <div className="flex space-x-4">
          {[
            { text: "Manage Proposal", route: "/SalesDashboard/manage-proposal" },
            { text: "Create Invoice", route: "/SalesDashboard/create-invoice" },
            { text: "See Plans", route: "/SalesDashboard/coverage-plan" },
            { text: "Send E-Card", route: "/SalesDashboard/send-ecard" },
          ].map(({ text, route }) => (
            <button
              key={text}
              className="bg-pink-100 border border-red-600 text-red-600 px-8 py-2 rounded-sm font-semibold hover:bg-red-700 hover:text-white transition"
              onClick={() => navigate(route)}
            >
              {text}
            </button>
          ))}
        </div>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-sm font-semibold hover:bg-red-700 transition"
          onClick={() => navigate("/SalesDashboard/prospect-profile-update")}
        >
          Convert to Client
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-start ">
        <div className="flex space-x-0.5 w-1/2 text-nowrap">
          {["Proposal History", "Invoice History", "Recent Activity"].map(
            (tabText) => (
              <button
                key={tabText}
                className={`px-6 py-3 rounded-t-sm font-semibold transition ${
                  activeTab === tabText
                    ? "bg-white text-red-500 underline"
                    : "bg-red-600 text-white"
                }`}
                onClick={() => setActiveTab(tabText)}
              >
                {tabText}
              </button>
            )
          )}
        </div>
      </div>

      {/* Dynamic Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody>
              {tableContent[activeTab].map(({ name, type, date }) => (
                <tr className="border-b" key={name}>
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/family_437491.png"
                        alt={name}
                        className="w-12 h-12"
                      />
                      <span>{name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">{type}</td>
                  <td className="px-4 py-2">{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SMEClientProfile;
