import { Link } from "react-router-dom";
import SatisfactionChart from "./SatisfactionChart"; // Import the SatisfactionChart component

const ClientEnrolleeProfile = () => {
  return (
    <div className="bg-none h-100% p-4">
      <div className="relative mr-auto mb-5 text-black font-bold text-3xl">
        Enrollee Profile
      </div>

      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
        <div className="flex">
          {/* Image Section */}
          <div className="flex flex-col items-center w-1/4 border-r-2">
            <img src="/Avatar.svg" alt="Building" className="w-32 h-32 object-contain mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">Leadway Assurance</h2>
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
                <p className="text-sm text-gray-500">Staff ID</p>
                <p className="font-semibold text-gray-800">Broker Name</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date Of Birth</p>
                <p className="font-semibold text-gray-800">28/10/2022</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Plan Type</p>
                <p className="font-semibold text-gray-800">Magnum</p>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-4 gap-4 pt-4 pb-4 border-b">
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-semibold text-gray-800">01 700 2002</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Enrollee ID</p>
                <p className="font-semibold text-gray-800">1527653/0</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-500">Dependent</p>
                <p className="font-semibold text-gray-800">12</p>
              </div>
            </div>

            {/* Update Profile Button */}
            <div className="pt-4">
              <button className="bg-red-100 border border-red-600 text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 hover:text-white transition">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Row */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-4">
          <button className="bg-red-100 border border-red-600 text-red-600 px-10 py-2 rounded-md font-semibold hover:bg-red-700 hover:text-white transition">
            Send E-Card
          </button>
          <Link to='/SalesDashboard/coverage-plan'>
            <button className="bg-red-100 border border-red-600 text-red-600 px-12 py-2 rounded-md font-semibold hover:bg-red-700 hover:text-white transition">
              See Plan
            </button>
          </Link>
          <button className="bg-red-100 border border-red-600 text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-red-700 hover:text-white transition">
            Add Dependents
          </button>
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 shadow-md transition">
          Remove Enrollee
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Dependents */}
        <div className="p-3 border bg-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Dependents</h2>
            <button className="text-gray-500 text-sm hover:text-gray-700">View All</button>
          </div>
          <table className="w-full rounded-lg">
            <thead className="bg-white ">
              <tr>
                <th className="text-left text-sm font-medium text-gray-500 p-4">Name</th>
                <th className="text-left text-sm font-medium text-gray-500 p-4">Relationship</th>
                <th className="text-left text-sm font-medium text-gray-500 p-4">Date Added</th>
              </tr>
            </thead>
            <tbody className="divide-gray-200">
              {/* Row 1 */}
              <tr>
                <td className="p-4 flex items-center gap-3">
                  <img src="/Avatar.svg" alt="Dependent" className="w-10 h-10 rounded-full" />
                  <span className="text-sm font-medium text-gray-800">Aminu Ibrahim</span>
                </td>
                <td className="p-4 text-sm text-gray-600">Brother</td>
                <td className="p-4 text-sm text-gray-600">28/10/2022</td>
              </tr>
              {/* Repeat rows */}
              <tr>
                <td className="p-4 flex items-center gap-3">
                  <img src="/Avatar.svg" alt="Dependent" className="w-10 h-10 rounded-full" />
                  <span className="text-sm font-medium text-gray-800">John Doe</span>
                </td>
                <td className="p-4 text-sm text-gray-600">Brother</td>
                <td className="p-4 text-sm text-gray-600">28/10/2022</td>
              </tr>
              <tr>
                <td className="p-4 flex items-center gap-3">
                  <img src="/Avatar.svg" alt="Dependent" className="w-10 h-10 rounded-full" />
                  <span className="text-sm font-medium text-gray-800">Angelo Micheal</span>
                </td>
                <td className="p-4 text-sm text-gray-600">Brother</td>
                <td className="p-4 text-sm text-gray-600">28/10/2022</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Section: Enrollee Satisfaction */}
        <div>
          
          {/* Satisfaction Chart Component */}
          <SatisfactionChart />
        </div>
      </div>
    </div>
  );
};

export default ClientEnrolleeProfile;
