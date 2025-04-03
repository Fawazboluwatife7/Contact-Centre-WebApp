const ProposalView = () => {
  return (
    <div className="min-h-full p- ">
      {/* Header Section */}
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-bold text-gray-800 mb-10">
          Leadway Health Corporate Proposal
        </h1>
        <a href="/SalesDashboard/sending-proposals" className="flex items-center text-red-600 font-semibold">
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M15 19l-7-7 7-7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          Back To Proposal
        </a>
      </div>

      {/* Main Content */}
      <div className="md:grid-cols-3 grid grid-rows-2 gap-6">
        {/* Left Section */}
        <div className="col-span-1">
          {/* Hospital Info */}
          <div className="bg-white shadow rounded-md p-6 mb-5">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-xl font-bold text-gray-700">
                Smiths Hospital
              </h2>
              <img
                src="/PSFDH.png"
                alt="Hospital Logo"
                className="w-28 h-28 rounded-md object-cover"
              />
            </div>
          </div>

          {/* Proposal Details */}
          <div className="bg-white shadow rounded-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Generic Proposal
            </h3>
            <div className="space-y-6">
              {["Eligibility", "Optional Riders", "Plan Options", "Other Products"].map(
                (section, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-bold text-white bg-red-600 px-3 py-2 rounded-md w-fit">
                      {section}
                    </h4>
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
                      <li>Standard age limit is 65</li>
                      <li>No age restriction on children</li>
                      <li>You decide the maximum age you want to cover</li>
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-2">
          {/* Benefits Table */}
          <div className="bg-white shadow rounded-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Benefits</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 text-sm">
                    <th className="border bg-blue-600 border-gray-200 px-4 py-2 text-left text-white">
                      Benefit Sub-Categories
                    </th>
                    <th className="border text-white bg-orange-500 border-gray-200 px-4 py-2 text-center">
                      PLUS
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-center text-white bg-emerald-500">
                      PRO
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-center text-white bg-red-700">
                      MAX
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-center text-white bg-blue-900">
                      PROMAX
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-center text-white bg-green-500">
                      MAGNUM
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sample Rows */}
                  {[
                    { category: "Provider Network", value: "Category D" },
                    { category: "Territory", value: "Unlimited" },
                    { category: "Territory", value: "Unlimited" },
                    { category: "Territory", value: "Unlimited" },
                    { category: "Territory", value: "Unlimited" },
                    { category: "Territory", value: "Unlimited" },
                    {
                      category: "DAY TO DAY BENEFIT(Out-Patient)",
                      value:
                        "Treatment of conditions that do not require the patient to be admitted in the hospital",
                    },
                    { category: "Territory", value: "Unlimited" },
                    { category: "Territory", value: "Unlimited" },
                    { category: "Territory", value: "Unlimited" },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={`text-sm text-gray-700 ${
                        index % 2 === 0 ? "bg-gray-50" : ""
                      }`}
                    >
                      <td className="border border-gray-200 px-4 py-2">
                        {row.category}
                      </td>
                      {Array(5)
                        .fill(row.value)
                        .map((value, index) => (
                          <td
                            key={index}
                            className="border border-gray-200 px-4 py-2 text-center"
                          >
                            {value}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
                <thead>
                  <tr className="bg-gray-100 text-gray-600 text-sm">
                    <th className="border bg-blue-600 border-gray-200 px-4 py-2 text-left text-white">
                      Benefit Sub-Categories
                    </th>
                    <th className="border text-white bg-orange-500 border-gray-200 px-4 py-2 text-center">
                      PLUS
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-center text-white bg-emerald-500">
                      PRO
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-center text-white bg-red-700">
                      MAX
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-center text-white bg-blue-900">
                      PROMAX
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-center text-white bg-green-500">
                      MAGNUM
                    </th>
                  </tr>
                </thead>
              </table>
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6 space-x-4">
              <button className="bg-pink-100 text-red-600 border border-red-600 px-6 py-2 rounded-md text-sm font-bold hover:bg-red-700">
                Customize
              </button>
              <button className="bg-red-600 text-white px-10 py-2 rounded-md text-sm font-bold hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalView;
