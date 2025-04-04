import User1 from "../../assets/csImages/Vector.svg";
import User2 from "../../assets/csImages/bxs_user.svg";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";

const ManagePA = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Sidebar />
            jhfhghj
            <div className="bg-[#F0F2FA] w-[82%] ml-auto h-[100vh] overflow-y-auto">
                <Header className="sticky top-0 z-50 bg-white shadow-md" />
                <div className="bg-lightblue h-[100vh] flex flex-col px-5">
                    <h3 className=" text-[30px]  text-gray-800 font-bold ">
                        Manage PA
                    </h3>

                    <div className="bg-white h-[38rem] p-8 mt-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                        <div className="text-center mb-6">
                            <h4 className="text-[24px]  text-gray-800 mb-2">
                                Approve or generate a pre-authorization code
                            </h4>
                            <h6 className="text-red-700  text-[15px]">
                                Select an option to get started
                            </h6>
                        </div>

                        {/* Action Cards */}
                        <div className="flex gap-10 mt-20">
                            <div>
                                <div
                                    onClick={() =>
                                        navigate("/createpaenrolleesearch")
                                    }
                                    className="w-[298px] h-[306px] flex flex-col items-center cursor-pointer rounded-lg shadow-md bg-white hover:shadow-lg hover:ring-4 hover:ring-red-700 transition duration-300 "
                                >
                                    <img
                                        src={User2}
                                        alt="Generate PA Code"
                                        className="mb-4 mt-14"
                                    />
                                    <h2 className="text-red-700 text-[25px] font-bold text-center">
                                        Generate PA Code
                                    </h2>
                                </div>
                            </div>

                            <div
                                onClick={() => navigate("/history")}
                                className="w-[298px] h-[306px] flex flex-col items-center cursor-pointer rounded-lg shadow-md bg-white hover:shadow-lg hover:ring-4 hover:ring-red-700 transition duration-300"
                            >
                                <img
                                    src={User1}
                                    alt="Portal Request"
                                    className="mb-4 mt-16"
                                />
                                <h2 className="text-red-700 text-[25px] font-bold text-center">
                                    Portal Request
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePA;
