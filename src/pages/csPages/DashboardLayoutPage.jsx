import CsSidebar from "../../components/cs/csSideBar";
import CsDashboard from "../../components/cs/csDashboard";
import Header from "../../components/cs/Header";

function CsDashboardLayoutPage() {
    return (
        <div className="flex  ">
            <CsSidebar />

            <div className="w-full">
                <Header />
                <CsDashboard />
            </div>
        </div>
    );
}

export default CsDashboardLayoutPage;
{
    /* <div className="">
    <Sidebar />
    <div className="bg-[#F0F2FA] w-[82%] ml-auto h-full">
        <Header />
        <CsDashboard />
    </div>
</div>; */
}
