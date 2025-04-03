import { useNavigate } from 'react-router-dom';

const ProspectUpdateModal = ({ title, onClose, onView }) => {
    const navigate = useNavigate(); // Initialize the navigate function
  // Function to handle navigation
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Container */}
      <div className="w-[30%] h-auto bg-white rounded-[5px] p-8 mx-4">
        {/* Title */}
        <div className="flex w-[90%] text-center font-semibold text-[24px] md:text-[30px] md:ml-10 leading-[30px] md:leading-[30px] text-black mb-6">
          {title || "Success! Your action was completed."}
        </div>

        {/* Success Icon */}
        <svg
          className="flex ml-4 sm:ml-36"
          width="122"
          height="122"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 122 122"
        >
          <defs>
            <path
              id="a"
              fill="#13132A"
              d="M5.971 39.673c-.187 0-.377-.035-.561-.114L.902 37.685a1.461 1.461 0 0 1 1.12-2.699l4.51 1.878c.746.31 1.1 1.163.787 1.909-.23.561-.775.9-1.348.9"
            />
            <path
              id="b"
              fill="#13132A"
              d="M61.003 103.672c23.568 0 42.674-19.109 42.674-42.677s-19.106-42.67-42.674-42.67S18.33 37.427 18.33 60.994c0 23.568 19.107 42.677 42.674 42.677"
            />
            <path
              id="c"
              fill="#00DD9D"
              d="M56.598 80.09 41.979 63.389a5.85 5.85 0 0 1 .553-8.254 5.847 5.847 0 0 1 8.253.553l5.848 6.686L74.157 42.51a5.848 5.848 0 1 1 8.771 7.739z"
            />
          </defs>
          <use href="#a" opacity=".03" />
          <use href="#b" />
          <use href="#c" />
          <path
            fill="#13132A"
            d="M85.662 121.999c-.57 0-1.117-.34-1.35-.901l-1.878-4.511a1.467 1.467 0 0 1 .79-1.912 1.47 1.47 0 0 1 1.912.789l1.877 4.511a1.47 1.47 0 0 1-.79 1.915 1.5 1.5 0 0 1-.561.109"
          />
        </svg>

        {/* Action Button */}
        <button
          className="md:w-[196px] w-[70%] h-[53px] bg-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-white md:ml-28 ml-6 mt-7"
          onClick={() => handleNavigate("/SalesDashboard/clients-profile")}

        >
          View
        </button>
      </div>
    </div>
  );
};

export default ProspectUpdateModal;
