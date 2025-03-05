import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import ManagePA from "../../components/cs/managePA";

function ManagePaPage() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className=" w-full ">
        <Header />
        <ManagePA />
      </div>
    </div>
  );
}

export default ManagePaPage;
