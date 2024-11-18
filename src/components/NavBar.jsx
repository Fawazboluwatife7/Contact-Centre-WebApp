import React from "react";

const Navbar = () => {
    return (
        <div className="w-full h-[8%] border border-white flex items-center fixed bg-white top-0 pl-3 py-10">
            <div className="w-[60%]  ">
                <img
                    src="searchBar.svg" // Replace with the actual image path
                    alt="search icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 ml-4"
                />
                <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full py-2 border bg-[#F0F2FA] rounded-md my-3 pl-10 outline-none placeholder-gray-500"
                />
            </div>
            <div className=" w-full flex gap-3 ">
                <div className=" flex gap-1 items-center py-1 px-2  bg-[#C615311A] rounded-[50px]">
                    <div className=" p-[6px] bg-[#C61531] rounded-full"></div>
                    <p>Case Management</p>
                </div>
                <div>
                    <img src="BelIcon.svg" alt="" />
                </div>
                <div>
                    <img src="Avatars@3x.svg" alt="" />
                </div>
                <div>
                    <img src="downArrow.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
