import CsSidebar from "../../components/cs/csSideBar";
import Header from "../../components/cs/Header";
import GeneratePaCode from "../../components/cs/generatePaCode";

function EnrolleesPage() {
  return (
    <div className="flex  ">
      <CsSidebar />

      <div className="flex flex-col ">
        <Header />
        <GeneratePaCode />
      </div>
    </div>
  );
}

export default EnrolleesPage;
