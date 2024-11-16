import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import EnrolleePaCode from "../../components/cs/EnrolleePaCode";

function EnrolleePaCodePage() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <EnrolleePaCode />
      </div>
    </div>
  );
}

export default EnrolleePaCodePage;
