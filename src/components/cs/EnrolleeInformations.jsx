import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function EnrolleeInformations() {
    const [enrolleeData, setEnrolleeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("request");
    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState([]);

    const handleReject = () => {
        navigate("/reject");
    };

    const handleApprove = () => {
        navigate("/approve");
    };

    const dummyData = {
        name: "John Doe",
        dateOfBirth: "1990-05-15",
        enrolleeId: "LH221121/0",
        contactNumber: "+234 806 932 3233",
        group: "Ledway",
        emailAddress: "tundebakare@gmail.com",
        scheme: "NGPRO",
        primaryProvider: "Crystal",
        age: "62",
        memberType: " Age 0 - 60",
        policyDate: "02/10/2021-02/10/2024.",
        amountSpent: "#102,000",
    };

    const tableData = [
        {
            request: [
                {
                    id: 1,
                    date: "2024-11-01",
                    diagnosis: "Diagnosis 1",
                    benefits: "Benefit 1",
                    description: "Description 1",
                    chargeAmount: "$100",
                    qty: "1",
                    visitType: "In-person",
                    status: "Pending",
                },
                {
                    id: 2,
                    date: "2024-11-02",
                    diagnosis: "Diagnosis 2",
                    benefits: "Benefit 2",
                    description: "Description 2",
                    chargeAmount: "$200",
                    qty: "2",
                    visitType: "Online",
                    status: "Pending",
                },
                {
                    id: 2,
                    date: "2024-11-02",
                    diagnosis: "Diagnosis 2",
                    benefits: "Benefit 2",
                    description: "Description 2",
                    chargeAmount: "$200",
                    qty: "2",
                    visitType: "Online",
                    status: "Pending",
                },
                {
                    id: 2,
                    date: "2024-11-02",
                    diagnosis: "Diagnosis 2",
                    benefits: "Benefit 2",
                    description: "Description 2",
                    chargeAmount: "$200",
                    qty: "2",
                    visitType: "Online",
                    status: "Pending",
                },
                {
                    id: 3,
                    date: "2024-11-03",
                    diagnosis: "Diagnosis 3",
                    benefits: "Benefit 3",
                    description: "Description 3",
                    chargeAmount: "$300",
                    qty: "1",
                    visitType: "In-person",
                    status: "Pending",
                },
            ],
        },
    ];

    const tableHeaders = [
        "Date",
        "Diagnosis",
        "Benefits",
        "Description",
        "Charge Amount",
        "QTY",
        "Visit Type",
        "Status",
    ];

    useEffect(() => {
        const fetchEnrolleeData = () => {
            setTimeout(() => {
                setEnrolleeData(dummyData);
                setLoading(false);
            }, 1000);
        };

        fetchEnrolleeData();
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleCheckboxChange = (id) => {
        setSelectedRows((prevSelectedRows) =>
            prevSelectedRows.includes(id)
                ? prevSelectedRows.filter((rowId) => rowId !== id)
                : [...prevSelectedRows, id],
        );
    };

    const isAnyRowSelected = selectedRows.length > 0;

    if (loading) {
        return <div>Loading...</div>;
    }

    const renderTableData = () => {
        const selectedData = tableData[0][activeTab] || [];
        return selectedData.map((item) => (
            <tr key={item.id}>
                <td>
                    <input
                        type="checkbox"
                        className="ml-5 mb-3"
                        checked={selectedRows.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                    />
                </td>
                <td>{item.date}</td>
                <td>{item.diagnosis}</td>
                <td>{item.benefits}</td>
                <td>{item.description}</td>
                <td>{item.chargeAmount}</td>
                <td>{item.qty}</td>
                <td>{item.visitType}</td>
                <td className="text-orange-500">{item.status}</td>
            </tr>
        ));
    };

    return (
        <div className="bg-lightblue">
            <div className="w-90 p-1 bg-lightblue -mt-2 mr-4">
                <h3 className="font-bold text-lg font-sans ml-3 mt-3 mb-3">
                    Lagoon is requesting approval for Enrollee LH221121/0
                </h3>
                <div className="flex justify-end">
                    <Link to="/history">
                        <button>
                            <img
                                src="src/assets/CSIMAGES/eva_arrow-back-outline.svg"
                                alt="Icon"
                                className="w-6 h-6"
                            />
                        </button>
                    </Link>
                    <h4 className="flex items-center text-[#C61531] font-normal text-[16px] leading-[24px] w-[170px] h-[24px] px-4 py-1 text-left">
                        Back to PA Request
                    </h4>
                </div>

                <div className="p-1 mx-auto bg-white shadow-md space-y-4 w-[1168px] h-[47px] ml-5 mb-3">
                    <h3 className="font-bold text-lg font-serif mt-1 ml-3">
                        Enrollee Information
                    </h3>
                </div>

                <div className="flex bg-white shadow-md ml-5 mb-3 w-[1168px] h-[155px]">
                    <div className="bg-white mt-3 ml-5 mr-10">
                        <div>
                            <img
                                src="src/assets/CSIMAGES/Rectangle 896.svg"
                                alt="Avatar"
                                className=""
                            />
                        </div>

                        <div className="flex bg-white item-center justify-center ">
                            <div>
                                <img
                                    src="src/assets/CSIMAGES/Ellipse 75.svg"
                                    alt="Icon"
                                    className="w-3 h-6 mr-2"
                                />
                            </div>
                            <h2 className="">Active</h2>
                        </div>
                    </div>

                    <div className=" flex gap-4 w-[1168px] mx-auto mt-4 ml-auto">
                        <div className="">
                            <div className="flex flex-col">
                                <span className="text-xs">Name</span>
                                <span>{enrolleeData.name}</span>
                            </div>
                            <div className="flex flex-col mt-5 ">
                                <span className="text-xs">Date of Birth</span>
                                <span>{enrolleeData.dateOfBirth}</span>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex flex-col ml-10">
                                <span className="text-xs">Enrolle Id</span>
                                <span>{enrolleeData.enrolleeId}</span>
                            </div>
                            <div className="flex flex-col mt-5 ml-10">
                                <span className="text-xs">Phone Number</span>
                                <span>{enrolleeData.contactNumber}</span>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex flex-col ml-10">
                                <span className="text-xs">Group</span>
                                <span>{enrolleeData.group}</span>
                            </div>
                            <div className="flex flex-col mt-5 ml-10">
                                <span className="text-xs">Email Address</span>
                                <span>{enrolleeData.emailAddress}</span>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex flex-col ml-10">
                                <span className="text-xs">Scheme</span>
                                <span>{enrolleeData.scheme}</span>
                            </div>
                            <div className="flex flex-col mt-5 ml-10">
                                <span className="text-xs">
                                    Primary Provider
                                </span>
                                <span>{enrolleeData.primaryProvider}</span>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex flex-col ml-10">
                                <span className="text-xs">Age</span>
                                <span>{enrolleeData.age}</span>
                            </div>
                            <div className="flex flex-col mt-5 ml-10">
                                <span className="text-xs">Member Type</span>
                                <span>{enrolleeData.memberType}</span>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex flex-col ml-10">
                                <span className="text-xs">Policy Date</span>
                                <span>{enrolleeData.policyDate}</span>
                            </div>
                            <div className="flex flex-col mt-5 ml-10">
                                <span className="text-xs">Amount Spent</span>
                                <span>{enrolleeData.amountSpent}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex space-x-1 mt-4 bg-lightblue-500 w-[577px] h-[43px] bg-white ml-6">
                {["Request", "PA History", "Hospital Visits", "Benefits"].map(
                    (tab) => (
                        <div
                            key={tab}
                            className={`p-2 cursor-pointer rounded w-[142px] h-[43px] text-[12px] flex items-center justify-center ${
                                activeTab === tab.toLowerCase()
                                    ? "bg-white text-red-700"
                                    : "bg-red-700 text-white"
                            }`}
                            onClick={() => handleTabClick(tab.toLowerCase())}
                        >
                            {tab}
                        </div>
                    ),
                )}
            </div>
            <div className=" h-[350px] ml-6 w-[1165px] bg-white shadow-md">
                <table className="table-auto w-[1165px]">
                    <thead>
                        <tr>
                            <th></th>
                            {tableHeaders.map((header) => (
                                <th
                                    key={header}
                                    className="px-4 py-2 text-left text-[#1F4173]"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>{renderTableData()}</tbody>
                </table>
            </div>

            <div className="flex justify-center space-x-8 mt-[50px] mb-10">
                <div
                    className={`${
                        isAnyRowSelected
                            ? "text-red-700 bg-white border-2 border-red-700 cursor-pointer"
                            : "text-gray-400 bg-gray-200 border-2 border-gray-400 cursor-not-allowed"
                    } w-[185.94px] h-[60px] flex items-center justify-center transition duration-300 ease-in-out`}
                    onClick={isAnyRowSelected ? handleReject : null}
                >
                    Reject
                </div>
                <div
                    className={`${
                        isAnyRowSelected
                            ? "text-white bg-red-700 cursor-pointer"
                            : "text-gray-400 bg-gray-200 cursor-not-allowed"
                    } w-[185.94px] h-[60px] flex items-center justify-center transition duration-300 ease-in-out border-2 border-red-700`}
                    onClick={isAnyRowSelected ? handleApprove : null}
                >
                    Approve
                </div>
            </div>
        </div>
    );
}

export default EnrolleeInformations;
