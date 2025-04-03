import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import Approvval from "../../components/cs/ApprovePaCode";

function EnrolleesPage() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <Approvval />
      </div>
    </div>
  );
}

export default EnrolleesPage;
