import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const Enrollee = () => {
    const [imageSrc, setImageSrc] = useState("searchBar.svg");

    const handleInputChange = (event) => {
        if (event.target.value) {
            setImageSrc("RedSearchIcon.svg"); // Change to red image when there's input
        } else {
            setImageSrc("searchBar.svg"); // Revert to default image if input is cleared
        }
    };
    return (
        <div className="flex">
            <Sidebar />
            <div className="bg-[#F0F2FA] w-[82%] ml-auto pt-[5.1rem]  ">
                <Navbar />
                <div className="mx-7">
                    <div className="mb-2 mt-4">
                        <h1 className="text-[#353535] font-normal text-[25px]">
                            Enrollees
                        </h1>
                    </div>
                    <div className="bg-white grid md:grid-cols-3 gap-4 p-4 w-full rounded-md">
                        <div>
                            <label
                                htmlFor="firstName1"
                                className="text-[#353535] block"
                            >
                                First Name
                            </label>

                            <div className="relative ">
                                <img
                                    src={imageSrc}
                                    alt=""
                                    className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 "
                                />
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500 text-red-700"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="firstName2"
                                className="text-[#353535] block"
                            >
                                Last Name
                            </label>
                            <div className="relative">
                                <img
                                    src={imageSrc}
                                    alt=""
                                    className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="firstName3"
                                className="text-[#353535] block"
                            >
                                Enrollee ID
                            </label>
                            <div className="relative">
                                <img
                                    src={imageSrc}
                                    alt=""
                                    className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="firstName4"
                                className="text-[#353535] block"
                            >
                                Phone Number
                            </label>
                            <div className="relative">
                                <img
                                    src={imageSrc}
                                    alt=""
                                    className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor={imageSrc}
                                className="text-[#353535] block"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <img
                                    src={imageSrc}
                                    alt=""
                                    className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="firstName6"
                                className="text-[#353535] block"
                            >
                                Group
                            </label>
                            <div className="relative">
                                <img
                                    src={imageSrc}
                                    alt=""
                                    className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4"
                                />
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="w-full py-2 pl-10 border bg-white rounded-md my-3 outline-none placeholder-gray-500"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-3 justify-end">
                        <button className="flex items-center justify-center bg-white border border-[#AB111157] text-[#C61531] p-2 rounded-md hover:bg-[#f3f3f3]">
                            <img
                                src="funnel.svg"
                                alt="Funnel Icon"
                                className="h-5 w-5 mr-2"
                            />
                            <span>Filter</span>
                        </button>

                        <button className="flex items-center justify-center bg-white border border-[#AB111157] text-[#C61531] p-2 rounded-md hover:bg-[#f3f3f3]">
                            <img
                                src="Arrowvdown.svg"
                                alt=""
                                className="h-5 w-5 mr-2"
                            />
                            <span>Sort</span>
                        </button>
                    </div>

                    <div class="relative overflow-x-auto shadow-md  mt-3">
                        <table class="w-full text-sm text-left rtl:text-right text-black ">
                            <thead class="text-xs uppercase  bg-white text-black">
                                <tr>
                                    <th scope="col" class="px-2 py-3"></th>
                                    <th scope="col" class="px-6 py-3">
                                        <div class="flex items-center">
                                            Name
                                            <a href="#">
                                                <svg
                                                    class="w-3 h-3 ms-1.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <div class="flex items-center">
                                            Enrollee Id
                                            <a href="#">
                                                <svg
                                                    class="w-3 h-3 ms-1.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <div class="flex items-center">
                                            Scheme
                                            <a href="#">
                                                <svg
                                                    class="w-3 h-3 ms-1.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <div class="flex items-center">
                                            Plan Type
                                            <a href="#">
                                                <svg
                                                    class="w-3 h-3 ms-1.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <div class="flex items-center">
                                            Billing Frequency
                                            <a href="#">
                                                <svg
                                                    class="w-3 h-3 ms-1.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <div class="flex items-center">
                                            Start Date
                                            <a href="#">
                                                <svg
                                                    class="w-3 h-3 ms-1.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=" bg-white">
                                <tr>
                                    <td colspan="7" class="text-center py-4">
                                        <img
                                            src="noRecordFound.svg"
                                            alt="No records found"
                                            class="mx-auto"
                                        />
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

export default Enrollee;
