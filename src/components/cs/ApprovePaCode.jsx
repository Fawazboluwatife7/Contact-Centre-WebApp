import { useNavigate } from "react-router-dom";
import avatar from "../../assets/csImages/Rectangle 896.svg";
import svg from "../../assets/csImages/Ellipse 75.svg";
import dropdown from "../../assets/csImages/Group 2398.svg";
import { useState, useEffect } from "react";

const ApprovePACode = () => {
    const [enrolleeData, setEnrolleeData] = useState(null);
    const navigate = useNavigate();
    const [showTable, setShowTable] = useState(false);

    const toggleTable = () => {
        setShowTable(!showTable);
    };

    useEffect(() => {
        setEnrolleeData({
            name: "John Doe",
            dateOfBirth: "01/01/1990",
            enrolleeId: "LH221121/0",
            contactNumber: "123-456-7890",
            group: "A",
            emailAddress: "johndoe@example.com",
            scheme: "Basic Plan",
            primaryProvider: "Provider A",
            age: 34,
            memberType: "Individual",
            policyDate: "2022-01-01",
            amountSpent: "$200",
        });
    }, []);

    if (!enrolleeData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-lightblue">
            <div className="w-90 p-1 bg-lightblue mr-4">
                <h3 className="font-bold text-lg font-sans ml-6 mt-3 mb-3">
                    Approve PA Request
                </h3>

                <div className="p-1 mx-auto bg-white shadow-md space-y-4 w-[1168px] h-[47px] ml-5 mb-3">
                    <h3 className="font-bold text-lg font-serif mt-1 ml-3">
                        Enrollee Information
                    </h3>
                </div>

                <div className="flex bg-white shadow-md ml-5 w-[1168px] h-[155px]">
                    <div className="bg-white mt-3 mr-10">
                        <div>
                            <img src="" alt="Avatar" className="ml-20 mr-10" />
                        </div>

                        <div className="flex bg-white items-center justify-center">
                            <div>
                                <img
                                    src={svg}
                                    alt="Status Icon"
                                    className=" ml-20 w-3 h-6 mr-2"
                                />
                            </div>
                            <h2 className="">Active</h2>
                        </div>
                    </div>

                    <div className="flex gap-4 w-[1168px] mx-auto mt-4 ml-auto">
                        <div>
                            <div className="flex flex-col">
                                <span className="text-xs">Name</span>
                                <span>{enrolleeData.name}</span>
                            </div>
                            <div className="flex flex-col mt-5">
                                <span className="text-xs">Date of Birth</span>
                                <span>{enrolleeData.dateOfBirth}</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col ml-10">
                                <span className="text-xs">Enrollee Id</span>
                                <span>{enrolleeData.enrolleeId}</span>
                            </div>
                            <div className="flex flex-col mt-5 ml-10">
                                <span className="text-xs">Phone Number</span>
                                <span>{enrolleeData.contactNumber}</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col ml-10">
                                <span className="text-xs">Group</span>
                                <span>{enrolleeData.group}</span>
                            </div>
                            <div className="flex flex-col mt-5 ml-10">
                                <span className="text-xs">Email Address</span>
                                <span>{enrolleeData.emailAddress}</span>
                            </div>
                        </div>

                        <div>
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

                        <div>
                            <div className="flex flex-col ml-10">
                                <span className="text-xs">Age</span>
                                <span>{enrolleeData.age}</span>
                            </div>
                            <div className="flex flex-col mt-5 ml-10">
                                <span className="text-xs">Member Type</span>
                                <span>{enrolleeData.memberType}</span>
                            </div>
                        </div>

                        <div>
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

            <div className="ml-6 bg-white p-6 shadow-md rounded-lg w-[1168px]">
                <h2 className="ml-6 text-[22px] text-red-700 font-bold mb-6">
                    PA Generation Preview
                </h2>

                <div className="ml-6 w-[1100px] h-auto border border-black p-4">
                    <div className="flex justify-between items-center">
                        <h2>Diagnosis 1</h2>
                        <h2>M20</h2>
                        <h2>Common Malaria</h2>
                        <img
                            src={dropdown}
                            alt="Toggle Dropdown"
                            className="cursor-pointer"
                            onClick={toggleTable}
                        />
                    </div>

                    {showTable && (
                        <div className="mt-4">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border border-gray-300 p-2">
                                            Diag Code
                                        </th>
                                        <th className="border border-gray-300 p-2">
                                            Diag Desc
                                        </th>
                                        <th className="border border-gray-300 p-2">
                                            Proc Code
                                        </th>
                                        <th className="border border-gray-300 p-2">
                                            Proc Desc
                                        </th>
                                        <th className="border border-gray-300 p-2">
                                            Exclusions
                                        </th>
                                        <th className="border border-gray-300 p-2">
                                            Reason
                                        </th>
                                        <th className="border border-gray-300 p-2">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array(5)
                                        .fill(0)
                                        .map((_, index) => (
                                            <tr
                                                key={index}
                                                className="text-center"
                                            >
                                                <td className="border border-gray-300 p-2">
                                                    D{index + 1}
                                                </td>
                                                <td className="border border-gray-300 p-2">
                                                    Description {index + 1}
                                                </td>
                                                <td className="border border-gray-300 p-2">
                                                    P{index + 1}
                                                </td>
                                                <td className="border border-gray-300 p-2">
                                                    Procedure {index + 1}
                                                </td>
                                                <td className="border border-gray-300 p-2">
                                                    Exclusion {index + 1}
                                                </td>
                                                <td className="border border-gray-300 p-2">
                                                    Reason {index + 1}
                                                </td>
                                                <td className="border border-gray-300 p-2">
                                                    <button className="bg-blue-700 text-white text-bold px-2 py-1 mr-2 rounded">
                                                        Edit
                                                    </button>
                                                    <button className="bg-red-700 text-white text-bold px-2 py-1 rounded">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                <div className="mb-8 mt-4 ml-6">
                    <h4 className="text-red-700 font-semibold">Total Cost</h4>
                    <h3 className="text-xl font-bold">₦135,000</h3>
                </div>

                <div className="flex justify-between mt-8">
                    <div>
                        <button
                            className="w-[131.78px] h-[37.65px] text-center text-red-700 border border-red-700 rounded-md"
                            onClick={() => navigate("/enrolleeInformations")}
                        >
                            Back
                        </button>
                    </div>
                    <div>
                        <button
                            className="w-[131.78px] h-[37.65px] text-center text-white bg-red-700 rounded-md"
                            onClick={() => navigate("/successGen")}
                        >
                            Generate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovePACode;
