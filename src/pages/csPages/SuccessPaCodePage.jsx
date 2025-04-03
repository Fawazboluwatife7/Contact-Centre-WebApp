import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import Success from "../../components/cs/SuccessPaCode";

function RejectPage() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <Success />
      </div>
    </div>
  );
}

export default RejectPage;
