import { useState } from "react";

const cSNavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative w-[800px] h-[56px] bg-white shadow rounded-lg p-2 flex items-center justify-between">
      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 w-[300px]">
        <span className="material-icons text-gray-500"></span>
        <input
          type="text"
          placeholder="Search Here..."
          className="bg-transparent border-none outline-none w-full text-sm text-gray-600"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Avatar with Notification */}
        <div className="relative flex items-center gap-2">
          <img
            src="../../assets/images/Avatars.svg"
            alt="avatar"
            className="w-6 h-6 rounded-full border-2 border-white"
          />
          <div className="absolute top-0 right-0 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
            4
          </div>
        </div>

        {/* Customer Service */}
        <div className="flex items-center gap-2 bg-red-100 text-red-600 text-xs rounded-full px-2 py-1">
          <span className="w-2 h-2 bg-red-600 rounded-full" />
          Customer Service
        </div>

        {/* Human Avatar with Dropdown */}
        <div className="relative">
          <img
            src="../../assets/Avatar.svg" // Replace with your human avatar image path
            alt="human avatar"
            className="w-8 h-8 rounded-full border-2 border-white cursor-pointer"
            onClick={toggleDropdown} // Toggles dropdown on click
          />

          {/* Dropdown Icon as an image */}
          <img
            src="../../assets/button-icon.svg"
            className="cursor-pointer ml-2"
            onClick={toggleDropdown}
          />

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 p-2">
              <ul>
                <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default cSNavBar;
