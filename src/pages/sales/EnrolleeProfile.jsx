const EnrolleeProfile = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <div className="relative mr-auto mb-5 text-black font-bold text-3xl">
        Enrollee Profile
      </div>
      <div className="ml-[88%] flex items-center space-x-2 cursor-pointer">
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
          <a
            href="#"
            className="text-[#C61531] text-[19px] font-[Product Sans] font-bold hover:underline"
          >
            Create Activity
          </a>
        </div>

      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex">
          {/* Image Section */}
          <div className="flex flex-col items-center w-1/4 border-r-2">
            <img
              src="path/to/building-image.png"
              alt="Building"
              className="w-32 h-32 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              Leadway Assurance
            </h2>
          </div>

          {/* Details Section */}
          <div className="pl-6 w-3/4">
            {/* First Row */}
            <div className="grid grid-cols-4 gap-4 pb-4 border-b">
              <Detail label="Name" value="Leadway Assurance" />
              <Detail label="Staff ID" value="Broker Name" />
              <Detail label="Date Of Birth" value="28/10/2022" />
              <Detail label="Plan Type" value="Magnum" />
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-4 gap-4 pt-4 pb-4 border-b">
              <Detail label="Phone Number" value="01 700 2002" />
              <Detail label="Enrollee ID" value="1527653/0" />
              <Detail label="Dependent" value="12" className="col-span-2" />
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
          <ActionButton text="Send E-Card" />
          <ActionButton text="See Plan" />
          <ActionButton text="Add Dependents" />
        </div>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 shadow-md transition">
          Remove Enrollee
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Dependents */}
        <DependentsSection />

        {/* Right Section: Enrollee Satisfaction */}
        <SatisfactionChart />
      </div>
    </div>
  );
};

const Detail = ({ label, value, className }) => (
  <div className={className}>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-semibold text-gray-800">{value}</p>
  </div>
);

const ActionButton = ({ text }) => (
  <button className="bg-red-100 border border-red-600 text-red-600 px-10 py-2 rounded-md font-semibold hover:bg-red-700 hover:text-white transition">
    {text}
  </button>
);

const DependentsSection = () => (
  <div className="p-3 border bg-white">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold text-gray-800">Dependents</h2>
      <button className="text-gray-500 text-sm hover:text-gray-700">
        View All
      </button>
    </div>
    <table className="w-full rounded-lg">
      <thead className="bg-white">
        <tr>
          <th className="text-left text-sm font-medium text-gray-500 p-4">
            Name
          </th>
          <th className="text-left text-sm font-medium text-gray-500 p-4">
            Relationship
          </th>
          <th className="text-left text-sm font-medium text-gray-500 p-4">
            Date Added
          </th>
        </tr>
      </thead>
      <tbody className="divide-gray-200">
        <DependentRow />
        <DependentRow />
        <DependentRow />
      </tbody>
    </table>
  </div>
);

const DependentRow = () => (
  <tr>
    <td className="p-4 flex items-center gap-3">
      <img
        src="https://via.placeholder.com/40"
        alt="Dependent"
        className="w-10 h-10 rounded-full"
      />
      <span className="text-sm font-medium text-gray-800">Aminu Ibrahim</span>
    </td>
    <td className="p-4 text-sm text-gray-600">Brother</td>
    <td className="p-4 text-sm text-gray-600">28/10/2022</td>
  </tr>
);

const SatisfactionChart = () => (
  <div className="p-3 border bg-white">
    <h2 className="text-lg font-bold text-gray-800 mb-4">Enrollee Satisfaction</h2>
    <div className="rounded-lg p-4">
      {/* Satisfaction Labels */}
      <div className="flex justify-between text-gray-500 text-sm font-medium mb-4">
        <span>Poor</span>
        <span>Good</span>
        <span className="text-red-600">Excellent</span>
      </div>
      {/* Bar Chart */}
      <div className="relative w-full h-32">
        <div className="absolute bottom-0 flex w-full justify-between gap-1">
          {[10, 20, 30, 40, 50, 60, 50, 40, 30, 20].map((height, index) => (
            <div
              key={index}
              className={`flex-1 h-[${height}%] bg-red-${200 + index * 100}`}
            ></div>
          ))}
        </div>
        {/* Range Labels */}
        <div className="absolute w-full flex justify-between text-gray-500 text-xs mt-2">
          <span>120</span>
          <span>200</span>
        </div>
        {/* Marker */}
        <div className="absolute bottom-0 left-[40%] transform -translate-x-1/2 w-4 h-4 border-2 border-red-600 bg-white rounded-full"></div>
      </div>
    </div>
  </div>
);

export default EnrolleeProfile;
