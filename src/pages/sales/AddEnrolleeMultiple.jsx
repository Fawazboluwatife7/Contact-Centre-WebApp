
const AddEnrolleeMultiple = () => {
  return (
    <div className=" w-full mx-auto px-32 py-1">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-black">Add Enrollee</h1>
        <a
          href="#"
          className="flex items-center text-[#C61531] font-bold text-lg mt-8 gap-2"
        >
          {/* Back Arrow Icon */}
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
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-center text-lg md:text-2xl font-bold text-gray-800 mb-10">
          Select Preferred Method
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Option 1 */}
          <div className="flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="200"
              height="200"
            >
              <rect x="10" y="20" width="80" height="60" fill="#D0D7E5" rx="8" />
              <path d="M10 20l40 30 40-30v-5H10v5z" fill="#FF4B5C" />
              <path d="M10 80V50l40 30 40-30v30H10z" fill="#FFFFFF" />
              <path
                d="M50 55L10 20v-5l40 30 40-30v5L50 55z"
                fill="#B91C1C"
              />
            </svg>

            <p className="text-gray-600 mb-4">
              Send a link to your Enrollees to provide this information
            </p>
            <button className="flex bg-gray-200 text-gray-500 font-bold py-3 px-10 gap-3 rounded-md hover:text-white transition">
              <svg
                viewBox="-2.4 -2.4 28.8 28.8"
                width="24px"
                height="24px"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#fff"
                strokeWidth="0"
              >
                <rect
                  x="-2.4"
                  y="-2.4"
                  width="28.8"
                  height="28.8"
                  rx="0"
                  fill="#737d87"
                  stroke="none"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.75 5.25 3 6v12l.75.75h16.5L21 18V6l-.75-.75zM4.5 7.7v9.55h15V7.7L12 14.5zm13.81-.95H5.69L12 12.49z"
                  fill="#fff"
                  stroke="none"
                />
              </svg>
              Send A Link
            </button>
          </div>

          {/* Option 2 */}
          <div className="flex flex-col items-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="200"
              height="200"
            >
              <rect x="5" y="15" width="90" height="70" rx="8" fill="#D0D7E5" />
              <rect x="20" y="50" width="10" height="20" fill="#FF4B5C" />
              <rect x="40" y="40" width="10" height="30" fill="#B91C1C" />
              <rect x="60" y="30" width="10" height="40" fill="#FF8A65" />
              <rect x="80" y="20" width="10" height="50" fill="#FF4B5C" />
              <line
                x1="10"
                y1="70"
                x2="90"
                y2="70"
                stroke="#000"
                strokeWidth="1"
              />
            </svg>

            <p className="text-gray-600 mb-4">
              Enrol multiple employees at once using the{" "}
              <a href="#" className="text-black font-bold">
                Enrollee Onboarding Template
              </a>
              .{" "}
              <a href="#" className="text-[#C61531] font-bold">
                Download Here
              </a>
            </p>
            <button className="flex bg-gray-200 text-gray-500 font-bold py-3 px-10 gap-3 rounded-md hover:text-white transition">
              <svg
                fill="#fcfcfc"
                width="24px"
                height="24px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-51.2 -51.2 614.4 614.4"
                xmlSpace="preserve"
                stroke="#fcfcfc"
              >
                <rect
                  x="-51.2"
                  y="-51.2"
                  width="614.4"
                  height="614.4"
                  rx="0"
                  fill="#4a4e4f"
                  stroke="none"
                />
                <path
                  d="M209.5 418.9h93.1V232.7h139.6L256 0 69.8 232.7h139.6zM0 465.5V512h512v-46.5z"
                  fill="#fff"
                  stroke="none"
                />
              </svg>
              Start Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEnrolleeMultiple;
