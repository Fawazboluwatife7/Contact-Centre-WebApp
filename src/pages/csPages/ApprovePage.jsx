import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import Approve from "../../components/cs/Approve";

function ApprovePage() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <Approve />
      </div>
    </div>
  );
}

export default ApprovePage;
