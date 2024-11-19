import React from "react";
import Sidebar from "../../pages/caseManagement/CMSidebar";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh]">
                <Navbar />
                <div className="mx-7">
                    <div className="flex justify-between">
                        <p className="text-[#7E7E7E]">Hi, Jay Jay</p>
                        <div className="flex gap-1 items-center bg-white rounded-md px-2 py-1 mt-1">
                            <img src="CalenderIcon.svg" alt="" />
                            <p>1st July, 2024</p>
                        </div>
                    </div>
                    <h3 className="font-normal">Your Dashboard</h3>
                    <div className="flex gap-4">
                        <div className="grid grid-cols-2 gap-4 bg-[#F0F2FA] w-1/2">
                            <div className="bg-white w-full h-[6.5rem] rounded-md py-4 px-4">
                                <img src="Redbar-chart.svg" alt="" />
                                <p className="text-[#7E7E7E]">
                                    Daily Admissions
                                </p>
                                <span className="text-[1.6rem] font-bold">
                                    275
                                </span>
                            </div>
                            <div className="bg-white w-full h-[6.5rem] rounded-md py-4 px-4">
                                <img src="Bluebar-chart.svg" alt="" />
                                <p className="text-[#7E7E7E]">
                                    Currently on Admission
                                </p>
                                <span className="text-[1.6rem] font-bold">
                                    182
                                </span>
                            </div>
                            <div className="bg-white w-full h-[6.5rem] rounded-md py-4 px-4">
                                <img src="Greenicon@.svg" alt="" />
                                <p className="text-[#7E7E7E]">
                                    Total PA Issued
                                </p>
                                <span className="text-[1.6rem] font-bold">
                                    2300
                                </span>
                            </div>
                            <div className="bg-white w-full h-[6.5rem] rounded-md py-4 px-4">
                                <img src="Orangebar.svg" alt="" />
                                <p className="text-[#7E7E7E]">
                                    Total Referrals
                                </p>
                                <span className="text-[1.6rem] font-bold">
                                    42
                                </span>
                            </div>
                        </div>

                        <div className="bg-white h-auto w-1/2 rounded-md p-3">
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <h1 className="text-[#4D4D4D] text-[1.7rem] font-bold mr-2">
                                        Admissions
                                    </h1>
                                    <div className="w-[1.5rem] h-[1.5rem] ml-3 rounded-full bg-red-600 flex items-center justify-center">
                                        <p className="text-white text-sm">15</p>
                                    </div>
                                </div>
                                <div className="cursor-pointer flex items-center gap-2">
                                    <h1 className="text-[#C61531]">See all</h1>
                                    <img
                                        src="sideArrow.svg"
                                        alt="Arrow"
                                        className="h-4"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="cursor-pointer flex items-start gap-4">
                                    <img
                                        src="hospitalBed.svg"
                                        alt=""
                                        className="self-center"
                                    />
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-4 py-2">
                                            <h1 className="text-[1.3rem]">
                                                Adamu Garba
                                            </h1>
                                            <h3 className="bg-[#FFCD28] rounded-md w-[7rem] flex items-center justify-center text-center py-1 text-white">
                                                Admission
                                            </h3>
                                            <h3 className="text-[#C61531] text-sm">
                                                2 min
                                            </h3>
                                        </div>
                                        <h1 className="text-[#4D4D4D] mt-1">
                                            Better Health Hospital Lekki
                                        </h1>
                                    </div>

                                    <img
                                        src="sideArrow.svg"
                                        alt=""
                                        className="h-5 self-center ml-auto"
                                    />
                                </div>

                                <img
                                    src="Divider@3x.svg"
                                    alt=""
                                    className=" h-2"
                                />
                                <div className="cursor-pointer flex items-start gap-4">
                                    <img
                                        src="hospitalBed.svg"
                                        alt=""
                                        className="self-center"
                                    />
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-4 py-2">
                                            <h1 className="text-[1.3rem]">
                                                Adamu Garba
                                            </h1>
                                            <h3 className="bg-[#FFCD28] rounded-md w-[7rem] flex items-center justify-center text-center py-1 text-white">
                                                Admission
                                            </h3>
                                            <h3 className="text-[#C61531] text-sm">
                                                2 min
                                            </h3>
                                        </div>
                                        <h1 className="text-[#4D4D4D] mt-1">
                                            Better Health Hospital Lekki
                                        </h1>
                                    </div>

                                    <img
                                        src="sideArrow.svg"
                                        alt=""
                                        className="h-5 self-center ml-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-3 gap-4 py-1 w-full items-center">
                        <button className="bg-[#C61531] text-white w-[9rem] rounded-md py-1 px-2">
                            Search Enrollee
                        </button>
                        <button className="bg-[#C61531] text-white w-[9rem] rounded-md py-1 px-2">
                            View Admission
                        </button>
                        <button className="bg-[#C61531] text-white w-[9rem] rounded-md py-1 px-2 flex items-center justify-center gap-1">
                            <img src="Plus.svg" alt="Add new" />
                            Create ticket
                        </button>
                    </div>
                    <div className=" justify-between flex py-1 px-2 w-full">
                        <div className="flex gap-1 mt-5">
                            <h2 className="text-[#4D4D4D]">Workbench</h2>
                            <span className="text-[#C61531] font-semibold">
                                (72)
                            </span>
                        </div>
                        <div className="relative">
                            <img
                                src="searchBar.svg"
                                alt=""
                                className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4"
                            />
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="w-full py-2 pl-10 border bg-[#F0F2FA] rounded-md my-3 outline-none placeholder-gray-500"
                            />
                        </div>
                    </div>
                    <div class="overflow-x-auto rounded-md">
                        <table class="min-w-full bg-white">
                            <thead>
                                <tr class="border-b border-gray-200">
                                    <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                        S/N
                                    </th>
                                    <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                        #ID
                                    </th>
                                    <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                        Title
                                    </th>
                                    <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                        Category
                                    </th>
                                    <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                        Assigned
                                    </th>
                                    <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                        Date Created
                                    </th>
                                    <th class="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                                        Status
                                    </th>
                                    <th class="px-4 py-2 text-right text-sm font-semibold text-gray-600">
                                        <div class="flex items-center justify-end gap-2 cursor-pointer">
                                            <h1 class="text-[#C61531]">
                                                See all
                                            </h1>
                                            <img
                                                src="sideArrow.svg"
                                                alt="Arrow"
                                                class="h-4"
                                            />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-200 hover:bg-gray-50">
                                    <td class="px-4 py-2 text-center">
                                        <img
                                            src="hospitalCross@3x.svg"
                                            alt="Icon"
                                            class="w-8 h-8 rounded-full bg-red-100 mx-auto"
                                        />
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        947736
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        Tunde Bakare Osun
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        Call
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        Valerie O.
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        22 Aug 2022 9:14AM
                                    </td>
                                    <td class="px-4 py-2 text-sm font-semibold text-red-500">
                                        Open
                                    </td>
                                    <td class="px-4 py-2 text-center">
                                        <button class="text-gray-500 hover:text-gray-700">
                                            <span class="text-lg">•••</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr class="border-b border-gray-200 hover:bg-gray-50">
                                    <td class="px-4 py-2 text-center">
                                        <img
                                            src="hospitalCross@3x.svg"
                                            alt="Icon"
                                            class="w-8 h-8 rounded-full bg-red-100 mx-auto"
                                        />
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        947736
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        Tunde Bakare Osun
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        Call
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        Valerie O.
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        22 Aug 2022 9:14AM
                                    </td>
                                    <td class="px-4 py-2 text-sm font-semibold text-red-500">
                                        Open
                                    </td>
                                    <td class="px-4 py-2 text-center">
                                        <button class="text-gray-500 hover:text-gray-700">
                                            <span class="text-lg">•••</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr class="border-b border-gray-200 hover:bg-gray-50">
                                    <td class="px-4 py-2 text-center">
                                        <img
                                            src="hospitalCross@3x.svg"
                                            alt="Icon"
                                            class="w-8 h-8 rounded-full bg-red-100 mx-auto"
                                        />
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        947736
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        Tunde Bakare Osun
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        Call
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        Valerie O.
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        22 Aug 2022 9:14AM
                                    </td>
                                    <td class="px-4 py-2 text-sm font-semibold text-red-500">
                                        Open
                                    </td>
                                    <td class="px-4 py-2 text-center">
                                        <button class="text-gray-500 hover:text-gray-700">
                                            <span class="text-lg">•••</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr class="border-b border-gray-200 hover:bg-gray-50">
                                    <td class="px-4 py-2 text-center">
                                        <img
                                            src="hospitalCross@3x.svg"
                                            alt="Icon"
                                            class="w-8 h-8 rounded-full bg-red-100 mx-auto"
                                        />
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        947736
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        Tunde Bakare Osun
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        Call
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        Valerie O.
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-800">
                                        22 Aug 2022 9:14AM
                                    </td>
                                    <td class="px-4 py-2 text-sm font-semibold text-red-500">
                                        Open
                                    </td>
                                    <td class="px-4 py-2 text-center">
                                        <button class="text-gray-500 hover:text-gray-700">
                                            <span class="text-lg">•••</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
