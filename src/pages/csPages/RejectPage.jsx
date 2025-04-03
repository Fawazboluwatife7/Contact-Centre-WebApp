import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import Reject from "../../components/cs/Reject";

function RejectPage() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <Reject />
      </div>
    </div>
  );
}

export default RejectPage;
