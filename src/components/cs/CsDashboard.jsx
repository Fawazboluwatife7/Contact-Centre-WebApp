import React, { useState, useEffect } from "react";
import rightangle from "../../assets/CSIMAGES/rightangleimg.svg";
import plusbutton from "../../assets/CSIMAGES/plusbutton.svg";
import barchart from "../../assets/CSIMAGES/barchat.svg";
import bluebarchat from "../../assets/CSIMAGES/bluechat.svg";
import skybluechart from "../../assets/CSIMAGES/skybluechat.svg";
import orangechart from "../../assets/CSIMAGES/orangechat.svg";
import search from "../../assets/CSIMAGES/Search.svg";
import eachuser from "../../assets/CSIMAGES/eachuser.svg";
import angleupdown from "../../assets/CSIMAGES/angleupdown.svg";

import { useNavigate } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";

function CsDashboard() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [todayDate, setTodayDate] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const navigate = useNavigate(); // Initialize the navigate function

    const handleSeeAll = () => {
        navigate("/ticket", { state: { filter: "Escalation" } });
    };

    // Function to handle navigation
    const handleNavigate = (path) => {
        navigate(path);
    };

    // Simulate loading data (useEffect not needed for static data)
    useEffect(() => {
        setTimeout(() => {
            setData([
                {
                    name: "John Doe",
                    enrolleeId: "ENR123456",
                    date: "2024-10-12",
                    hospital: "General Hospital",
                    diagnosis: "Flu",
                    status: "Open",
                    image: eachuser,
                },
                {
                    name: "Jane Smith",
                    enrolleeId: "ENR789101",
                    date: "2024-10-10",
                    hospital: "City Clinic",
                    diagnosis: "Headache",
                    status: "Closed",
                    image: eachuser,
                },
                {
                    name: "Mary Johnson",
                    enrolleeId: "ENR112233",
                    date: "2024-10-11",
                    hospital: "Greenwood Medical",
                    diagnosis: "Back Pain",
                    status: "Open",
                    image: eachuser,
                },
                {
                    name: "James Brown",
                    enrolleeId: "ENR445566",
                    date: "2024-10-09",
                    hospital: "City Hospital",
                    diagnosis: "Cold",
                    status: "Closed",
                    image: eachuser,
                },
                {
                    name: "Robert White",
                    enrolleeId: "ENR778899",
                    date: "2024-10-08",
                    hospital: "Downtown Hospital",
                    diagnosis: "Cough",
                    status: "Open",
                    image: eachuser,
                },
                {
                    name: "Linda Green",
                    enrolleeId: "ENR223344",
                    date: "2024-10-07",
                    hospital: "St. Mary's Hospital",
                    diagnosis: "Fatigue",
                    status: "Open",
                    image: eachuser,
                },
                {
                    name: "Michael Black",
                    enrolleeId: "ENR556677",
                    date: "2024-10-06",
                    hospital: "Sunset Clinic",
                    diagnosis: "Stomach Ache",
                    status: "Closed",
                    image: eachuser,
                },
                {
                    name: "Elizabeth Blue",
                    enrolleeId: "ENR998877",
                    date: "2024-10-05",
                    hospital: "River Hospital",
                    diagnosis: "Skin Rash",
                    status: "Open",
                    image: eachuser,
                },
                {
                    name: "William Grey",
                    enrolleeId: "ENR334455",
                    date: "2024-10-04",
                    hospital: "Northern Clinic",
                    diagnosis: "High Blood Pressure",
                    status: "Closed",
                    image: eachuser,
                },
                {
                    name: "Susan Purple",
                    enrolleeId: "ENR667788",
                    date: "2024-10-03",
                    hospital: "Eastside Medical",
                    diagnosis: "Diabetes",
                    status: "Open",
                    image: eachuser,
                },
                {
                    name: "David Yellow",
                    enrolleeId: "ENR223366",
                    date: "2024-10-02",
                    hospital: "Sunnyvale Hospital",
                    diagnosis: "Asthma",
                    status: "Closed",
                    image: eachuser,
                },
                {
                    name: "Helen Pink",
                    enrolleeId: "ENR445566",
                    date: "2024-10-01",
                    hospital: "Westview Medical",
                    diagnosis: "Anxiety",
                    status: "Open",
                    image: eachuser,
                },
            ]);
            setLoading(false);
        }, 1000); // Simulate a 1-second delay
    }, []);

    // Dummy data for Escalations
    const escalations = [
        {
            description: "Escalation 1: Issue with the server not responding.",
        },
        {
            description:
                "Escalation 2: User unable to access their account due to login error.",
        },
        {
            description:
                "Escalation 3: Critical bug in the production environment affecting users.",
        },
    ];

    // if (loading) {
    //     return (
    //         <div className="w-full p-5 bg-lightblue mt-10">
    //             <div className="animate-pulse bg-gray-200 w-full h-10 mb-4 rounded"></div>
    //             <div className="animate-pulse bg-gray-200 w-full h-10 mb-4 rounded"></div>
    //             <div className="animate-pulse bg-gray-200 w-full h-10 mb-4 rounded"></div>
    //         </div>
    //     );
    // }

    if (error) {
        return (
            <div className="w-full p-5 bg-lightblue mt-10">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    const paginateData = showAll ? data : data.slice(0, 7);

    function getTodayDate() {
        const today = new Date();
        const day = today.getDate().toString().padStart(2, "0"); // Ensure two-digit format
        const month = today.toLocaleString("en-US", { month: "short" }); // Get three-letter month
        const year = today.getFullYear();

        return `${day}-${month}-${year}`;
    }

    useEffect(() => {
        setTodayDate(getTodayDate());
    }, []);

    return (
        <div className="w-full px-3 h-full">
            {/* Stats Section */}
            <div className="  ">
                <div className="flex justify-between w-full mt-3">
                    <span>Hi, Favour</span>

                    <div className="bg-white rounded-md w-[8rem] py-2 flex gap-2">
                        <CiCalendar className=" text-[20px] mt-0.5 ml-1" />
                        <h1 className=" font-medium">{todayDate}</h1>
                    </div>
                </div>
                <h4 className=" mb-2">Your Dashboard</h4>
            </div>

            {/* First Div (Grid) */}
            <div className="flex w-full bg-lightblue">
                <div className="grid grid-cols-2 gap-2 mr-4 w-1/2 ">
                    <div className="bg-white w-full h-[7.5rem] rounded-md py-4 px-4">
                        <img src={barchart} />
                        <p className="text-[#7E7E7E]">PA Request</p>
                        <span className="text-[1.6rem] font-bold">275</span>
                    </div>
                    <div className="bg-white w-full h-[7.5rem] rounded-md py-4 px-4">
                        <img src={bluebarchat} />
                        <p className="text-[#7E7E7E]">Approved PA Requests</p>
                        <span className="text-[1.6rem] font-bold">182</span>
                    </div>
                    <div className="bg-white w-full h-[7.5rem] rounded-md py-4 px-4">
                        <img src={skybluechart} />
                        <p className="text-[#7E7E7E]">Open Tickets</p>
                        <span className="text-[1.6rem] font-bold">2300</span>
                    </div>
                    <div className="bg-white w-full h-[7.5rem] rounded-md py-4 px-4">
                        <img src={orangechart} />
                        <p className="text-[#7E7E7E]">Closed Tickets</p>
                        <span className="text-[1.6rem] font-bold">42</span>
                    </div>
                </div>

                {/* Second Div (Escalations Section) */}
                <div className="w-1/2 flex flex-col bg-white">
                    {/* Header Section */}
                    <div className="flex  justify-between p-1 bg-white">
                        <h2 className="text-2xl font-semibold">Escalations</h2>

                        <button
                            onClick={handleSeeAll}
                            className="flex justify-center text-[13px] items-center text-red-500 py-2  rounded-md cursor-pointer"
                        >
                            See All
                            <img src={rightangle} alt="Arrow" />
                        </button>
                    </div>

                    {/* List of Escalations */}
                    <div>
                        {/* Render Escalations */}
                        {escalations.map((escalation, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center p-4 border rounded-sm bg-white w-full h-[70px] border-gray-300 font-productSans"
                            >
                                <div className="flex gap-1 ">
                                    <img
                                        src={eachuser}
                                        alt="User Image"
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-black text-[13px]">
                                            {escalation.description}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        className="text-[12px] rounded-sm p-2 flex items-center justify-between gap-1 text-center text-red-500"
                                        onClick={() =>
                                            handleNavigate(
                                                "/escalation-details",
                                            )
                                        }
                                    >
                                        Take Action
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-3 flex justify-start space-x-4">
                {/* Search Enrollee Button */}
                <button
                    onClick={() => handleNavigate("/enrollees")}
                    className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-300"
                >
                    Search Enrollee
                </button>

                {/* Manage PA Button */}
                <button
                    onClick={() => handleNavigate("/managePa")}
                    className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-300"
                >
                    Manage PA
                </button>

                {/* Create Ticket Button with Image */}
                <button
                    onClick={() => handleNavigate("/create-ticket")}
                    className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-300"
                >
                    <img
                        src={plusbutton}
                        alt="Create Ticket"
                        className="w-5 h-5 mr-2"
                    />
                    Create Ticket
                </button>
            </div>

            {/* Data Table Section */}
            <div className="overflow-x-auto mt-8 bg-white">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-b-2">
                            <th className="py-3 px-4 text-transparent text-left">
                                Image
                            </th>
                            <th className="py-3 px-4 text-left">
                                Name
                                <img
                                    src={angleupdown}
                                    alt="Image"
                                    className="inline w-3 h-3 ml-2"
                                />
                            </th>
                            <th className="py-3 px-4 text-left">
                                Enrollee ID
                                <img
                                    src={angleupdown}
                                    alt="Image"
                                    className="inline w-3 h-3 ml-2"
                                />
                            </th>
                            <th className="py-3 px-4 text-left">
                                Date
                                <img
                                    src={angleupdown}
                                    alt="Image"
                                    className="inline w-3 h-3 ml-2"
                                />
                            </th>
                            <th className="py-3 px-4 text-left">
                                Hospital
                                <img
                                    src={angleupdown}
                                    alt="Image"
                                    className="inline w-3 h-3 ml-2"
                                />
                            </th>
                            <th className="py-3 px-4 text-left">
                                Diagnosis
                                <img
                                    src={angleupdown}
                                    alt="Image"
                                    className="inline w-3 h-3 ml-2"
                                />
                            </th>
                            <th className="py-3 px-4 text-left">
                                Status
                                <img
                                    src={angleupdown}
                                    alt="Image"
                                    className="inline w-3 h-3 ml-2"
                                />
                            </th>
                            <th className="py-3 px-4 text-left">
                                <button
                                    className="py-2 px-4 flex items-center text-red-500 rounded-md"
                                    onClick={() => setShowAll(!showAll)}
                                >
                                    {showAll ? "Show Less" : "Show All"}
                                    <img src={rightangle} alt="Arrow" />
                                </button>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {paginateData
                            .filter((item) => {
                                return (
                                    item.name
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase()) ||
                                    item.enrolleeId
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase()) ||
                                    item.date
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                                );
                            })
                            .map((item, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-2 px-4">
                                        <img
                                            src={item.image}
                                            alt="User"
                                            className="w-10 h-10 rounded-full"
                                        />
                                    </td>
                                    <td className="py-2 px-4">{item.name}</td>
                                    <td className="py-2 px-4">
                                        {item.enrolleeId}
                                    </td>
                                    <td className="py-2 px-4">{item.date}</td>
                                    <td className="py-2 px-4">
                                        {item.hospital}
                                    </td>
                                    <td className="py-2 px-4">
                                        {item.diagnosis}
                                    </td>
                                    <td className="py-2 px-4">{item.status}</td>
                                    <td className="py-2 px-10">...</td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-center mt-4"></div>
            </div>
        </div>
    );
}

export default CsDashboard;
