import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import History from "../../components/cs/PAHistory";

function paHistory() {
    return (
        <div className="flex  ">
            <CsSidebar />

            <div className=" w-[77.5rem] ml-auto h-full">
                <Header />
                <History />
            </div>
        </div>
    );
}

export default paHistory;
