import React from "react";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between bg-white p-4 shadow-md ">
            {/* Search Bar */}
            <div className="flex items-center w-1/3">
                <div className="relative w-full">
                    <img
                        src="searchBar.svg"
                        alt="Search Icon"
                        className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5"
                    />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-full py-2 pl-10 pr-4 border rounded-md bg-[#F0F2FA] placeholder-gray-400 focus:outline-none"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
                {/* Case Management */}
                <button className="flex items-center bg-[#FDEEEE] text-[#C61531] py-1 px-4 rounded-full text-sm font-medium">
                    <span className="mr-2 h-2 w-2 bg-red-500 rounded-full"></span>
                    Case Management
                </button>

                {/* Notifications */}
                <div className="relative">
                    <img
                        src="BelIcon.svg"
                        alt=""
                        className="h-6 w-6 text-gray-600 cursor-pointer"
                    />
                    <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        4
                    </span>
                </div>

                {/* Profile Section */}
                <div className="flex items-center space-x-2 cursor-pointer">
                    <img
                        src="Avatars@3x.svg"
                        alt="Profile"
                        className="h-8 w-8 rounded-full border border-gray-200"
                    />
                    <img
                        src="downArrow.svg"
                        alt="Dropdown Icon"
                        className="h-4 w-4 text-gray-600"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
